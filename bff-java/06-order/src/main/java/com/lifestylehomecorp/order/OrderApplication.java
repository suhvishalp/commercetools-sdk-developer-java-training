package com.lifestylehomecorp.order;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Standalone entry point for the {@code order} module. Runs this domain module alone:
 *
 * <pre>mvn spring-boot:run -pl 06-order -Dspring-boot.run.arguments="--server.port=8087"</pre>
 *
 * Scans its own package plus {@code platform} for the shared beans (both API roots, the shopper
 * session, the Checkout token provider) and error advice.
 */
@SpringBootApplication(scanBasePackages = {
        "com.lifestylehomecorp.order",
        "com.lifestylehomecorp.platform"
})
public class OrderApplication {

    public static void main(String[] args) {
        SpringApplication.run(OrderApplication.class, args);
    }
}
