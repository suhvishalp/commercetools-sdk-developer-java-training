package com.lifestylehomecorp.extensibility.api;

import com.lifestylehomecorp.extensibility.application.TimelineService;
import com.lifestylehomecorp.extensibility.domain.TimelineEntry;
import com.lifestylehomecorp.platform.annotations.TaskDescription;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/** 7.3 — the order timeline, read from the Project's event log (Messages). */
@RestController
public class TimelineController {

    private final TimelineService timeline;

    public TimelineController(TimelineService timeline) {
        this.timeline = timeline;
    }

    @TaskDescription(
            module = "extensibility", session = "Session 7", taskNumber = 3,
            title = "Messages: the order timeline", tier = "T1", capability = "ext.messages",
            description = "Implement MessageRepository.byResource(resourceTypeId, resourceId, types, limit) in the "
                    + "extensibility module's infrastructure layer — messages().get() with the predicate "
                    + "`resource(typeId = :rt and id = :id) and type in (\"OrderCreated\", ...)`, sorted `sequenceNumber asc`, "
                    + "returning the raw Message list. Messages are the Project's append-only event log (opt-in — the Session 6 "
                    + "seeder enabled it; NOT retroactive). Every Message carries resourceVersion + sequenceNumber — the two "
                    + "numbers an idempotent consumer keys on (7.4). The service resolves the order number (own read), checks "
                    + "ownership (someone else's order is a 404) and projects each type to a one-line step. The payload you read "
                    + "here is byte-for-byte what a Subscription would have pushed. GET /api/orders/{orderNumber}/timeline.",
            hint = "Docs: Messages — Query Messages, Message fields usable in predicates (sequenceNumber, resource, type); "
                    + "Cart and Order Messages (docs.commercetools.com/api/projects/messages).")
    @GetMapping("/api/orders/{orderNumber}/timeline")
    public List<TimelineEntry> timeline(@PathVariable String orderNumber, @RequestParam(defaultValue = "en-US") String locale) {
        return timeline.timeline(orderNumber, locale);
    }
}
