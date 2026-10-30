package com.lifestylehomecorp.cart.application;

import com.commercetools.api.models.cart.Cart;
import com.commercetools.api.models.cart.CartBuilder;
import com.commercetools.api.models.cart.CartState;
import com.commercetools.api.models.cart.LineItem;
import com.commercetools.api.models.cart.LineItemBuilder;
import com.commercetools.api.models.channel.ChannelBuilder;
import com.commercetools.api.models.channel.ChannelReferenceBuilder;
import com.commercetools.api.models.common.CentPrecisionMoneyBuilder;
import com.commercetools.api.models.common.PriceBuilder;
import com.commercetools.api.models.product.ProductVariantBuilder;
import com.commercetools.api.models.store.StoreKeyReferenceBuilder;
import com.lifestylehomecorp.cart.domain.CartSummary;
import com.lifestylehomecorp.platform.session.ShopperSession;
import io.vrap.rmf.base.client.ApiHttpException;
import io.vrap.rmf.base.client.ApiHttpHeaders;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

/**
 * 4.1 — the store is part of the cart's context: same store → the same cart; a different store → a new
 * cart, unless the basket has items and the shopper did not say so (409 store-mismatch). Pure
 * orchestration: the repository and the session are mocked, no platform, no network.
 */
class CartServiceTest {

    private final CartRepository repo = mock(CartRepository.class);
    private final ShopperSession session = mock(ShopperSession.class);
    private final ChannelReadRepository channels = mock(ChannelReadRepository.class);
    private CartService service;

    @BeforeEach
    void setUp() {
        service = new CartService(repo, mock(ShippingRepository.class), mock(BundleRepository.class),
                mock(CustomerAddressRepository.class), channels, session);
        when(session.anonymousId()).thenReturn("anon-1");
        when(session.storeKey()).thenReturn("b2c-retail-store");
        when(session.defaultStoreKey()).thenReturn("b2c-retail-store");
        when(repo.create(any())).thenAnswer(inv -> emptyCart("cart-new", ((CartContext) inv.getArgument(0)).storeKey()));
    }

    @Test
    void deliveryIsSourcedFromTheStoresFirstInventoryChannelWithoutAnAddress() {
        when(session.cartIdOrNull()).thenReturn("cart-1");
        when(repo.get(any(), eq("cart-1"))).thenReturn(cart("cart-1", "vishal-store", List.of()));
        when(channels.storeSupplyChannels("vishal-store")).thenReturn(List.of(
                ChannelBuilder.of().id("p").key("pickup-store").roles(List.of())
                        .address(a -> a.country("DE")).buildUnchecked(),
                ChannelBuilder.of().id("w").key("vishal-store-inventory-channel").roles(List.of()).buildUnchecked()));

        assertThat(service.deliverySupplyKey()).isEqualTo("vishal-store-inventory-channel");
    }

    @Test
    void noDeliveryChannelWhenTheStoreConfiguresNone() {
        when(session.cartIdOrNull()).thenReturn("cart-1");
        when(repo.get(any(), eq("cart-1"))).thenReturn(cart("cart-1", "b2c-retail-store", List.of()));
        when(channels.storeSupplyChannels("b2c-retail-store")).thenReturn(List.of());

        assertThat(service.deliverySupplyKey()).isNull();
    }

    @Test
    void noCartOnTheSessionCreatesOneInTheRequestedStore() {
        when(session.cartIdOrNull()).thenReturn(null);

        CartSummary cart = service.createGuestCart(guest("b2c-retail-store"));

        ArgumentCaptor<CartContext> ctx = ArgumentCaptor.forClass(CartContext.class);
        verify(repo).create(ctx.capture());
        assertThat(ctx.getValue().storeKey()).isEqualTo("b2c-retail-store");
        assertThat(ctx.getValue().anonymousId()).isEqualTo("anon-1");
        verify(session).setActiveCart(eq("cart-new"), eq("anon-1"), any());
        assertThat(cart.id()).isEqualTo("cart-new");
        assertThat(cart.storeKey()).isEqualTo("b2c-retail-store");
    }

    @Test
    void sameStoreReturnsTheExistingCartUnchanged() {
        when(session.cartIdOrNull()).thenReturn("cart-1");
        when(repo.get(any(), eq("cart-1"))).thenReturn(cart("cart-1", "b2c-retail-store", List.of(line("CARM-023"))));

        CartSummary cart = service.createGuestCart(guest("b2c-retail-store"));

        assertThat(cart.id()).isEqualTo("cart-1");
        assertThat(cart.storeKey()).isEqualTo("b2c-retail-store");
        assertThat(cart.lines()).hasSize(1);
        verify(repo, never()).create(any());
        verify(session, never()).setActiveCart(any(), any(), any());
    }

    @Test
    void noRequestedStoreMeansTheDefaultStore() {
        when(session.cartIdOrNull()).thenReturn("cart-1");
        when(repo.get(any(), eq("cart-1"))).thenReturn(cart("cart-1", "b2c-retail-store", List.of(line("CARM-023"))));

        CartSummary cart = service.createGuestCart(guest(null));

        assertThat(cart.id()).isEqualTo("cart-1");
        assertThat(cart.storeKey()).isEqualTo("b2c-retail-store");
        verify(repo, never()).create(any());
    }

    @Test
    void differentStoreWithAnEmptyBasketReCreatesAndRepoints() {
        when(session.cartIdOrNull()).thenReturn("cart-1");
        when(repo.get(any(), eq("cart-1"))).thenReturn(emptyCart("cart-1", "b2c-retail-store"));

        CartSummary cart = service.createGuestCart(guest("outlet-store"));

        ArgumentCaptor<CartContext> ctx = ArgumentCaptor.forClass(CartContext.class);
        verify(repo).create(ctx.capture());
        assertThat(ctx.getValue().storeKey()).isEqualTo("outlet-store");
        verify(session).setActiveCart(eq("cart-new"), eq("anon-1"), any());
        assertThat(cart.id()).isEqualTo("cart-new");
        assertThat(cart.storeKey()).isEqualTo("outlet-store");
    }

    @Test
    void differentStoreWithItemsIsAStoreMismatchConflict() {
        when(session.cartIdOrNull()).thenReturn("cart-1");
        when(repo.get(any(), eq("cart-1"))).thenReturn(cart("cart-1", "b2c-retail-store", List.of(line("CARM-023"))));

        assertThatThrownBy(() -> service.createGuestCart(guest("outlet-store")))
                .isInstanceOfSatisfying(ResponseStatusException.class, ex -> {
                    assertThat(ex.getStatusCode()).isEqualTo(HttpStatus.CONFLICT);
                    assertThat(ex.getReason())
                            .startsWith("store-mismatch:")
                            .contains("b2c-retail-store")
                            .contains("outlet-store");
                });
        verify(repo, never()).create(any());
        verify(session, never()).setActiveCart(any(), any(), any());
    }

    @Test
    void differentStoreWithItemsAndForceStartsANewBasketThere() {
        when(session.cartIdOrNull()).thenReturn("cart-1");
        when(repo.get(any(), eq("cart-1"))).thenReturn(cart("cart-1", "b2c-retail-store", List.of(line("CARM-023"))));

        CartSummary cart = service.createGuestCart(guest("outlet-store"), true);

        ArgumentCaptor<CartContext> ctx = ArgumentCaptor.forClass(CartContext.class);
        verify(repo).create(ctx.capture());
        assertThat(ctx.getValue().storeKey()).isEqualTo("outlet-store");
        verify(session).setActiveCart(eq("cart-new"), eq("anon-1"), any());
        assertThat(cart.id()).isEqualTo("cart-new");
    }

    @Test
    void aCartThePlatformNoLongerHasCountsAsNoCart() {
        when(session.cartIdOrNull()).thenReturn("cart-gone");
        when(repo.get(any(), eq("cart-gone"))).thenThrow(new ApiHttpException(404, "", new ApiHttpHeaders()));

        CartSummary cart = service.createGuestCart(guest("b2c-retail-store"));

        verify(repo).create(any());
        assertThat(cart.id()).isEqualTo("cart-new");
    }

    @Test
    void anOrderedCartCountsAsNoCart() {
        when(session.cartIdOrNull()).thenReturn("cart-1");
        when(repo.get(any(), eq("cart-1"))).thenReturn(CartBuilder.of(cart("cart-1", "b2c-retail-store", List.of(line("CARM-023"))))
                .cartState(CartState.ORDERED).buildUnchecked());

        CartSummary cart = service.createGuestCart(guest("outlet-store"));

        verify(repo).create(any());
        assertThat(cart.id()).isEqualTo("cart-new");
    }

    @Test
    void signedInShopperGetsTheCartAsTheCustomers() {
        when(session.cartIdOrNull()).thenReturn(null);
        when(session.isSignedIn()).thenReturn(true);
        when(session.customerIdOrNull()).thenReturn("cust-1");

        service.createGuestCart(guest("b2c-retail-store"));

        ArgumentCaptor<CartContext> ctx = ArgumentCaptor.forClass(CartContext.class);
        verify(repo).create(ctx.capture());
        assertThat(ctx.getValue().customerId()).isEqualTo("cust-1");
        assertThat(ctx.getValue().anonymousId()).isNull();
        verify(session).setActiveCart("cart-new", null, "b2c-retail-store");
    }

    @Test
    void summaryExposesTheExpandedChannelKeysPerLine() {
        when(session.cartIdOrNull()).thenReturn("cart-1");
        when(repo.get(any(), eq("cart-1"))).thenReturn(cart("cart-1", "b2c-retail-store", List.of(line("CARM-023"))));

        CartSummary cart = service.summary();

        assertThat(cart.storeKey()).isEqualTo("b2c-retail-store");
        assertThat(cart.lines()).singleElement().satisfies(l -> {
            assertThat(l.distributionChannelId()).isEqualTo("ch-dist");
            assertThat(l.distributionChannelKey()).isEqualTo("distribution-channel");
            assertThat(l.supplyChannelId()).isNull();
            assertThat(l.supplyChannelKey()).isNull();
        });
    }

    @Test
    void summaryWithoutACartIsEmptyNotAnError() {
        when(session.cartIdOrNull()).thenReturn(null);
        assertThat(service.summary().lines()).isEmpty();
        assertThat(service.summary().storeKey()).isNull();
    }

    // ---- fixtures -------------------------------------------------------------------------------

    private static CartContext guest(String storeKey) {
        return CartContext.guest("EUR", "DE", storeKey, null);
    }

    /** A line priced from the EXPANDED distribution channel (what the repository's read returns). */
    private static LineItem line(String sku) {
        return LineItemBuilder.of()
                .id("li-" + sku).productId("p")
                .variant(ProductVariantBuilder.of().id(1L).sku(sku).buildUnchecked())
                .price(PriceBuilder.of().id("pr").value(CentPrecisionMoneyBuilder.of()
                        .currencyCode("EUR").centAmount(44900L).fractionDigits(2).build()).buildUnchecked())
                .totalPrice(CentPrecisionMoneyBuilder.of().currencyCode("EUR").centAmount(44900L).fractionDigits(2).build())
                .quantity(1L)
                .distributionChannel(ChannelReferenceBuilder.of().id("ch-dist")
                        .obj(ChannelBuilder.of().id("ch-dist").key("distribution-channel").buildUnchecked())
                        .build())
                .buildUnchecked();
    }

    private static Cart emptyCart(String id, String storeKey) {
        return cart(id, storeKey, List.of());
    }

    private static Cart cart(String id, String storeKey, List<LineItem> lines) {
        CartBuilder b = CartBuilder.of().id(id).version(1L).cartState(CartState.ACTIVE).lineItems(lines)
                .totalPrice(CentPrecisionMoneyBuilder.of().currencyCode("EUR").centAmount(0L).fractionDigits(2).build());
        if (storeKey != null) {
            b.store(StoreKeyReferenceBuilder.of().key(storeKey).build());
        }
        return b.buildUnchecked();
    }
}
