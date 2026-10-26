package com.lifestylehomecorp.training.api;

import com.lifestylehomecorp.training.api.TrainingDtos.CapabilitiesResponse;
import com.lifestylehomecorp.training.api.TrainingDtos.Counts;
import com.lifestylehomecorp.training.api.TrainingDtos.ModuleGroup;
import com.lifestylehomecorp.training.api.TrainingDtos.ParticipantSummary;
import com.lifestylehomecorp.training.api.TrainingDtos.ProgressResponse;
import com.lifestylehomecorp.training.api.TrainingDtos.SessionGroup;
import com.lifestylehomecorp.training.api.TrainingDtos.StepRequest;
import com.lifestylehomecorp.training.api.TrainingDtos.StepState;
import com.lifestylehomecorp.training.api.TrainingDtos.TaskItem;
import com.lifestylehomecorp.training.catalog.TaskCatalog;
import com.lifestylehomecorp.platform.identity.ParticipantIdentity;
import com.lifestylehomecorp.training.domain.ParticipantProgress;
import com.lifestylehomecorp.training.domain.TaskDefinition;
import com.lifestylehomecorp.training.domain.TaskProgress;
import com.lifestylehomecorp.training.progress.ProgressService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * The training endpoints, assembled by the aggregator. The master task list is derived from
 * {@link TaskCatalog}; only per-participant progress is persisted (via {@link ProgressService}).
 */
@RestController
public class TrainingController {

    private final TaskCatalog catalog;
    private final ProgressService progress;
    private final ParticipantIdentity identity;

    public TrainingController(TaskCatalog catalog, ProgressService progress, ParticipantIdentity identity) {
        this.catalog = catalog;
        this.progress = progress;
        this.identity = identity;
    }

    /** Master list grouped module -> session, with the current participant's completion flags. */
    @GetMapping("/api/training/tasks")
    public List<ModuleGroup> tasks() {
        Map<String, Map<String, List<TaskItem>>> grouped = new LinkedHashMap<>();
        for (TaskDefinition t : catalog.tasks()) {
            TaskItem item = new TaskItem(
                    t.id(), t.module(), t.session(), t.taskNumber(), t.title(), t.tier(),
                    t.capability(), t.endpoint(), t.httpMethod(), t.description(), t.hint(),
                    t.decisions(), progress.isCompleted(t.id()));
            grouped.computeIfAbsent(t.module(), m -> new LinkedHashMap<>())
                    .computeIfAbsent(t.session(), s -> new java.util.ArrayList<>())
                    .add(item);
        }
        return grouped.entrySet().stream()
                .map(me -> new ModuleGroup(me.getKey(),
                        me.getValue().entrySet().stream()
                                .map(se -> new SessionGroup(se.getKey(), se.getValue()))
                                .toList()))
                .toList();
    }

    /** Current participant's progress. */
    @GetMapping("/api/training/progress")
    public ProgressResponse progress() {
        List<TaskDefinition> all = catalog.tasks();
        Map<String, Boolean> perTask = new LinkedHashMap<>();
        int completed = 0;
        for (TaskDefinition t : all) {
            boolean done = progress.isCompleted(t.id());
            perTask.put(t.id(), done);
            if (done) {
                completed++;
            }
        }
        Map<String, StepState> steps = new LinkedHashMap<>();
        progress.currentTasks().forEach((id, tp) -> steps.put(id, new StepState(tp.conceptAt(), tp.taskAt(), tp.completedAt())));
        return new ProgressResponse(identity.id(), completed, all.size(), perTask, steps);
    }

    /** The Introduction (slides only) is tracked like a task so the trainer sees who watched it. */
    public static final String INTRO_ID = "intro";

    /**
     * Canvas records a step: {"taskId": "...", "step": "concept" | "task"}. Concept = the last slide
     * was reached; task = the task card was opened. Completion itself still comes from Try It.
     */
    @PostMapping("/api/training/progress/step")
    public ProgressResponse step(@RequestBody StepRequest req) {
        boolean known = INTRO_ID.equals(req.taskId())
                || catalog.tasks().stream().anyMatch(t -> t.id().equals(req.taskId()));
        if (req.taskId() == null || !known) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "unknown taskId: " + req.taskId());
        }
        ProgressService.Step step;
        try {
            step = ProgressService.Step.valueOf(String.valueOf(req.step()).toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "step must be concept or task");
        }
        progress.markStep(req.taskId(), step);
        return progress();
    }

    /** Trainer dashboard: every participant in the container with breakdowns. */
    @GetMapping("/api/training/progress/all")
    public List<ParticipantSummary> progressAll() {
        List<TaskDefinition> all = catalog.tasks();
        return progress.allProgress().stream()
                .map(pp -> summarize(pp, all))
                .toList();
    }

    /** What the Storefront FeatureGate consumes: distinct capabilities of completed tasks. */
    @GetMapping("/api/training/capabilities")
    public CapabilitiesResponse capabilities() {
        return new CapabilitiesResponse(progress.unlockedCapabilities());
    }

    /** Reset the current participant's progress. */
    @PostMapping("/api/training/reset")
    public ProgressResponse reset() {
        progress.reset();
        return progress();
    }

    private ParticipantSummary summarize(ParticipantProgress pp, List<TaskDefinition> all) {
        Map<String, int[]> perSession = new LinkedHashMap<>();
        Map<String, int[]> perTier = new LinkedHashMap<>();
        Map<String, Boolean> perTask = new LinkedHashMap<>();
        java.util.Set<String> doneIds = pp.tasks().stream()
                .filter(com.lifestylehomecorp.training.domain.TaskEntry::completed)
                .map(com.lifestylehomecorp.training.domain.TaskEntry::id)
                .collect(java.util.stream.Collectors.toSet());
        int completed = 0;
        for (TaskDefinition t : all) {
            boolean done = doneIds.contains(t.id());
            perTask.put(t.id(), done);
            if (done) {
                completed++;
            }
            perSession.computeIfAbsent(t.session(), s -> new int[2])[1]++;
            perTier.computeIfAbsent(t.tier(), s -> new int[2])[1]++;
            if (done) {
                perSession.get(t.session())[0]++;
                perTier.get(t.tier())[0]++;
            }
        }
        Map<String, StepState> steps = new LinkedHashMap<>();
        pp.tasks().forEach(te -> steps.put(te.id(), new StepState(te.conceptAt(), te.taskAt(), te.completedAt())));
        return new ParticipantSummary(
                pp.participantId(), pp.participantName(), completed, all.size(), pp.updatedAt(),
                toCounts(perSession), toCounts(perTier), perTask, steps);
    }

    private static Map<String, Counts> toCounts(Map<String, int[]> raw) {
        Map<String, Counts> out = new LinkedHashMap<>();
        raw.forEach((k, v) -> out.put(k, new Counts(v[0], v[1])));
        return out;
    }
}
