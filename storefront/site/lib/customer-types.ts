/** Wire types of the customer module (Session 5) — mirrors bff-java/customer/api/dto. */

/** GET /api/session — what the browser may know: signed in, a first name, a pricing tier. No ids (5.9). */
export interface SessionView {
  signedIn: boolean;
  firstName: string | null;
  customerGroupKey: string | null;
}

export interface CustomerAddressView {
  id: string;
  key: string | null;
  country: string | null;
  firstName: string | null;
  lastName: string | null;
  streetName: string | null;
  streetNumber: string | null;
  postalCode: string | null;
  city: string | null;
  defaultShipping: boolean;
  defaultBilling: boolean;
}

/** GET /api/account — the PII-safe profile (5.4 / 5.10). */
export interface CustomerView {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  emailVerified: boolean;
  customerGroupKey: string | null;
  stores: string[];
  addresses: CustomerAddressView[];
}

/** What sign-in did to the guest basket (5.3). */
export interface MergeReportView {
  mode: string;
  activeCartId: string | null;
  anonymousCartId: string | null;
  anonymousCartState: string | null;
  mergedLines: number;
  addedLines: number;
  leftBehind: string[];
}

/** Response of POST /api/customers/signup and /login. */
export interface SignInView {
  customer: CustomerView;
  activeCartId: string | null;
  cartItemCount: number;
  mergeReport: MergeReportView;
  /** What happened to the basket, in plain words (why activeCartId is what it is). */
  note: string | null;
}

/** A reset / verification token — returned only because the course has no email service (5.7 / 5.8). */
export interface TokenView {
  tokenValue: string | null;
  expiresAt: string | null;
  note: string | null;
}

/** GET /api/price-context (5.6). */
export interface PriceContextView {
  currency: string | null;
  country: string | null;
  channel: string | null;
  customerGroupId: string | null;
  customerGroupKey: string | null;
  signedIn: boolean;
}

export interface AddressInput {
  key?: string;
  country: string;
  firstName?: string;
  lastName?: string;
  streetName?: string;
  streetNumber?: string;
  postalCode?: string;
  city?: string;
  defaultShipping?: boolean;
  defaultBilling?: boolean;
}
