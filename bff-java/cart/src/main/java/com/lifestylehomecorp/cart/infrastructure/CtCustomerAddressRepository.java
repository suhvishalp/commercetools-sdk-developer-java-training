package com.lifestylehomecorp.cart.infrastructure;

import com.commercetools.api.client.ProjectApiRoot;
import com.commercetools.api.models.common.Address;
import com.commercetools.api.models.customer.Customer;
import com.lifestylehomecorp.cart.application.CustomerAddressRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Trainer-provided plumbing: the ONE customer read the cart module needs — the address book entry to
 * pre-fill the cart's shipping address with after sign-in (S5's 5.5 payoff, landing on S4's 4.7).
 */
@Repository
public class CtCustomerAddressRepository implements CustomerAddressRepository {

    private final ProjectApiRoot apiRoot;

    public CtCustomerAddressRepository(ProjectApiRoot apiRoot) {
        this.apiRoot = apiRoot;
    }

    @Override
    public Address defaultShippingAddress(String customerId) {
        Customer c = apiRoot.customers().withId(customerId).get().executeBlocking().getBody();
        List<Address> book = c.getAddresses() == null ? List.of() : c.getAddresses();
        String defaultId = c.getDefaultShippingAddressId();
        if (defaultId != null) {
            for (Address a : book) {
                if (defaultId.equals(a.getId())) {
                    return a;
                }
            }
        }
        return book.size() == 1 ? book.get(0) : null;
    }
}
