package com.lifestylehomecorp.extensibility.application;

import com.lifestylehomecorp.extensibility.domain.DecisionRow;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * 7.9 — the extensibility decision, as data. Five LHC requirements, five mechanisms, and the order of
 * questions that gets you there: sync vs async first; "can the BFF do it before the call?" second (the
 * default — an Extension is the exception); who else writes third; cost of being wrong fourth.
 * Also 7.5 — the Subscription concept the room cannot provision, shown as data.
 */
@Service
public class ExtensibilityDecisions {

    public List<DecisionRow> table() {
        return List.of(
                new DecisionRow("A gift message travels with the order",
                        "Custom Field (Type order-extras)", "at write time, by the BFF",
                        "Typed data ON the resource: queryable, predicate-able, snapshots from cart to order for free.",
                        "7.1", "A Custom Object keyed by cart id — orphaned when the cart becomes an order; not visible in Merchant Center."),
                new DecisionRow("Ops can switch Subscribe & Save off without a deploy",
                        "Custom Object (lhc-config/feature-flags)", "read at request time",
                        "Config BESIDE the resources, versioned, API-only; the storefront and the Extension both read it.",
                        "7.2", "A properties file — needs a deploy; a database of your own — needs hosting and auth you already get here."),
                new DecisionRow("Max 10 units per line, on every channel incl. Merchant Center",
                        "API Extension (sync, before persist)", "before the write persists",
                        "Only a platform-side hook sees writes from clients you don't control. Validate → 400 with your message.",
                        "7.6 / 7.7", "The BFF alone — right if the storefront were the only writer; a call-centre agent in Merchant Center bypasses it."),
                new DecisionRow("Nightly ERP price feed for the whole catalogue",
                        "Import API (async, bulk, by key)", "asynchronous, batched",
                        "Bulk ingestion with per-row status and 48 h reference resolution; idempotent upsert by key.",
                        "7.8", "Thousands of real-time product updates — versions, 409s, rate limits, and one bad row fails your loop."),
                new DecisionRow("Order confirmation e-mail after payment success",
                        "Subscription → Connect Event app (async, after the write)", "after the write, pushed",
                        "A side-effect must never slow or fail the order. Messages tell you what happened; a queue delivers them.",
                        "7.4 (poll) → Session 8 (push)", "An API Extension — it would add e-mail latency to every order write and fail the order when the mail server is down."));
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
