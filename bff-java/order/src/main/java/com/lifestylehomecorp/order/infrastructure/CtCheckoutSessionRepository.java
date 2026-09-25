package com.lifestylehomecorp.order.infrastructure;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lifestylehomecorp.order.application.CheckoutSessionRepository;
import com.lifestylehomecorp.order.domain.CheckoutSession;
import com.lifestylehomecorp.platform.config.CheckoutProperties;
import com.lifestylehomecorp.platform.config.CtpProperties;
import com.lifestylehomecorp.platform.ctclient.CheckoutRegion;
import com.lifestylehomecorp.platform.ctclient.CheckoutTokenProvider;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Repository;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * The Checkout Sessions API — the ONE call between this BFF and commercetools Checkout before the shopper
 * pays (task 6.1). Plain HTTPS: {@code POST https://session.{region}.commercetools.com/{projectKey}/sessions}
 * with a bearer token carrying {@code manage_sessions}, a body naming the cart, the Application and the
 * {@code futureOrderNumber}. The response's {@code id} is the {@code sessionId} the Browser SDK needs.
 *
 * <p>This is the SOLUTION (answer key); on the starter branch {@link #create} throws
 * {@code TaskNotImplementedException("6.1")}.
 */
@Repository
public class CtCheckoutSessionRepository implements CheckoutSessionRepository {

    private static final ObjectMapper JSON = new ObjectMapper();

    private final HttpClient http = HttpClient.newHttpClient();
    private final CheckoutTokenProvider tokens;
    private final String sessionsEndpoint;

    public CtCheckoutSessionRepository(CheckoutTokenProvider tokens, CtpProperties ctp, CheckoutProperties checkout) {
        this.tokens = tokens;
        String host = checkout.getSessionsUrl() == null || checkout.getSessionsUrl().isBlank()
                ? CheckoutRegion.sessionsUrl(ctp.getApiUrl()) : checkout.getSessionsUrl().replaceAll("/+$", "");
        this.sessionsEndpoint = host + "/" + ctp.getProjectKey() + "/sessions";
    }

    @Override
    public CheckoutSession create(String cartId, String applicationKey, String futureOrderNumber) {
        Map<String, Object> metadata = new LinkedHashMap<>();
        metadata.put("applicationKey", applicationKey);
        if (futureOrderNumber != null) {
            metadata.put("futureOrderNumber", futureOrderNumber);
        }
        Map<String, Object> body = Map.of(
                "cart", Map.of("cartRef", Map.of("id", cartId)),
                "metadata", metadata);
        try {
            HttpRequest request = HttpRequest.newBuilder(URI.create(sessionsEndpoint))
                    .header("Authorization", "Bearer " + tokens.bearer())
                    .header("Content-Type", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(JSON.writeValueAsString(body)))
                    .build();
            HttpResponse<String> response = http.send(request, HttpResponse.BodyHandlers.ofString());
            if (response.statusCode() == 403 || response.statusCode() == 401) {
                throw new ResponseStatusException(HttpStatus.BAD_GATEWAY,
                        "Checkout Sessions API refused the token (HTTP " + response.statusCode()
                                + ") — does the API client carry the manage_sessions scope?");
            }
            if (response.statusCode() >= 400) {
                throw new ResponseStatusException(HttpStatus.resolve(response.statusCode()) != null
                        ? HttpStatus.resolve(response.statusCode()) : HttpStatus.BAD_GATEWAY,
                        "Checkout Sessions API: HTTP " + response.statusCode() + " — " + shortBody(response.body()));
            }
            JsonNode json = JSON.readTree(response.body());
            return new CheckoutSession(json.path("id").asText(), json.path("expiryAt").asText(null), json.path("state").asText(null));
        } catch (IOException e) {
            throw new ResponseStatusException(HttpStatus.BAD_GATEWAY, "Checkout Sessions API unreachable: " + e.getMessage());
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            throw new ResponseStatusException(HttpStatus.BAD_GATEWAY, "Checkout Sessions API call interrupted");
        }
    }

    private static String shortBody(String body) {
        if (body == null) {
            return "";
        }
        try {
            JsonNode json = JSON.readTree(body);
            String message = json.path("message").asText(null);
            return message != null ? message : body.substring(0, Math.min(200, body.length()));
        } catch (IOException e) {
            return body.substring(0, Math.min(200, body.length()));
        }
    }
}
