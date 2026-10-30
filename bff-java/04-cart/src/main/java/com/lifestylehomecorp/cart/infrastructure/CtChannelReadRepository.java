package com.lifestylehomecorp.cart.infrastructure;

import com.commercetools.api.client.ProjectApiRoot;
import com.commercetools.api.models.channel.Channel;
import com.commercetools.api.models.channel.ChannelReference;
import io.vrap.rmf.base.client.error.NotFoundException;
import com.lifestylehomecorp.cart.application.ChannelReadRepository;
import org.springframework.stereotype.Repository;

import java.time.Duration;
import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.ConcurrentHashMap;

/** Trainer-provided plumbing: the supply channels (query predicate on `roles`), for the pickup-location list. */
@Repository
public class CtChannelReadRepository implements ChannelReadRepository {

    /** Store channel configuration changes rarely; every add-to-cart must not pay a Store read. */
    private static final Duration TTL = Duration.ofMinutes(1);

    private final ProjectApiRoot apiRoot;
    private final Map<String, Cached> byStore = new ConcurrentHashMap<>();

    private record Cached(List<Channel> channels, Instant at) {
    }

    public CtChannelReadRepository(ProjectApiRoot apiRoot) {
        this.apiRoot = apiRoot;
    }

    @Override
    public List<Channel> supplyChannels() {
        return apiRoot.channels().get()
                .withWhere("roles contains any (\"InventorySupply\")")
                .withLimit(50)
                .executeBlocking().getBody().getResults();
    }

    @Override
    public List<Channel> storeSupplyChannels(String storeKey) {
        if (storeKey == null || storeKey.isBlank()) {
            return List.of();
        }
        Cached hit = byStore.get(storeKey);
        if (hit != null && Instant.now().isBefore(hit.at().plus(TTL))) {
            return hit.channels();
        }
        List<Channel> channels;
        try {
            var store = apiRoot.stores().withKey(storeKey).get()
                    .withExpand("supplyChannels[*]")
                    .executeBlocking().getBody();
            channels = store.getSupplyChannels() == null ? List.of() : store.getSupplyChannels().stream()
                    .map(ChannelReference::getObj).filter(Objects::nonNull).toList();
        } catch (NotFoundException e) {
            channels = List.of();
        }
        byStore.put(storeKey, new Cached(channels, Instant.now()));
        return channels;
    }
}
