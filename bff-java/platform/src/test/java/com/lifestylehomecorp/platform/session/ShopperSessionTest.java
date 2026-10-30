package com.lifestylehomecorp.platform.session;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import static org.assertj.core.api.Assertions.assertThat;

/** One shopper session per browser: lazy, rotated at sign-in, invalidated at sign-out, never shared. */
class ShopperSessionTest {

    private final ShopperSession shopper = new ShopperSession();

    @AfterEach
    void clear() {
        RequestContextHolder.resetRequestAttributes();
    }

    private MockHttpServletRequest browser(MockHttpSession session) {
        MockHttpServletRequest req = new MockHttpServletRequest();
        if (session != null) {
            req.setSession(session);
        }
        RequestContextHolder.setRequestAttributes(new ServletRequestAttributes(req));
        return req;
    }

    @Test
    void browsingCreatesNoSession() {
        MockHttpServletRequest req = browser(null);
        assertThat(shopper.cartIdOrNull()).isNull();
        assertThat(shopper.customerGroupIdOrNull()).isNull();
        assertThat(shopper.isSignedIn()).isFalse();
        assertThat(req.getSession(false)).isNull();
    }

    @Test
    void theFirstBasketActionCreatesTheSession() {
        MockHttpServletRequest req = browser(null);
        shopper.setActiveCart("cart-1", "anon-1", null);
        assertThat(req.getSession(false)).isNotNull();
        assertThat(shopper.cartIdOrNull()).isEqualTo("cart-1");
        assertThat(shopper.anonymousId()).isEqualTo("anon-1");
    }

    @Test
    void twoBrowsersNeverShareAShopper() {
        MockHttpSession a = new MockHttpSession();
        MockHttpSession b = new MockHttpSession();
        browser(a);
        shopper.setActiveCart("cart-a", "anon-a", null);
        browser(b);
        assertThat(shopper.cartIdOrNull()).isNull();
        shopper.setActiveCart("cart-b", "anon-b", null);
        browser(a);
        assertThat(shopper.cartIdOrNull()).isEqualTo("cart-a");
    }

    @Test
    void signInRotatesTheSessionIdAndKeepsTheState() {
        MockHttpSession session = new MockHttpSession();
        MockHttpServletRequest req = browser(session);
        shopper.setActiveCart("cart-1", "anon-1", null);
        String before = req.getSession(false).getId();
        shopper.signedIn("customer-1", null);
        assertThat(req.getSession(false).getId()).isNotEqualTo(before);
        assertThat(shopper.customerIdOrNull()).isEqualTo("customer-1");
        assertThat(shopper.cartIdOrNull()).isEqualTo("cart-1");
    }

    @Test
    void signOutEndsTheSession() {
        MockHttpSession session = new MockHttpSession();
        browser(session);
        shopper.setActiveCart("cart-1", "anon-1", null);
        shopper.signedIn("customer-1", "vip");
        shopper.signOut();
        assertThat(session.isInvalid()).isTrue();
        browser(null);
        assertThat(shopper.isSignedIn()).isFalse();
        assertThat(shopper.cartIdOrNull()).isNull();
        assertThat(shopper.anonymousIdOrCreate()).isNotEqualTo("anon-1");
    }

    @Test
    void outsideARequestItFallsBackToOneLocalState() {
        shopper.setActiveCart("cart-1", "anon-1", null);
        assertThat(shopper.cartIdOrNull()).isEqualTo("cart-1");
        shopper.signOut();
        assertThat(shopper.cartIdOrNull()).isNull();
        assertThat(shopper.anonymousId()).isNotNull().isNotEqualTo("anon-1");
    }
}
