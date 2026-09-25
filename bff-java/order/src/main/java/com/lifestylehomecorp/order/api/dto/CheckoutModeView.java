package com.lifestylehomecorp.order.api.dto;

import com.lifestylehomecorp.order.domain.CheckoutMode;

import java.util.List;

public record CheckoutModeView(String mode, String applicationKey, List<String> bffOwns, List<String> checkoutOwns, String note) {
    public static CheckoutModeView from(CheckoutMode m) {
        return new CheckoutModeView(m.mode(), m.applicationKey(), m.bffOwns(), m.checkoutOwns(), m.note());
    }
}
