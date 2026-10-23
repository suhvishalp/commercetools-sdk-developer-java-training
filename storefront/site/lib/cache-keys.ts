/** SWR cache keys shared across hooks, so one mutation can refresh every panel that shows the data. */
export const KEY_CART = 'cart';
export const KEY_SHIPPING_OPTIONS = 'cart/shipping-methods';
export const KEY_PICKUP_LOCATIONS = 'cart/pickup-locations';
export const KEY_SESSION = 'session';
export const KEY_ACCOUNT = 'account';
export const KEY_ORDERS = 'orders';
export const KEY_WISHLIST = 'shopping-list';
export const KEY_READINESS = 'checkout/readiness';
export function keyOrder(id: string) { return `orders/${encodeURIComponent(id)}`; }
