package com.lifestylehomecorp.extensibility.domain;

import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;

/** 7.4 — the consumer's memory: dedupe by id, order per resource, cursor moves forward only, bounded. */
class CheckpointTest {

    @Test
    void recordsIdSequenceAndAdvancesCursor() {
        Checkpoint cp = Checkpoint.fresh("2026-09-18T00:00:00Z")
                .record("m1", "order-A", 3L, "2026-09-18T10:00:00Z");
        assertThat(cp.seen("m1")).isTrue();
        assertThat(cp.behind("order-A", 3L)).isTrue();
        assertThat(cp.behind("order-A", 4L)).isFalse();
        assertThat(cp.behind("order-B", 1L)).isFalse();
        assertThat(cp.since()).isEqualTo("2026-09-18T10:00:00Z");
    }

    @Test
    void cursorNeverMovesBackwards() {
        Checkpoint cp = Checkpoint.fresh("2026-09-18T10:00:00Z")
                .record("m-old", "order-A", 1L, "2026-09-17T09:00:00Z");
        assertThat(cp.since()).isEqualTo("2026-09-18T10:00:00Z");
    }

    @Test
    void seenIdsAreBounded() {
        Checkpoint cp = Checkpoint.fresh(null);
        for (int i = 0; i < Checkpoint.MAX_SEEN + 50; i++) {
            cp = cp.record("m" + i, "order-A", (long) i, null);
        }
        assertThat(cp.seenIds()).hasSize(Checkpoint.MAX_SEEN);
        assertThat(cp.seen("m0")).isFalse();
        assertThat(cp.seen("m" + (Checkpoint.MAX_SEEN + 49))).isTrue();
        assertThat(cp.lastSequenceByResource()).containsEntry("order-A", (long) (Checkpoint.MAX_SEEN + 49));
    }

    @Test
    void roundTripsThroughTheCustomObjectValue() {
        Checkpoint cp = Checkpoint.fresh("2026-09-18T00:00:00Z").record("m1", "order-A", 2L, "2026-09-18T10:00:00Z");
        Map<String, Object> value = cp.toValue();
        Checkpoint back = Checkpoint.fromValue(value, 7L);
        assertThat(back.since()).isEqualTo(cp.since());
        assertThat(back.seenIds()).isEqualTo(List.of("m1"));
        assertThat(back.lastSequenceByResource()).containsEntry("order-A", 2L);
        assertThat(back.version()).isEqualTo(7L);
    }
}
