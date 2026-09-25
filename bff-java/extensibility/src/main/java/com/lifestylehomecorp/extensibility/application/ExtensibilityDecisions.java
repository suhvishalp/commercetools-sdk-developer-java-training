package com.lifestylehomecorp.extensibility.application;

import com.lifestylehomecorp.extensibility.domain.DecisionRow;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import com.lifestylehomecorp.platform.errors.TaskNotImplementedException;

/**
 * 7.9 — the extensibility decision, as data. Five LHC requirements, five mechanisms, and the order of
 * questions that gets you there: sync vs async first; "can the BFF do it before the call?" second (the
 * default — an Extension is the exception); who else writes third; cost of being wrong fourth.
 * Also 7.5 — the Subscription concept the room cannot provision, shown as data.
 */
@Service
public class ExtensibilityDecisions {

    public List<DecisionRow> table() {
        // TODO (Task 7.9): map each of LHC's five requirements to the mechanism that serves it, with the reason, the
        // task that built it, and the wrong choice it avoids. Ask in this order: sync or async? can
        // the BFF do it before the call? who else writes? cost of being wrong? See the
        // @TaskDescription.
        throw new TaskNotImplementedException("7.9");
    }

    public Map<String, Object> questions() {
        Map<String, Object> q = new LinkedHashMap<>();
        q.put("1", "Sync or async? Must it happen BEFORE the write persists (validation, enrichment)? Only then an Extension.");
        q.put("2", "Can the BFF do it before the call? Then do it there — the default. An Extension is the exception.");
        q.put("3", "Who else writes? Merchant Center, imports, a Connect app → the rule must live in the platform.");
        q.put("4", "Cost of being wrong? A slow Extension degrades every client; a lost Message is redelivered; a bad import row is one failed line.");
        return q;
    }

    public Map<String, Object> subscriptionConcept() {
        Map<String, Object> doc = new LinkedHashMap<>();
        doc.put("what", "A Subscription pushes Messages (or resource changes / events) to a message queue of yours when a resource changes.");
        doc.put("destinations", List.of("AWS SQS", "AWS SNS", "AWS EventBridge", "Azure Service Bus", "Azure Event Grid",
                "Google Cloud Pub/Sub", "Confluent Cloud"));
        doc.put("noHttpDestination", "There is no HTTP destination type — unlike an API Extension. Registering one needs a queue "
                + "AND credentials the platform can publish with (IAM / SAS / service account): a cloud account.");
        doc.put("whyNotHere", "Nobody in this room has a cloud account — so this draft is shown, never sent.");
        Map<String, Object> draft = new LinkedHashMap<>();
        draft.put("key", "lhc-order-events");
        draft.put("destination", Map.of("type", "GoogleCloudPubSub", "projectId", "<cloud-project>", "topic", "lhc-orders"));
        draft.put("messages", List.of(Map.of("resourceTypeId", "order",
                "types", List.of("OrderCreated", "OrderPaymentStateChanged", "OrderStateTransition"))));
        doc.put("draftNeverSent", draft);
        doc.put("delivery", List.of("At-least-once and unordered — dedupe by Message id, order per resource by sequenceNumber (exactly what 7.4 does).",
                "The platform sends a test notification on creation and refuses the Subscription if the queue rejects it.",
                "Oversized payloads arrive as PayloadNotIncluded — fetch the Message by id.",
                "50 per Project; changes take up to a minute; SubscriptionHealthStatus tells you when your queue stops accepting."));
        doc.put("samePayload", "The JSON GET /api/orders/{n}/timeline reads (7.3) is byte-for-byte what a Subscription would have pushed.");
        doc.put("bridge", "Connect provisions the queue for you: an Event application declares this Subscription in connect.yaml and "
                + "Connect creates the topic, the credentials and the Subscription at deploy time — and removes them at undeploy. Session 8.");
        return doc;
    }
}
