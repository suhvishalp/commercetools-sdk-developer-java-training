package com.lifestylehomecorp.customer.infrastructure;

import com.commercetools.api.client.ProjectApiRoot;
import com.commercetools.api.models.customer.AnonymousCartSignInMode;
import com.commercetools.api.models.customer.Customer;
import com.commercetools.api.models.customer.CustomerChangePasswordBuilder;
import com.commercetools.api.models.customer.CustomerCreateEmailTokenBuilder;
import com.commercetools.api.models.customer.CustomerCreatePasswordResetTokenBuilder;
import com.commercetools.api.models.customer.CustomerDraftBuilder;
import com.commercetools.api.models.customer.CustomerEmailVerifyBuilder;
import com.commercetools.api.models.customer.CustomerResetPasswordBuilder;
import com.commercetools.api.models.customer.CustomerSignInResult;
import com.commercetools.api.models.customer.CustomerSignin;
import com.commercetools.api.models.customer.CustomerSigninBuilder;
import com.commercetools.api.models.customer.CustomerToken;
import com.commercetools.api.models.customer.CustomerUpdateAction;
import com.commercetools.api.models.customer.CustomerUpdateBuilder;
import com.commercetools.api.models.store.StoreResourceIdentifierBuilder;
import com.lifestylehomecorp.customer.application.CustomerRepository;
import com.lifestylehomecorp.customer.application.SignUpInput;
import com.lifestylehomecorp.customer.domain.VerificationMail;
import org.springframework.stereotype.Repository;

import java.util.List;
import com.lifestylehomecorp.platform.errors.TaskNotImplementedException;

/**
 * SDK gateway for the Customer — the ONE place SDK code is written for Session 5. Each method is a
 * single commercetools call returning the raw SDK type; {@link com.lifestylehomecorp.customer.application.CustomerService}
 * owns version + 409-retry and the PII-safe mapping.
 *
 * <p>This is the SOLUTION (answer key): every task method carries its SDK call. On the starter branch
 * 5.1 / 5.2 / 5.5 / 5.7 / 5.10 throw {@code TaskNotImplementedException}; {@link #get},
 * {@link #createEmailToken}, {@link #findVerificationMail} and {@link #confirmEmail} are trainer-provided plumbing on both.
 */
@Repository
public class CtCustomerRepository implements CustomerRepository {

    /** Expand the group so the profile can show its KEY ("vip") — a reference carries only the id. */
    private static final String EXPAND_GROUP = "customerGroup";

    private final ProjectApiRoot apiRoot;

    public CtCustomerRepository(ProjectApiRoot apiRoot) {
        this.apiRoot = apiRoot;
    }

    /**
     * 5.1 — POST /customers with a CustomerDraft. The guest's {@code anonymousId} on the draft hands every
     * cart / shopping list / order / payment carrying it to the new customer; a brand-new customer has no
     * other cart, so a sign-in mode would be moot (the guest cart simply becomes theirs). The store (when
     * given) makes a store-specific customer; the general endpoint accepts {@code stores} on the draft.
     */
    @Override
    public CustomerSignInResult signUp(SignUpInput in) {
        // TODO (Task 5.1): POST a CustomerDraft — email + password + firstName + lastName, the store
        // (in.storeKey(), when set) and the guest's anonymousId (so their carts / lists / orders become
        // the new customer's) — and return the raw CustomerSignInResult (customer + cart). Goal + hint
        // in the @TaskDescription; see session-tasks-detailed.md § 5.1.
        throw new TaskNotImplementedException("5.1");
    }

    /**
     * 5.2 / 5.3 — POST /login with a CustomerSignin. Authenticates and returns STATE: the customer plus
     * their most recently modified active cart, recalculated. {@code anonymousId} assigns the guest's
     * resources; {@code anonymousCartSignInMode} (5.3) decides how the guest cart meets an existing
     * customer cart. Wrong email or password → the same 400 InvalidCredentials (passed through as-is).
     */
    @Override
    public CustomerSignInResult signIn(String email, String password, String anonymousId, AnonymousCartSignInMode mode,
                                       String storeKey) {
        // TODO (Task 5.2): POST /login with a CustomerSignin — email + password + anonymousId +
        // anonymousCartSignInMode — and return the raw CustomerSignInResult; its cart is the customer's
        // RECALCULATED active cart. The service re-points the session at it (5.3) and builds the merge
        // report. Goal + hint in the @TaskDescription; see session-tasks-detailed.md § 5.2 / 5.3.
        throw new TaskNotImplementedException("5.2");
    }

    @Override
    public Customer get(String customerId) {
        return apiRoot.customers().withId(customerId).get()
                .withExpand(EXPAND_GROUP)
                .executeBlocking().getBody();
    }

    /** 5.5 — POST /customers/{id} with a CustomerUpdate (version + actions): the cart's update, on a second resource. */
    @Override
    public Customer findByEmail(String email) {
        List<Customer> results = apiRoot.customers().get()
                .withWhere("lowercaseEmail = :email")
                .withPredicateVar("email", email == null ? "" : email.toLowerCase())
                .withLimit(1)
                .executeBlocking().getBody().getResults();
        return results.isEmpty() ? null : results.get(0);
    }

    @Override
    public Customer update(String customerId, Long version, List<CustomerUpdateAction> actions) {
        return apiRoot.customers().withId(customerId)
                .post(CustomerUpdateBuilder.of().version(version).actions(actions).build())
                .withExpand(EXPAND_GROUP)
                .executeBlocking().getBody();
    }

    /** 5.7 — POST /customers/password: the current password AND the version are required; other tokens are invalidated. */
    @Override
    public Customer changePassword(String customerId, Long version, String currentPassword, String newPassword) {
        // TODO (Task 5.7): POST /customers/password with a CustomerChangePassword (id + version +
        // currentPassword + newPassword) and return the raw Customer. See session-tasks-detailed.md § 5.7.
        throw new TaskNotImplementedException("5.7");
    }

    /**
     * 5.7 — POST /customers/password-token. The token is a secret in transit: in production its value is
     * EMAILED to the customer; the service only returns it because the course has no mail service. A
     * short TTL and {@code invalidateOlderTokens} keep a re-request from leaving live links around.
     */
    @Override
    public CustomerToken createPasswordResetToken(String email, long ttlMinutes) {
        // TODO (Task 5.7): POST /customers/password-token with a CustomerCreatePasswordResetToken (email +
        // ttlMinutes, invalidateOlderTokens = true) and return the raw CustomerToken. In production its
        // value is EMAILED — the service only returns it here because the course has no mail service.
        throw new TaskNotImplementedException("5.7");
    }

    /** 5.7 — POST /customers/password/reset: no version, no session — the token is the proof. */
    @Override
    public Customer resetPassword(String tokenValue, String newPassword) {
        // TODO (Task 5.7): POST /customers/password/reset with a CustomerResetPassword (tokenValue +
        // newPassword) and return the raw Customer. No version, no session — the token is the proof.
        throw new TaskNotImplementedException("5.7");
    }

    @Override
    public CustomerToken createEmailToken(String customerId, Long version, long ttlMinutes) {
        return apiRoot.customers().emailToken()
                .post(CustomerCreateEmailTokenBuilder.of()
                        .id(customerId)
                        .version(version)
                        .ttlMinutes(ttlMinutes)
                        .build())
                .executeBlocking().getBody();
    }

    /** The outbox the ecoliving-customer-connectors Event app writes instead of sending a real mail. */
    static final String MAIL_OUTBOX_CONTAINER = "ecoliving-mail-outbox";

    @Override
    @SuppressWarnings("unchecked")
    public java.util.Optional<VerificationMail> findVerificationMail(String customerId) {
        try {
            Object value = apiRoot.customObjects()
                    .withContainerAndKey(MAIL_OUTBOX_CONTAINER, customerId)
                    .get()
                    .executeBlocking().getBody().getValue();
            if (!(value instanceof java.util.Map<?, ?> m)) {
                return java.util.Optional.empty();
            }
            java.util.Map<String, Object> mail = (java.util.Map<String, Object>) m;
            return java.util.Optional.of(new VerificationMail(
                    String.valueOf(mail.get("tokenValue")),
                    mail.get("link") == null ? null : String.valueOf(mail.get("link")),
                    mail.get("expiresAt") == null ? null : String.valueOf(mail.get("expiresAt")),
                    mail.get("createdAt") == null ? null : String.valueOf(mail.get("createdAt"))));
        } catch (io.vrap.rmf.base.client.ApiHttpException e) {
            if (e.getStatusCode() == 404) {
                return java.util.Optional.empty();   // no mail yet: the connector is not installed, or still working
            }
            throw e;
        }
    }

    @Override
    public Customer confirmEmail(String tokenValue) {
        return apiRoot.customers().emailConfirm()
                .post(CustomerEmailVerifyBuilder.of().tokenValue(tokenValue).build())
                .executeBlocking().getBody();
    }

    /** 5.10 — DELETE /customers/{id}?version=… Orders keep their customer snapshot; nothing cascades. */
    @Override
    public Customer delete(String customerId, Long version) {
        return apiRoot.customers().withId(customerId)
                .delete()
                .withVersion(version)
                .executeBlocking().getBody();
    }
}
