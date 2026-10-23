package com.lifestylehomecorp.customer.api.dto;

/** Body for PUT /api/account/group — the customer group KEY (e.g. "vip"). */
public record SetGroupRequest(String customerGroupKey) {
}
