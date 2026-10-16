package com.lifestylehomecorp.cart.application;

import com.commercetools.api.models.common.Address;

/**
 * A read-only customer gateway owned by the cart module (implemented in infrastructure) so the cart can
 * pre-fill its shipping address from the signed-in shopper's address book WITHOUT depending on the
 * {@code customer} module — domain modules depend on {@code platform} only. Trainer-provided plumbing;
 * returns the raw SDK {@link Address}, the service maps it.
 */
public interface CustomerAddressRepository {

    /**
     * The customer's default shipping address — or, when no default is set but the book holds exactly
     * one address, that one — or null when there is nothing to pre-fill from.
     */
    Address defaultShippingAddress(String customerId);
}
