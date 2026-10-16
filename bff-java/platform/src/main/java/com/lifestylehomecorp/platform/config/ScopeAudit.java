package com.lifestylehomecorp.platform.config;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.time.Duration;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Base64;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeSet;
import java.util.stream.Collectors;

/**
 * Trainer-provided plumbing: <b>what can this BFF's secret do?</b> At startup the BFF asks the auth server which
 * scopes its API client actually holds and logs one line — plus a warning when the client is over-privileged
 * ({@code manage_project}, {@code manage_api_clients}) and a list of the sessions whose features will fail for
 * lack of a scope. Warn-only: it never blocks startup.
 *
 * <p>The runtime client should hold only what shopper traffic needs, growing session by session (the table in
 * {@link #RUNTIME_SCOPES}). Seeders and setup scripts use a separate tooling client that the BFF never loads.
 * See planning/SESSIONS_SECRETS_AND_CIL_EXTENSIONS.md §3.
 */
@Component
@ConditionalOnProperty(name = "lhc.scope-audit.enabled", havingValue = "true", matchIfMissing = true)
public class ScopeAudit {

    private static final Logger log = LoggerFactory.getLogger(ScopeAudit.class);

    /** The scopes each session's features add to the runtime client (cumulative by session). */
    static final Map<String, List<String>> RUNTIME_SCOPES = runtimeScopes();

    /** Scopes a runtime BFF client should never hold: each one widens what a leaked secret can do. */
    static final Set<String> OVER_PRIVILEGED = Set.of("manage_project", "manage_api_clients");

    private final CtpProperties props;
    private final HttpClient http = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build();

    public ScopeAudit(CtpProperties props) {
        this.props = props;
    }

    @EventListener(ApplicationReadyEvent.class)
    public void auditOnStartup() {
        try {
            Report r = analyse(grantedScopes());
            log.info("API client scopes: {}", r.granted().isEmpty() ? "(none reported)" : String.join(" ", r.granted()));
            if (!r.overPrivileged().isEmpty()) {
                log.warn("API client is over-privileged for a BFF: {} — a leaked secret could do far more than shop. "
                        + "Use a runtime client with only the scopes .env.example lists per session; keep manage_project for a tooling client.",
                        String.join(", ", r.overPrivileged()));
            }
            r.missingBySession().forEach((session, missing) ->
                    log.warn("{} features need scopes this client lacks: {}", session, String.join(", ", missing)));
        } catch (Exception e) {
            log.info("Scope audit skipped: {}", e.getMessage());
        }
    }

    /** The audit result. {@code missingBySession} lists only sessions with a gap. */
    public record Report(List<String> granted, List<String> overPrivileged, Map<String, List<String>> missingBySession) {
    }

    /**
     * Pure analysis, independent of the network. {@code manage_project} implies every scope, so nothing is
     * reported missing when it is present (it is reported as over-privileged instead).
     */
    static Report analyse(Set<String> granted) {
        List<String> sorted = new ArrayList<>(new TreeSet<>(granted));
        List<String> over = sorted.stream().filter(OVER_PRIVILEGED::contains).toList();
        Map<String, List<String>> missing = new LinkedHashMap<>();
        if (!granted.contains("manage_project")) {
            RUNTIME_SCOPES.forEach((session, needed) -> {
                List<String> gap = needed.stream().filter(s -> !implied(s, granted)).toList();
                if (!gap.isEmpty()) {
                    missing.put(session, gap);
                }
            });
        }
        return new Report(sorted, over, missing);
    }

    /** {@code manage_x} implies {@code view_x}. */
    static boolean implied(String scope, Set<String> granted) {
        if (granted.contains(scope)) {
            return true;
        }
        return scope.startsWith("view_") && granted.contains("manage_" + scope.substring("view_".length()));
    }

    private Set<String> grantedScopes() throws Exception {
        String base = props.getAuthUrl().replaceAll("/+$", "");
        String tokenUrl = base.endsWith("/oauth/token") ? base : base + "/oauth/token";
        String basic = Base64.getEncoder().encodeToString(
                (props.getClientId() + ":" + props.getClientSecret()).getBytes(StandardCharsets.UTF_8));
        HttpRequest req = HttpRequest.newBuilder(URI.create(tokenUrl))
                .timeout(Duration.ofSeconds(5))
                .header("Authorization", "Basic " + basic)
                .header("Content-Type", "application/x-www-form-urlencoded")
                .POST(HttpRequest.BodyPublishers.ofString("grant_type="
                        + URLEncoder.encode("client_credentials", StandardCharsets.UTF_8)))
                .build();
        HttpResponse<String> res = http.send(req, HttpResponse.BodyHandlers.ofString());
        if (res.statusCode() != 200) {
            throw new IllegalStateException("auth server answered " + res.statusCode());
        }
        // Only the scope string is read; the token itself is discarded and never logged.
        JsonNode body = new ObjectMapper().readTree(res.body());
        String scope = body.path("scope").asText("");
        return Arrays.stream(scope.split("\\s+"))
                .filter(s -> !s.isBlank())
                .map(s -> s.contains(":") ? s.substring(0, s.indexOf(':')) : s)
                .collect(Collectors.toCollection(TreeSet::new));
    }

    private static Map<String, List<String>> runtimeScopes() {
        Map<String, List<String>> m = new LinkedHashMap<>();
        m.put("Sessions 1-3", List.of("view_products", "view_categories", "view_stores", "view_project_settings",
                "view_published_products"));
        m.put("Session 4", List.of("manage_orders", "view_shipping_methods", "view_discount_codes",
                "view_cart_discounts", "manage_shopping_lists"));
        m.put("Session 5", List.of("manage_customers", "view_customer_groups"));
        m.put("Session 6", List.of("manage_payments", "manage_sessions", "manage_checkout_payment_intents",
                "view_states"));
        m.put("Session 7", List.of("manage_types", "manage_key_value_documents", "view_messages",
                "manage_extensions", "manage_subscriptions", "manage_import_containers", "manage_products"));
        return Collections.unmodifiableMap(m);
    }
}
