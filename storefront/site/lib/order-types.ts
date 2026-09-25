import { MoneyView } from './cart-types';

/** Wire types of the order module (Session 6) — mirrors bff-java/order/api/dto. */
export interface CheckoutStartView {
  sessionId: string;
  projectKey: string;
  region: string;
  expiresAt: string | null;
  orderNumber: string;
  applicationKey: string;
}

export interface ReadinessView {
  ready: boolean;
  missing: string[];
  cartId: string | null;
  total: MoneyView | null;
}

export interface LedgerTransactionView {
  id: string;
  type: string;
  state: string;
  amount: MoneyView | null;
  interactionId: string | null;
  timestamp: string | null;
}

export interface PaymentLedgerView {
  paymentId: string;
  paymentInterface: string | null;
  method: string | null;
  interfaceId: string | null;
  amountPlanned: MoneyView | null;
  statusInterfaceCode: string | null;
  authorized: boolean;
  captured: boolean;
  transactions: LedgerTransactionView[];
  interfaceInteractions: number;
}

export interface OrderLineView {
  lineItemId: string;
  sku: string | null;
  name: string | null;
  quantity: number;
  lineTotal: MoneyView | null;
  recurring: boolean;
  recurrenceLabel: string | null;
  bundleId: string | null;
  parentKey: string | null;
}

export interface AddressView {
  firstName: string | null;
  lastName: string | null;
  streetName: string | null;
  streetNumber: string | null;
  postalCode: string | null;
  city: string | null;
  country: string | null;
}

export interface OrderDetailView {
  orderNumber: string;
  createdAt: string;
  customerEmail: string | null;
  lines: OrderLineView[];
  shippingAddress: AddressView | null;
  billingAddress: AddressView | null;
  shippingMethod: string | null;
  subtotal: MoneyView | null;
  shipping: MoneyView | null;
  tax: MoneyView | null;
  total: MoneyView;
  orderState: string | null;
  shipmentState: string | null;
  paymentState: string | null;
  customState: string | null;
  allowedTransitions: string[];
  payments: PaymentLedgerView[];
}

export interface OrderSummaryView {
  orderNumber: string;
  createdAt: string;
  total: MoneyView;
  orderState: string | null;
  shipmentState: string | null;
  paymentState: string | null;
  customState: string | null;
  lineCount: number;
}

export interface SubscriptionView {
  recurringOrderId: string;
  state: string | null;
  scheduleLabel: string | null;
  startsAt: string | null;
  nextOrderAt: string | null;
  expiresAt: string | null;
  priceSelectionMode: string | null;
  skus: string[];
}
