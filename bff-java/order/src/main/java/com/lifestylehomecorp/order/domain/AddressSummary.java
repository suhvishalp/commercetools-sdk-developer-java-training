package com.lifestylehomecorp.order.domain;

/** A PII-minimal address for the order pages (no phone / email). */
public record AddressSummary(String firstName, String lastName, String streetName, String streetNumber,
                             String postalCode, String city, String country) {
}
