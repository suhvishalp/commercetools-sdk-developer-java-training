package com.lifestylehomecorp.extensibility.api;

import com.lifestylehomecorp.extensibility.application.EventConsumerService;
import com.lifestylehomecorp.extensibility.domain.Checkpoint;
import com.lifestylehomecorp.extensibility.domain.ConsumerRun;
import com.lifestylehomecorp.platform.annotations.TaskDescription;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/** 7.4 — the idempotent consumer (polling) and its checkpoint. Ops-side: the storefront never calls this. */
@RestController
public class EventController {

    private final EventConsumerService consumer;

    public EventController(EventConsumerService consumer) {
        this.consumer = consumer;
    }

    @TaskDescription(
            module = "extensibility", session = "Session 7", taskNumber = 4,
            title = "The idempotent consumer (polling)", tier = "T2", capability = "ext.consumer",
            description = "Implement EventConsumerService.processNext(): read the checkpoint Custom Object "
                    + "(lhc-processed / order-consumer), query Messages newer than it (OrderPaymentStateChanged, "
                    + "OrderCreated; createdAt asc), skip anything already seen (by id, and by sequenceNumber per "
                    + "resource), and for each order that became Paid call the BFF's own PUT /api/orders/{orderNumber}/state "
                    + "to move it to order-picked. Advance the checkpoint ONLY after the batch succeeded; stop at the first "
                    + "failure. Calling POST /api/events/process twice must transition once. This is a poll standing in for a "
                    + "push — Session 8's Connect Event app runs the same handler on real delivery.",
            hint = "Docs: Messages (query predicates, sequenceNumber, resourceVersion); Custom Objects (versioned "
                    + "create-or-update); Subscriptions — Delivery guarantees (at-least-once, unordered).",
            decisions = {
                    "Where the checkpoint lives — a Custom Object (survives restarts) vs memory (replays; the effect-dedupe saves you) vs a field on the resource.",
                    "What 'handled' means — transitioned, or transitioned-or-already-there (the reference).",
                    "Ordering — per resource by sequenceNumber; never assume global order across the log.",
                    "Failure policy — stop the batch at the first failure (preserves order) vs dead-letter and continue."
            })
    @PostMapping("/api/events/process")
    public ConsumerRun process(@RequestParam(defaultValue = "100") int limit) {
        return consumer.processNext(limit);
    }

    /** The consumer's memory, as stored. */
    @GetMapping("/api/events/checkpoint")
    public Checkpoint checkpoint() {
        return consumer.checkpoint();
    }

    /** Demo replay: forget the checkpoint. The next /process re-reads the last day — and must handle nothing twice. */
    @DeleteMapping("/api/events/checkpoint")
    public Map<String, Object> reset() {
        boolean existed = consumer.reset();
        return Map.of("reset", existed, "note", existed
                ? "Checkpoint deleted. POST /api/events/process now replays the last day — watch it handle nothing twice."
                : "There was no checkpoint yet.");
    }
}
