package com.lifestylehomecorp.extensibility.application;

import com.commercetools.api.models.cart.Cart;
import com.commercetools.api.models.order.Order;
import com.lifestylehomecorp.extensibility.domain.CartExtras;
import com.lifestylehomecorp.platform.identity.OwnerStamp;
import com.lifestylehomecorp.platform.session.ShopperSession;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.LinkedHashMap;
import java.util.Map;

/**
 * 7.1 — the gift message on the cart. Reads the shopper's cart (own read), <b>merges</b> the existing custom
 * fields (so a second call keeps {@code owner} and {@code requiresWhiteGlove}), always stamps {@code owner},
 * and writes them back with one {@code setCustomType}. The cart's {@code custom} snapshots onto the Order at
 * Session 6's commit — the confirmation page reads it from there.
 */
@Service
public class CartExtrasService {

    private final CustomFieldsRepository customFields;
    private final ExtReadRepository reads;
    private final ShopperSession session;
    private final OwnerStamp ownerStamp;

    public CartExtrasService(CustomFieldsRepository customFields, ExtReadRepository reads, ShopperSession session,
                             OwnerStamp ownerStamp) {
        this.customFields = customFields;
        this.reads = reads;
        this.session = session;
        this.ownerStamp = ownerStamp;
    }

    public CartExtras get() {
        return project(reads.cart(session.storeKey(), session.requireCartId()));
    }

    /**
     * The same fields on the <b>order</b> Checkout created — the cart's {@code custom} snapshotted at the commit.
     * Ownership as in Session 6: someone else's order number is a 404.
     */
    public CartExtras forOrder(String orderNumber) {
        Order order = reads.orderByNumber(session.storeKey(), orderNumber)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Order not found: " + orderNumber));
        boolean owned = session.isSignedIn()
                ? session.customerIdOrNull().equals(order.getCustomerId())
                : session.anonymousId() != null && session.anonymousId().equals(order.getAnonymousId());
        if (!owned) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Order not found: " + orderNumber);
        }
        Map<String, Object> f = order.getCustom() == null || order.getCustom().getFields() == null
                || order.getCustom().getFields().values() == null ? Map.of() : order.getCustom().getFields().values();
        return new CartExtras(order.getId(), order.getVersion(), order.getCustom() == null ? null : OwnerStamp.TYPE_KEY,
                f.get(OwnerStamp.GIFT_MESSAGE_FIELD) instanceof String s ? s : null,
                Boolean.TRUE.equals(f.get(OwnerStamp.WHITE_GLOVE_FIELD)),
                f.get(OwnerStamp.OWNER_FIELD) instanceof String o ? o : null);
    }

    public CartExtras setGiftMessage(String giftMessage) {
        Cart cart = reads.cart(session.storeKey(), session.requireCartId());
        Map<String, Object> fields = new LinkedHashMap<>(existingFields(cart));
        if (giftMessage == null || giftMessage.isBlank()) {
            fields.remove(OwnerStamp.GIFT_MESSAGE_FIELD);
        } else {
            fields.put(OwnerStamp.GIFT_MESSAGE_FIELD, giftMessage.trim());
        }
        fields.put(OwnerStamp.OWNER_FIELD, ownerStamp.owner());
        Cart updated = customFields.setCartCustomFields(session.storeKey(), cart.getId(), cart.getVersion(), ownerStamp.typeKey(), fields);
        return project(updated);
    }

    static Map<String, Object> existingFields(Cart cart) {
        if (cart.getCustom() == null || cart.getCustom().getFields() == null || cart.getCustom().getFields().values() == null) {
            return Map.of();
        }
        return cart.getCustom().getFields().values();
    }

    static CartExtras project(Cart cart) {
        Map<String, Object> f = existingFields(cart);
        String typeKey = cart.getCustom() != null && cart.getCustom().getType() != null && cart.getCustom().getType().getObj() != null
                ? cart.getCustom().getType().getObj().getKey() : (cart.getCustom() != null ? OwnerStamp.TYPE_KEY : null);
        return new CartExtras(cart.getId(), cart.getVersion(), typeKey,
                f.get(OwnerStamp.GIFT_MESSAGE_FIELD) instanceof String s ? s : null,
                Boolean.TRUE.equals(f.get(OwnerStamp.WHITE_GLOVE_FIELD)),
                f.get(OwnerStamp.OWNER_FIELD) instanceof String o ? o : null);
    }
}
