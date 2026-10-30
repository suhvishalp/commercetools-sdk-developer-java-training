package com.lifestylehomecorp.order.domain;

import java.util.List;

/**
 * Whether the cart can enter Checkout's Payment Only flow (6.1): the preconditions Checkout enforces
 * anyway (shipping + billing address, shipping method, a line, a known shopper, a supported country),
 * checked early so "Proceed to payment" is only enabled when it will work.
 */
public record Readiness(boolean ready, List<String> missing, String cartId, Money total) {
}
