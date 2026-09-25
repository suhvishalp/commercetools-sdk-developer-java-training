package com.lifestylehomecorp.extensibility.config;

import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;

/** Enables {@link ExtensibilityProperties}. The web filters register themselves as {@code @Component}s. */
@Configuration
@EnableConfigurationProperties(ExtensibilityProperties.class)
public class ExtensibilityConfig {
}
