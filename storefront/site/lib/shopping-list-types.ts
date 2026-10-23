/** The guest wishlist / saved-items contract as returned by the BFF (GET /api/shopping-list). */
export interface SavedItemView {
  lineItemId: string;
  sku: string | null;
  name: string;
  quantity: number;
  /** Optional — a thumbnail and the item's price, when the BFF resolves them for the saved variant. */
  imageUrl?: string | null;
  price?: MoneyView | null;
}

export interface MoneyView {
  centAmount: number;
  currencyCode: string;
  fractionDigits?: number;
}

export interface SavedListView {
  id: string | null;
  name: string;
  items: SavedItemView[];
  itemCount: number;
}
