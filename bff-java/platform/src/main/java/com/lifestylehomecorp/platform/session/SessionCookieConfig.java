package com.lifestylehomecorp.platform.session;

import jakarta.servlet.SessionTrackingMode;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.ServletContextInitializer;
import org.springframework.boot.web.servlet.server.CookieSameSiteSupplier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Set;

/**
 * Trainer-provided plumbing: the ONE cookie the browser holds for {@link ShopperSession}.
 *
 * <p>{@code lhc_session} — opaque, {@code HttpOnly} (no script can read it), {@code SameSite=Lax} (not sent on
 * cross-site POSTs: the CSRF answer, together with the storefront's same-origin proxy), {@code Path=/},
 * {@code Secure} when {@code SESSION_COOKIE_SECURE=true} (production, behind HTTPS). Cookie-only tracking, so
 * a session id never appears in a URL. 3 hours idle, like the CIL track's anonymous session.
 *
 * <p>Configured here, in {@code platform}, so every module's standalone app and the aggregate BFF behave the
 * same. Compare the CIL track's {@code cil_session}: the same cookie shape, a different thing behind it.
 */
@Configuration
public class SessionCookieConfig {

    public static final String COOKIE_NAME = "lhc_session";
    private static final int IDLE_MINUTES = 180;

    @Bean
    ServletContextInitializer shopperSessionCookie(@Value("${SESSION_COOKIE_SECURE:false}") boolean secure) {
        return servletContext -> {
            jakarta.servlet.SessionCookieConfig cookie = servletContext.getSessionCookieConfig();
            cookie.setName(COOKIE_NAME);
            cookie.setHttpOnly(true);
            cookie.setSecure(secure);
            cookie.setPath("/");
            servletContext.setSessionTrackingModes(Set.of(SessionTrackingMode.COOKIE));
            servletContext.setSessionTimeout(IDLE_MINUTES);
        };
    }

    @Bean
    CookieSameSiteSupplier shopperSessionSameSite() {
        return CookieSameSiteSupplier.ofLax().whenHasName(COOKIE_NAME);
    }
}
