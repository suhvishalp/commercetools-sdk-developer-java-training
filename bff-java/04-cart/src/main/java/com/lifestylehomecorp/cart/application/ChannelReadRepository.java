package com.lifestylehomecorp.cart.application;

import com.commercetools.api.models.channel.Channel;

import java.util.List;

/**
 * A read-only channel gateway owned by the cart module (implemented in infrastructure): the supply
 * channels a shopper may collect from (4.5, BOPIS). Trainer-provided plumbing; returns raw SDK
 * {@link Channel}s, the service decides which count as pickup locations.
 */
public interface ChannelReadRepository {

    /** Every channel with the InventorySupply role — warehouses and pickup stores alike. */
    List<Channel> supplyChannels();

    /**
     * 4.5 — the supply channels configured on a Store, in the Store's order (empty for an unknown key or a
     * Store with none). The first one WITHOUT an address is the Store's delivery inventory.
     */
    List<Channel> storeSupplyChannels(String storeKey);
}
