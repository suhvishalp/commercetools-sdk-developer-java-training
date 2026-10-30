/** Wire types of the extensibility module (Session 7) — mirrors bff-java/07-extensibility/domain. */

/** 7.1 — the `order-extras` Custom Fields on the cart (and, after the commit, on the order). */
export interface CartExtrasView {
  cartId: string;
  cartVersion: number;
  typeKey: string | null;
  giftMessage: string | null;
  requiresWhiteGlove: boolean;
  owner: string | null;
}

/** 7.2 — the feature-flag Custom Object; `value` is arbitrary JSON, these are the keys the course uses. */
export interface FeatureFlagsView {
  container: string;
  key: string;
  version: number | null;
  persisted: boolean;
  value: {
    subscriptionsEnabled?: boolean;
    maxQuantityPerLine?: number;
    whiteGloveThresholdCents?: number;
    whiteGloveFeeCents?: number;
    [flag: string]: unknown;
  };
}

/** 7.3 — one step of the order timeline, projected from a platform Message. */
export interface TimelineEntryView {
  messageId: string;
  type: string;
  at: string | null;
  summary: string;
  sequenceNumber: number | null;
  resourceVersion: number | null;
}
