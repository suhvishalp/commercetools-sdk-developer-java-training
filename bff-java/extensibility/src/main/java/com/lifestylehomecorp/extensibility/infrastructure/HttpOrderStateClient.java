package com.lifestylehomecorp.extensibility.infrastructure;

import com.lifestylehomecorp.extensibility.application.OrderStateClient;
import com.lifestylehomecorp.extensibility.config.ExtensibilityProperties;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

/**
 * 7.4 — transitions an order through the BFF's own HTTP API ({@code PUT /api/orders/{n}/state}, Session 6).
 * A plain JDK HttpClient: the point is the seam, not the client. Session 8's Connect Event app calls the same
 * endpoint from outside the BFF.
 */
@Component
public class HttpOrderStateClient implements OrderStateClient {

    private final HttpClient http = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build();
    private final ExtensibilityProperties props;

    public HttpOrderStateClient(ExtensibilityProperties props) {
        this.props = props;
    }

    @Override
    public Result transition(String orderNumber, String stateKey) {
        HttpRequest request = HttpRequest.newBuilder(URI.create(props.getBffBaseUrl() + "/api/orders/" + orderNumber + "/state"))
                .timeout(Duration.ofSeconds(15))
                .header("Content-Type", "application/json")
                .PUT(HttpRequest.BodyPublishers.ofString("{\"state\":\"" + stateKey + "\"}"))
                .build();
        try {
            HttpResponse<String> response = http.send(request, HttpResponse.BodyHandlers.ofString());
            return new Result(response.statusCode(), response.body());
        } catch (IOException e) {
            return new Result(503, "BFF unreachable at " + props.getBffBaseUrl() + ": " + e.getMessage());
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return new Result(503, "interrupted");
        }
    }
}
