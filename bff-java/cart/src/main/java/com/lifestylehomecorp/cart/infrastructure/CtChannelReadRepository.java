package com.lifestylehomecorp.cart.infrastructure;

import com.commercetools.api.client.ProjectApiRoot;
import com.commercetools.api.models.channel.Channel;
import com.lifestylehomecorp.cart.application.ChannelReadRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/** Trainer-provided plumbing: the supply channels (query predicate on `roles`), for the pickup-location list. */
@Repository
public class CtChannelReadRepository implements ChannelReadRepository {

    private final ProjectApiRoot apiRoot;

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
}
