package com.lifestylehomecorp.platform.ctclient;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lifestylehomecorp.platform.config.CtpProperties;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.util.Base64;

/**
 * A client-credentials access token for the APIs the SDK does not wrap — today the Checkout
 * <b>Sessions API</b> (Session 6, task 6.3). The SDK's own {@code ProjectApiRoot} manages its token
 * internally and never exposes it, so this provider mints (and caches) one from the same API client.
 * The client must carry {@code manage_sessions}; a 403 from the Sessions API means it does not.
 */
@Component
public class CheckoutTokenProvider {

    private static final ObjectMapper JSON = new ObjectMapper();

    private final CtpProperties props;
    private final HttpClient http = HttpClient.newHttpClient();

    private volatile String token;
    private volatile Instant expiresAt = Instant.EPOCH;

    public CheckoutTokenProvider(CtpProperties props) {
        this.props = props;
    }

    /** A valid bearer token, refreshed a minute before expiry. */
    public synchronized String bearer() {
        if (token != null && Instant.now().isBefore(expiresAt.minusSeconds(60))) {
            return token;
        }
        String basic = Base64.getEncoder().encodeToString(
                (props.getClientId() + ":" + props.getClientSecret()).getBytes(StandardCharsets.UTF_8));
        String tokenUrl = props.getAuthUrl().replaceAll("/+$", "") + "/oauth/token?grant_type=client_credentials";
        HttpRequest request = HttpRequest.newBuilder(URI.create(tokenUrl))
                .header("Authorization", "Basic " + basic)
                .POST(HttpRequest.BodyPublishers.noBody())
                .build();
        try {
            HttpResponse<String> response = http.send(request, HttpResponse.BodyHandlers.ofString());
            if (response.statusCode() >= 400) {
                throw new IllegalStateException("OAuth token request failed: HTTP " + response.statusCode());
            }
            JsonNode body = JSON.readTree(response.body());
            token = body.get("access_token").asText();
            expiresAt = Instant.now().plusSeconds(body.path("expires_in").asLong(600));
            return token;
        } catch (IOException e) {
            throw new IllegalStateException("OAuth token request failed", e);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            throw new IllegalStateException("OAuth token request interrupted", e);
        }
    }
}
