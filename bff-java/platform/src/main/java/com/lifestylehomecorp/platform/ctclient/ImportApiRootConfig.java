package com.lifestylehomecorp.platform.ctclient;

import com.commercetools.http.okhttp3.CtOkHttp3Client;
import com.commercetools.importapi.client.ProjectApiRoot;
import com.commercetools.importapi.defaultconfig.ImportApiRootBuilder;
import com.lifestylehomecorp.platform.config.CtpProperties;
import com.lifestylehomecorp.platform.config.ImportApiProperties;
import io.vrap.rmf.base.client.oauth2.ClientCredentials;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * The commercetools <b>Import API</b> client (Session 7, task 7.8) — a third SDK root next to the
 * Composable Commerce {@link com.commercetools.api.client.ProjectApiRoot} and the Checkout one. The
 * Import API is a separate service with its own host ({@code import.{region}.commercetools.com}) and
 * its own typed models ({@code com.commercetools.importapi.*}): Import Containers, Import Requests,
 * Import Operations. Same credentials, same token endpoint. Injected as {@code importApiRoot}; the SDK
 * reuses the class name ProjectApiRoot in a third package — always import the importapi one explicitly.
 */
@Configuration
@EnableConfigurationProperties(ImportApiProperties.class)
public class ImportApiRootConfig {

    @Bean(name = "importApiRoot", destroyMethod = "close")
    public ProjectApiRoot importApiRoot(CtpProperties ctp, ImportApiProperties importApi) {
        String apiUrl = CheckoutRegion.orDerived(importApi.getApiUrl(), CheckoutRegion.importApiUrl(ctp.getApiUrl()));
        String tokenUrl = ctp.getAuthUrl().replaceAll("/+$", "");
        tokenUrl = tokenUrl.endsWith("/oauth/token") ? tokenUrl : tokenUrl + "/oauth/token";
        return ImportApiRootBuilder.of(new CtOkHttp3Client())
                .defaultClient(
                        ClientCredentials.of()
                                .withClientId(ctp.getClientId())
                                .withClientSecret(ctp.getClientSecret())
                                .build(),
                        tokenUrl,
                        apiUrl)
                .build(ctp.getProjectKey());
    }
}
