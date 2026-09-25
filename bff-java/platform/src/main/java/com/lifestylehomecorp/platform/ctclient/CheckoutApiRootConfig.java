package com.lifestylehomecorp.platform.ctclient;

import com.commercetools.checkout.client.ProjectApiRoot;
import com.commercetools.checkout.defaultconfig.CheckoutApiRootBuilder;
import com.commercetools.http.okhttp3.CtOkHttp3Client;
import com.lifestylehomecorp.platform.config.CheckoutProperties;
import com.lifestylehomecorp.platform.config.CtpProperties;
import io.vrap.rmf.base.client.oauth2.ClientCredentials;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * The commercetools <b>Checkout</b> API client (Session 6) — a second, separate SDK root next to the
 * Composable Commerce {@link com.commercetools.api.client.ProjectApiRoot}: the Payment Intents API
 * (capture / cancel / refund a Payment that Checkout created), Applications, Payment Integrations,
 * Transactions. Same API client credentials; needs the {@code manage_checkout_payment_intents} scope.
 * The Checkout host is derived from the region in {@code ctp.api-url} unless {@code ctp.checkout.api-url}
 * is set. Injected as {@code CheckoutApiRoot} (a type alias would be nicer; the SDK reuses the name
 * ProjectApiRoot in a different package — always import the checkout one explicitly).
 */
@Configuration
@EnableConfigurationProperties(CheckoutProperties.class)
public class CheckoutApiRootConfig {

    @Bean(name = "checkoutApiRoot", destroyMethod = "close")
    public ProjectApiRoot checkoutApiRoot(CtpProperties ctp, CheckoutProperties checkout) {
        String apiUrl = CheckoutRegion.orDerived(checkout.getApiUrl(), CheckoutRegion.checkoutApiUrl(ctp.getApiUrl()));
        String tokenUrl = ctp.getAuthUrl().replaceAll("/+$", "");
        tokenUrl = tokenUrl.endsWith("/oauth/token") ? tokenUrl : tokenUrl + "/oauth/token";
        return CheckoutApiRootBuilder.of(new CtOkHttp3Client())
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
