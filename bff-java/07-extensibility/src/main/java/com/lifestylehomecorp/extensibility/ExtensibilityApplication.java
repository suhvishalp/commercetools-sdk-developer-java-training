package com.lifestylehomecorp.extensibility;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Standalone entry point for the {@code extensibility} module. Runs this domain module alone:
 *
 * <pre>mvn spring-boot:run -pl 07-extensibility -Dspring-boot.run.arguments="--server.port=8088"</pre>
 *
 * Scans its own package plus {@code platform} for the shared beans (all three API roots, the shopper
 * session, the participant identity + owner stamp) and error advice.
 */
@SpringBootApplication(scanBasePackages = {
        "com.lifestylehomecorp.extensibility",
        "com.lifestylehomecorp.platform"
})
public class ExtensibilityApplication {

    public static void main(String[] args) {
        SpringApplication.run(ExtensibilityApplication.class, args);
    }
}
