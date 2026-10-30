package com.lifestylehomecorp.extensibility.api;

import com.lifestylehomecorp.extensibility.api.dto.GiftMessageRequest;
import com.lifestylehomecorp.extensibility.application.CartExtrasService;
import com.lifestylehomecorp.extensibility.domain.CartExtras;
import com.lifestylehomecorp.platform.annotations.TaskDescription;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/** 7.1 — the cart's Custom Fields (gift message · white glove · owner). */
@RestController
public class CartExtrasController {

    private final CartExtrasService extras;

    public CartExtrasController(CartExtrasService extras) {
        this.extras = extras;
    }

    @TaskDescription(
            module = "extensibility", session = "Session 7", taskNumber = 1,
            title = "Custom Fields: the gift message", tier = "T1", capability = "ext.customFields",
            description = "Implement CustomFieldsRepository.setCartCustomFields(cartId, version, typeKey, fields) in the "
                    + "extensibility module's infrastructure layer — ONE cart update: setCustomType with the seeded "
                    + "`order-extras` Type (by key) and the full fields map (FieldContainer). The service merges the "
                    + "existing fields, adds the gift message and always stamps `owner` = your participant key (the field "
                    + "your Extension's trigger condition keys on in 7.6). The Type's resourceTypeIds is `order` — it covers "
                    + "carts AND orders, so the cart's custom fields snapshot onto the Order Checkout creates, and the "
                    + "confirmation page shows the message. PUT /api/cart/extras { giftMessage }.",
            hint = "Docs: Types — Custom Fields, FieldDefinition, resourceTypeIds; Carts — Set Custom Type / Set Custom Field "
                    + "update actions (docs.commercetools.com/api/projects/types).")
    @PutMapping("/api/cart/extras")
    public CartExtras set(@RequestBody(required = false) GiftMessageRequest req) {
        return extras.setGiftMessage(req == null ? null : req.giftMessage());
    }

    /** Read side — what the storefront checkout shows; no task of its own. */
    @GetMapping("/api/cart/extras")
    public CartExtras get() {
        return extras.get();
    }

    /** The snapshot on the order (the confirmation page): the cart's custom fields, carried over at the commit. */
    @GetMapping("/api/orders/{orderNumber}/extras")
    public CartExtras forOrder(@PathVariable String orderNumber) {
        return extras.forOrder(orderNumber);
    }
}
