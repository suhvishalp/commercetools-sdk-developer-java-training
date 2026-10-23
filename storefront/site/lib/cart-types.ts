/**
 * The cart contract as returned by the BFF (GET /api/cart and every cart mutation). A bundle comes
 * back as ONE parent line with its components in `children` (money rolled up onto the parent), so
 * `lines.length === itemCount` and the storefront can render the group straight through.
 */
export interface MoneyView {
  centAmount: number;
  currencyCode: string;
  fractionDigits: number;
}

export interface CartLineView {
  lineItemId: string;
  sku: string | null;
  name: string;
  quantity: number;
  unitPrice: MoneyView | null;
  lineTotal: MoneyView | null;
  lineSavings: MoneyView | null;
  /** Set on a bundle parent — its identity. */
  bundleId: string | null;
  /** Set on a bundle child — equals the parent's bundleId. */
  parentKey: string | null;
  recurring: boolean;
  /** e.g. "Every month" — a recurring line's frequency (null when not recurring). */
  recurrenceLabel: string | null;
  /** "Fixed" (price locked at subscribe time) or "Dynamic" (re-priced each cycle); null when not recurring. */
  recurrencePriceMode: string | null;
  distributionChannelId: string | null;
  supplyChannelId: string | null;
  /** The channel KEYS behind the ids above (the storefront works in keys); null when the line has none. */
  distributionChannelKey: string | null;
  supplyChannelKey: string | null;
  inventoryMode: string | null;
  /** A bundle parent's component lines; empty for ordinary lines and for children. */
  children: CartLineView[];
}

/** An address on the cart (shipping / billing) — 4.7. */
export interface CartAddressView {
  firstName: string | null;
  lastName: string | null;
  streetName: string | null;
  streetNumber: string | null;
  postalCode: string | null;
  city: string | null;
  country: string | null;
}

export interface CartView {
  id: string | null;
  version: number | null;
  currency: string | null;
  country: string | null;
  /** The store the basket was started in (POST /api/cart?store=), or null for a store-less basket. A basket
   *  stays in its store for its whole life — switching store with items in the basket is a basket decision. */
  storeKey: string | null;
  lines: CartLineView[];
  itemCount: number;
  subtotal: MoneyView | null;
  savings: MoneyView | null;
  shipping: MoneyView | null;
  tax: MoneyView | null;
  total: MoneyView | null;
  /** The selected shipping method's name, or null when none is set yet (4.8). */
  shippingMethod: string | null;
  /** The selected shipping method's id — matches ShippingOptionView.id. */
  shippingMethodId: string | null;
  shippingAddress: CartAddressView | null;
  billingAddress: CartAddressView | null;
  /** Set once a customer owns the cart (sign-in / sign-up, S5); null for a guest cart. */
  customerId: string | null;
  /** The customer's email, or the guest's checkout email. */
  customerEmail: string | null;
  /** "customer" | "guest" | null (no cart yet). */
  owner: 'customer' | 'guest' | null;
  discountCodes: string[];
}

/** A selectable delivery option (GET /api/cart/shipping-methods) — 4.8. */
export interface ShippingOptionView {
  id: string;
  key: string | null;
  name: string;
  description: string | null;
  isDefault: boolean;
  /** The rate that matched the cart (zone + currency + value tier), if the BFF could resolve one. */
  price: MoneyView | null;
  /** Order value from which this rate is waived, if the method has a threshold. */
  freeAbove: MoneyView | null;
  /** Whether the cart currently carries this method. */
  selected: boolean;
}

/** Body of PUT /api/cart/shipping-address. */
export interface ShippingAddressInput {
  country: string;
  firstName?: string;
  lastName?: string;
  streetName?: string;
  streetNumber?: string;
  postalCode?: string;
  city?: string;
}

/** A place to collect from (GET /api/cart/pickup-locations) — a supply channel with an address (4.5). */
export interface PickupLocationView {
  id: string;
  key: string;
  name: string;
  description: string | null;
  street: string | null;
  city: string | null;
  country: string | null;
}

/** Fulfilment choice for a line (4.5): delivery, or collection from a pickup location (by channel key). */
export interface FulfilmentChoice {
  /** Prices the line from this channel — the price the PLP / PDP displayed. */
  distributionChannelKey?: string | null;
  /** A pickup store's channel key, or "" to go back to delivery (default stock). */
  supplyChannelKey?: string | null;
}
