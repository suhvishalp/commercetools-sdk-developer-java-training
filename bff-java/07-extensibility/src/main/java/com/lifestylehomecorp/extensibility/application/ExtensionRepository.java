package com.lifestylehomecorp.extensibility.application;

import com.commercetools.api.models.extension.Extension;
import com.commercetools.api.models.extension.ExtensionDraft;
import com.commercetools.api.models.extension.ExtensionUpdateAction;

import java.util.List;
import java.util.Optional;

/** 7.6 — API Extensions. Participants implement {@code create}; the rest ({@code findByKey}, {@code update},
 * {@code delete}) is pre-built. */
public interface ExtensionRepository {

    /** {@code POST /extensions} with the draft the service built. Returns the raw {@link Extension}. */
    Extension create(ExtensionDraft draft);

    Optional<Extension> findByKey(String key);

    /** {@code POST /extensions/key={key}} with version + actions — used to re-point an existing Extension. */
    Extension update(String key, Long version, List<ExtensionUpdateAction> actions);

    void delete(String key, Long version);
}
