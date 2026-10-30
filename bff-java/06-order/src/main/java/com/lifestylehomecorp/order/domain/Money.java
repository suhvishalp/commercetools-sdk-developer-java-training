package com.lifestylehomecorp.order.domain;

/** SDK-free money value — minor units + currency (commercetools money is centAmount + currencyCode). */
public record Money(long centAmount, String currencyCode, int fractionDigits) {
}
