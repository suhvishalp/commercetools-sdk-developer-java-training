package com.lifestylehomecorp.extensibility.domain;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * 7.4 — the consumer's memory, stored as the Custom Object {@code lhc-processed / order-consumer}.
 * {@code since} is the global cursor (Message {@code createdAt}); {@code seenIds} dedupes by Message id (bounded);
 * {@code lastSequenceByResource} orders per resource — {@code sequenceNumber} is only meaningful within one.
 */
public record Checkpoint(String since, List<String> seenIds, Map<String, Long> lastSequenceByResource, Long version) {

    public static final int MAX_SEEN = 500;

    public static Checkpoint fresh(String since) {
        return new Checkpoint(since, new ArrayList<>(), new HashMap<>(), null);
    }

    public boolean seen(String messageId) {
        return seenIds != null && seenIds.contains(messageId);
    }

    public boolean behind(String resourceId, Long sequenceNumber) {
        Long last = lastSequenceByResource == null ? null : lastSequenceByResource.get(resourceId);
        return last != null && sequenceNumber != null && sequenceNumber <= last;
    }

    /** A new checkpoint with this Message recorded. Immutable-style: returns a copy. */
    public Checkpoint record(String messageId, String resourceId, Long sequenceNumber, String createdAt) {
        List<String> ids = new ArrayList<>(seenIds == null ? List.of() : seenIds);
        ids.add(messageId);
        while (ids.size() > MAX_SEEN) {
            ids.remove(0);
        }
        Map<String, Long> seq = new HashMap<>(lastSequenceByResource == null ? Map.of() : lastSequenceByResource);
        if (resourceId != null && sequenceNumber != null) {
            seq.merge(resourceId, sequenceNumber, Math::max);
        }
        String newSince = createdAt != null && (since == null || createdAt.compareTo(since) > 0) ? createdAt : since;
        return new Checkpoint(newSince, ids, seq, version);
    }

    public Map<String, Object> toValue() {
        Map<String, Object> m = new LinkedHashMap<>();
        m.put("since", since);
        m.put("seenIds", seenIds == null ? List.of() : seenIds);
        m.put("lastSequenceByResource", lastSequenceByResource == null ? Map.of() : lastSequenceByResource);
        return m;
    }

    @SuppressWarnings("unchecked")
    public static Checkpoint fromValue(Map<String, Object> value, Long version) {
        String since = value.get("since") instanceof String s ? s : null;
        List<String> ids = new ArrayList<>();
        if (value.get("seenIds") instanceof List<?> l) {
            l.forEach(o -> ids.add(String.valueOf(o)));
        }
        Map<String, Long> seq = new HashMap<>();
        if (value.get("lastSequenceByResource") instanceof Map<?, ?> m) {
            ((Map<String, Object>) m).forEach((k, v) -> {
                if (v instanceof Number n) {
                    seq.put(k, n.longValue());
                }
            });
        }
        return new Checkpoint(since, ids, seq, version);
    }
}
