package com.lifestylehomecorp.customer.api.dto;

import com.lifestylehomecorp.customer.domain.SignInOutcome;

/** Response of sign-up / sign-in: the customer, the now-active cart, the merge report, and a plain-words note. */
public record SignInView(CustomerView customer, String activeCartId, int cartItemCount, MergeReportView mergeReport, String note) {

    public static SignInView from(SignInOutcome o) {
        return new SignInView(CustomerView.from(o.customer()), o.activeCartId(), o.cartItemCount(),
                MergeReportView.from(o.mergeReport()), o.note());
    }
}
