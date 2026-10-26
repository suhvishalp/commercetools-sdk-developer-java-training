package com.lifestylehomecorp.training.progress;

import com.lifestylehomecorp.training.catalog.TaskCatalog;
import com.lifestylehomecorp.platform.identity.ParticipantIdentity;
import com.lifestylehomecorp.training.domain.ParticipantProgress;
import com.lifestylehomecorp.training.domain.TaskDefinition;
import com.lifestylehomecorp.training.domain.TaskEntry;
import com.lifestylehomecorp.training.domain.TaskProgress;
import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Owns the CURRENT participant's progress in memory and writes through to the {@link ProgressStore}.
 *
 * <p>Completion never blocks the API response: the in-memory cache is updated synchronously and the
 * store write is fire-and-forget with error logging, so a tracking failure never fails the real
 * request. The master task list is derived from {@link TaskCatalog}; only progress is persisted.
 */
@Service
public class ProgressService {

    private static final Logger log = LoggerFactory.getLogger(ProgressService.class);

    private final ProgressStore store;
    private final TaskCatalog catalog;
    private final ParticipantIdentity identity;

    private final ConcurrentHashMap<String, TaskProgress> current = new ConcurrentHashMap<>();

    public ProgressService(ProgressStore store, TaskCatalog catalog, ParticipantIdentity identity) {
        this.store = store;
        this.catalog = catalog;
        this.identity = identity;
    }

    @PostConstruct
    void loadOnStartup() {
        try {
            store.load(identity.id())
                    .ifPresent(pp -> pp.tasks().forEach(
                            te -> current.put(te.id(),
                                    new TaskProgress(te.completed(), te.completedAt(), te.conceptAt(), te.taskAt()))));
        } catch (Exception e) {
            log.warn("Could not seed progress on startup: {}", e.getMessage());
        }
    }

    /** Mark a task complete (idempotent). Updates memory synchronously, persists fire-and-forget. */
    public void markComplete(String taskId) {
        TaskProgress existing = current.getOrDefault(taskId, TaskProgress.NONE);
        if (existing.completed()) {
            return;
        }
        current.put(taskId, existing.withCompleted(Instant.now().toString()));
        persistAsync();
    }

    /** The steps before a task completes, each recorded once: "concept" (last slide reached), "task" (card opened). */
    public enum Step { CONCEPT, TASK }

    /**
     * Record a step for a task (idempotent: the first timestamp stays). Same write-through as
     * completion, so the trainer dashboard and the Custom Object carry concept → task → Try It.
     */
    public void markStep(String taskId, Step step) {
        TaskProgress existing = current.getOrDefault(taskId, TaskProgress.NONE);
        String now = Instant.now().toString();
        TaskProgress next = step == Step.CONCEPT ? existing.withConcept(now) : existing.withTask(now);
        if (next.equals(existing)) {
            return;
        }
        current.put(taskId, next);
        persistAsync();
    }

    public boolean isCompleted(String taskId) {
        TaskProgress tp = current.get(taskId);
        return tp != null && tp.completed();
    }

    /** Current participant's progress snapshot. */
    public ParticipantProgress currentProgress() {
        return snapshot();
    }

    /**
     * Storefront capabilities that no task registers on its own but that a task's work makes true:
     * the PDP's price block is live once the product read with price selection works (2.2), and the
     * availability badge once the inventory-mode task is done (4.6). Without this map those two
     * FeatureGates could never unlock (seen in the first delivery).
     */
    private static final java.util.Map<String, String> DERIVED_CAPABILITIES = java.util.Map.of(
            "pricing.resolve", "catalog.pdp",
            "inventory.read", "cart.stockGate");

    /** Distinct capabilities of the current participant's completed tasks (drives FeatureGate). */
    public List<String> unlockedCapabilities() {
        List<String> direct = catalog.tasks().stream()
                .filter(t -> isCompleted(t.id()))
                .map(TaskDefinition::capability)
                .filter(c -> c != null && !c.isBlank())
                .distinct()
                .toList();
        List<String> all = new java.util.ArrayList<>(direct);
        DERIVED_CAPABILITIES.forEach((derived, source) -> {
            if (direct.contains(source) && !all.contains(derived)) {
                all.add(derived);
            }
        });
        return List.copyOf(all);
    }

    public List<ParticipantProgress> allProgress() {
        return store.loadAll();
    }

    /** Reset the current participant's progress. */
    public void reset() {
        current.clear();
        persistAsync();
    }

    private ParticipantProgress snapshot() {
        List<TaskEntry> entries = current.entrySet().stream()
                .map(e -> new TaskEntry(e.getKey(), e.getValue().completed(), e.getValue().completedAt(),
                        e.getValue().conceptAt(), e.getValue().taskAt()))
                .toList();
        return new ParticipantProgress(
                identity.id(),
                identity.name(),
                Instant.now().toString(),
                entries);
    }

    private void persistAsync() {
        ParticipantProgress pp = snapshot();
        CompletableFuture.runAsync(() -> {
            try {
                store.save(pp);
            } catch (Exception e) {
                log.warn("Progress write failed for {} (ignored): {}", pp.participantId(), e.getMessage());
            }
        });
    }

    public Map<String, TaskProgress> currentTasks() {
        return Map.copyOf(current);
    }
}
