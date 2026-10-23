package com.lifestylehomecorp.customer.api.dto;

/** Body for POST /api/account/password. */
public record ChangePasswordRequest(String currentPassword, String newPassword) {
}
