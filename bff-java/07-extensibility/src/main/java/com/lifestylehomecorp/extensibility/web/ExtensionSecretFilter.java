package com.lifestylehomecorp.extensibility.web;

import com.lifestylehomecorp.extensibility.config.ExtensibilityProperties;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.annotation.Order;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.security.MessageDigest;
import java.nio.charset.StandardCharsets;

/**
 * Trainer-provided intake plumbing (Session 7, pre-built): <b>authenticate the caller</b>. The platform calls
 * {@code /api/extensions/**} over the public internet; the Extension was registered (7.6) with an
 * {@code AuthorizationHeader} authentication, so every call carries our shared secret verbatim in the
 * {@code Authorization} header. A wrong or missing secret is a 401 — and because 401 is "any other status"
 * to the platform, the client's write fails loudly instead of silently skipping our rules.
 *
 * <p>When no secret is configured the filter lets calls through and warns once — so the module runs on a
 * laptop before the tunnel is set up. Never run that way behind a real URL.
 */
@Component
@Order(10)
public class ExtensionSecretFilter extends OncePerRequestFilter {

    private static final Logger log = LoggerFactory.getLogger(ExtensionSecretFilter.class);
    public static final String PATH_PREFIX = "/api/extensions/";

    private final ExtensibilityProperties props;
    private volatile boolean warnedOpen;

    public ExtensionSecretFilter(ExtensibilityProperties props) {
        this.props = props;
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) {
        return !request.getRequestURI().startsWith(PATH_PREFIX);
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {
        if (!props.hasSecret()) {
            if (!warnedOpen) {
                log.warn("EXTENSION_SECRET is not set — /api/extensions/** accepts unauthenticated calls (dev only).");
                warnedOpen = true;
            }
            chain.doFilter(request, response);
            return;
        }
        String presented = request.getHeader("Authorization");
        if (presented == null || !constantTimeEquals(presented.trim(), props.getSecret())) {
            log.warn("Extension call refused — missing or wrong shared secret (correlation {}).",
                    request.getHeader(CorrelationIdFilter.HEADER));
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.setContentType(MediaType.APPLICATION_JSON_VALUE);
            response.getWriter().write("{\"status\":401,\"message\":\"Extension call refused: shared secret missing or wrong.\"}");
            return;
        }
        chain.doFilter(request, response);
    }

    private static boolean constantTimeEquals(String a, String b) {
        return MessageDigest.isEqual(a.getBytes(StandardCharsets.UTF_8), b.getBytes(StandardCharsets.UTF_8));
    }
}
