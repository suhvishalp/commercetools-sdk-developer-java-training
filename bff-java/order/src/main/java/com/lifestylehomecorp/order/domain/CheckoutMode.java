package com.lifestylehomecorp.order.domain;

import java.util.List;

/** The 6.10 decision, made explicit: which checkout mode this BFF is built for, and who owns which step. */
public record CheckoutMode(String mode, String applicationKey, List<String> bffOwns, List<String> checkoutOwns, String note) {
}
