// GENERATED from courses/functional-architect-b2c/assets/decision-registry/decisions.json — do not edit.
// Run `node sync.mjs` in that folder after changing the registry; both storefronts get this same file.

export interface ArchitectDecision {
  id: string;
  title: string;
  module: string;
  session: number;
  mc: string[];
  demo: string;
  demoable: 'live' | 'explain';
  capabilities: string[];
  sdkTasks: string[];
  cilTasks: string[];
  cilNote: string;
}

export const COURSE = "The commercetools Sphere Architect";
export const SESSIONS: Record<string, string> = {
  "1": "Sphere & Platform Foundations",
  "2": "Product Modelling Fundamentals",
  "3": "Advanced Catalogue & Catalogue Models",
  "4": "Assortment & Discovery",
  "5": "Pricing & Promotions",
  "6": "Customers & Identity",
  "7": "Cart, Checkout & Orders",
  "8": "Integration & Extensibility",
  "9": "Experience Architecture & Evolution"
};
export const DECISIONS: ArchitectDecision[] = [
  {
    "id": "D1",
    "title": "Single project or multiple projects for multi-region B2C?",
    "module": "foundations",
    "session": 1,
    "mc": [
      "Project settings"
    ],
    "demo": "One project serves every region the storefront switches between.",
    "demoable": "explain",
    "capabilities": [
      "project.info"
    ],
    "sdkTasks": [
      "1.1"
    ],
    "cilTasks": [
      "1.1"
    ],
    "cilNote": ""
  },
  {
    "id": "D2",
    "title": "Region selection: where does the project run?",
    "module": "foundations",
    "session": 1,
    "mc": [
      "(set at project creation)"
    ],
    "demo": "Permanent: a new region means a new project.",
    "demoable": "explain",
    "capabilities": [],
    "sdkTasks": [],
    "cilTasks": [],
    "cilNote": ""
  },
  {
    "id": "D3",
    "title": "Credentials, sessions and scopes: what may the browser and the backend hold?",
    "module": "foundations",
    "session": 1,
    "mc": [
      "Settings › Developer settings › API clients (scopes)",
      "Commerce Integration Layer › Project Settings"
    ],
    "demo": "DevTools shows one opaque HttpOnly session cookie (lhc_session / cil_session) and no commercetools credential; the SDK backend logs the scopes its secret holds.",
    "demoable": "live",
    "capabilities": [
      "customer.session",
      "project.info"
    ],
    "sdkTasks": [
      "pre-built session + scope audit",
      "5.9"
    ],
    "cilTasks": [
      "1.4",
      "5.4"
    ],
    "cilNote": ""
  },
  {
    "id": "D4",
    "title": "Product Type strategy: one broad type or many specific types?",
    "module": "catalog",
    "session": 2,
    "mc": [
      "Settings › Product types"
    ],
    "demo": "A new attribute on a product type, filled on a product, appears on the product page.",
    "demoable": "live",
    "capabilities": [
      "catalog.pdp"
    ],
    "sdkTasks": [
      "2.2"
    ],
    "cilTasks": [
      "2.2"
    ],
    "cilNote": ""
  },
  {
    "id": "D5",
    "title": "Attribute placement: Product-level or Variant-level?",
    "module": "catalog",
    "session": 2,
    "mc": [
      "Settings › Product types › attribute level / constraint"
    ],
    "demo": "Product-level attributes show once; variant attributes change with the selected variant.",
    "demoable": "live",
    "capabilities": [
      "catalog.pdp",
      "catalog.variantMatrix"
    ],
    "sdkTasks": [
      "2.2",
      "2.6"
    ],
    "cilTasks": [
      "2.2",
      "2.5"
    ],
    "cilNote": ""
  },
  {
    "id": "D6",
    "title": "Variant axis vs separate products",
    "module": "catalog",
    "session": 2,
    "mc": [
      "Products › a product › Variants"
    ],
    "demo": "Adding a variant adds a choice to the product page selector.",
    "demoable": "live",
    "capabilities": [
      "catalog.variantMatrix"
    ],
    "sdkTasks": [
      "2.6"
    ],
    "cilTasks": [
      "2.5"
    ],
    "cilNote": ""
  },
  {
    "id": "D7",
    "title": "Bundle modelling: reference attribute, single SKU, or cart composition?",
    "module": "catalog",
    "session": 3,
    "mc": [
      "Products › the bundle product › its component references"
    ],
    "demo": "The product page lists what the set includes; adding the bundle adds real component lines.",
    "demoable": "live",
    "capabilities": [
      "catalog.bundles",
      "cart.bundles"
    ],
    "sdkTasks": [
      "2.7",
      "4.3"
    ],
    "cilTasks": [
      "2.9"
    ],
    "cilNote": "Reading a bundle is core CIL (task 2.9: the productRef attribute comes back resolved to products). Adding a bundle to the cart needs a line-item custom-field write — an extension decision (D44)."
  },
  {
    "id": "D8",
    "title": "Reference vs Nested vs Set: when each is the right shape",
    "module": "catalog",
    "session": 2,
    "mc": [
      "Settings › Product types"
    ],
    "demo": "Shape of structured attribute data on the product page.",
    "demoable": "explain",
    "capabilities": [
      "catalog.pdp"
    ],
    "sdkTasks": [
      "2.2"
    ],
    "cilTasks": [
      "2.2"
    ],
    "cilNote": ""
  },
  {
    "id": "D9",
    "title": "Category hierarchy: single tree, multiple trees, or both?",
    "module": "catalog",
    "session": 3,
    "mc": [
      "Categories"
    ],
    "demo": "A new or re-ordered category changes the navigation and the category listing.",
    "demoable": "live",
    "capabilities": [
      "catalog.categories",
      "catalog.categoryProducts",
      "search.byCategory"
    ],
    "sdkTasks": [
      "2.3",
      "2.4",
      "3.4"
    ],
    "cilTasks": [
      "2.3",
      "2.4"
    ],
    "cilNote": ""
  },
  {
    "id": "D10",
    "title": "Store granularity: one Store per region, country, or language?",
    "module": "distribution",
    "session": 4,
    "mc": [
      "Settings › Stores (languages, countries, channels)"
    ],
    "demo": "The store selector and each store’s default language and currency follow the Store settings.",
    "demoable": "live",
    "capabilities": [
      "distribution.stores",
      "distribution.storeByKey",
      "distribution.store"
    ],
    "sdkTasks": [
      "1.2",
      "1.3",
      "1.4"
    ],
    "cilTasks": [
      "1.2",
      "1.3",
      "1.5"
    ],
    "cilNote": "CIL has no stores query: re-run `npm run cil:config` after adding a store."
  },
  {
    "id": "D11",
    "title": "Channel scope: Distribution Channel and Supply Channel",
    "module": "distribution",
    "session": 4,
    "mc": [
      "Settings › Channels",
      "Settings › Stores › distribution / supply channels"
    ],
    "demo": "Switching store changes the channel price and the stock shown.",
    "demoable": "live",
    "capabilities": [
      "pricing.resolve",
      "inventory.read",
      "cart.channel"
    ],
    "sdkTasks": [
      "2.1",
      "4.5"
    ],
    "cilTasks": [
      "2.7"
    ],
    "cilNote": "Pickup vs delivery per line is not served on CIL (no supply-channel mutation)."
  },
  {
    "id": "D12",
    "title": "Product Selection mode: allow-list or deny-list?",
    "module": "distribution",
    "session": 4,
    "mc": [
      "Products › Product selections (assign to a store)"
    ],
    "demo": "Adding or removing a product in a store’s selection changes that store’s listing.",
    "demoable": "live",
    "capabilities": [
      "search.query",
      "catalog.plp"
    ],
    "sdkTasks": [
      "3.1"
    ],
    "cilTasks": [
      "3.1"
    ],
    "cilNote": ""
  },
  {
    "id": "D13",
    "title": "Product Tailoring vs forking the product",
    "module": "distribution",
    "session": 4,
    "mc": [
      "Products › a product › Product tailoring (per store)"
    ],
    "demo": "The in-store product page shows the store’s tailored name and description.",
    "demoable": "live",
    "capabilities": [
      "catalog.pdpInStore"
    ],
    "sdkTasks": [
      "3.2"
    ],
    "cilTasks": [
      "3.5"
    ],
    "cilNote": ""
  },
  {
    "id": "D14",
    "title": "Embedded vs Standalone Prices",
    "module": "pricing",
    "session": 5,
    "mc": [
      "Products › Prices"
    ],
    "demo": "Where the price the product page shows is managed.",
    "demoable": "explain",
    "capabilities": [
      "pricing.resolve"
    ],
    "sdkTasks": [
      "2.1"
    ],
    "cilTasks": [
      "2.7"
    ],
    "cilNote": ""
  },
  {
    "id": "D15",
    "title": "Designing the pricing-dimensions matrix",
    "module": "pricing",
    "session": 5,
    "mc": [
      "Products › a product › Prices (country, channel, customer group, validity)"
    ],
    "demo": "A new country or channel price changes the product page for that market or store.",
    "demoable": "live",
    "capabilities": [
      "pricing.resolve"
    ],
    "sdkTasks": [
      "2.1",
      "2.2"
    ],
    "cilTasks": [
      "2.7"
    ],
    "cilNote": ""
  },
  {
    "id": "D16",
    "title": "The fallback rule",
    "module": "pricing",
    "session": 5,
    "mc": [
      "Products › a product › Prices (remove a scoped price)"
    ],
    "demo": "Remove a country price: the base price shows instead, never a blank.",
    "demoable": "live",
    "capabilities": [
      "pricing.resolve"
    ],
    "sdkTasks": [
      "2.1"
    ],
    "cilTasks": [
      "2.7"
    ],
    "cilNote": ""
  },
  {
    "id": "D17",
    "title": "Recurring Order pricing: dedicated recurring prices or one-time fallback?",
    "module": "pricing",
    "session": 5,
    "mc": [
      "Products › Prices (recurrence policy)",
      "Settings › Recurrence policies"
    ],
    "demo": "The subscribe-and-save option shows the recurring price.",
    "demoable": "live",
    "capabilities": [
      "cart.recurring",
      "order.recurring"
    ],
    "sdkTasks": [
      "4.4",
      "6.9"
    ],
    "cilTasks": [],
    "cilNote": "Not served on CIL (no subscription lines through the Experience API)."
  },
  {
    "id": "D18",
    "title": "Price rounding mode: project default or per-cart override?",
    "module": "pricing",
    "session": 5,
    "mc": [
      "Project settings"
    ],
    "demo": "Cent-level differences on discounted totals.",
    "demoable": "explain",
    "capabilities": [
      "cart.summary"
    ],
    "sdkTasks": [
      "4.10"
    ],
    "cilTasks": [
      "4.6"
    ],
    "cilNote": ""
  },
  {
    "id": "D19",
    "title": "Cart-to-PDP price consistency",
    "module": "pricing",
    "session": 5,
    "mc": [
      "Products › Prices · Discounts"
    ],
    "demo": "The price in the bag matches the product page.",
    "demoable": "live",
    "capabilities": [
      "cart.summary",
      "pricing.resolve"
    ],
    "sdkTasks": [
      "4.10"
    ],
    "cilTasks": [
      "4.6"
    ],
    "cilNote": ""
  },
  {
    "id": "D20",
    "title": "Global Customers vs Store-Specific Customers",
    "module": "customer",
    "session": 6,
    "mc": [
      "Customers › a customer › Stores"
    ],
    "demo": "A store-scoped customer cannot sign in on the CIL storefront; the SDK storefront signs them in.",
    "demoable": "live",
    "capabilities": [
      "customer.login",
      "customer.register"
    ],
    "sdkTasks": [
      "5.1",
      "5.2"
    ],
    "cilTasks": [
      "5.1",
      "5.2"
    ],
    "cilNote": "CIL sign-in is project-level: store-scoped customers cannot sign in."
  },
  {
    "id": "D21",
    "title": "GDPR / PII strategy: where does customer data live?",
    "module": "customer",
    "session": 6,
    "mc": [
      "Customers"
    ],
    "demo": "What the account page shows, and account deletion.",
    "demoable": "live",
    "capabilities": [
      "customer.profile"
    ],
    "sdkTasks": [
      "5.4",
      "5.10"
    ],
    "cilTasks": [
      "5.5"
    ],
    "cilNote": "Account deletion is not a shopper operation on CIL."
  },
  {
    "id": "D22",
    "title": "Cart merge on login: default behaviour or override?",
    "module": "customer",
    "session": 6,
    "mc": [
      "(storefront behaviour)"
    ],
    "demo": "Sign in with a guest bag: the bag is combined (SDK: your merge strategy; CIL: merged for you).",
    "demoable": "live",
    "capabilities": [
      "customer.cartMerge"
    ],
    "sdkTasks": [
      "5.3"
    ],
    "cilTasks": [
      "5.3"
    ],
    "cilNote": ""
  },
  {
    "id": "D23",
    "title": "Product Discount vs Cart Discount vs Discount Code",
    "module": "pricing",
    "session": 5,
    "mc": [
      "Discounts › Product discounts · Cart discounts · Discount codes"
    ],
    "demo": "A product discount adds the sale badge; a code applied in the bag shows its saving; stacking order changes the total.",
    "demoable": "live",
    "capabilities": [
      "pricing.resolve",
      "cart.promo",
      "cart.summary"
    ],
    "sdkTasks": [
      "4.9",
      "4.10"
    ],
    "cilTasks": [
      "4.3",
      "4.6"
    ],
    "cilNote": ""
  },
  {
    "id": "D24",
    "title": "Customer Group strategy",
    "module": "customer",
    "session": 6,
    "mc": [
      "Customers › a customer › Customer group",
      "Products › Prices (customer group)"
    ],
    "demo": "Put a customer in the VIP group: after sign-in the product page shows the VIP price.",
    "demoable": "live",
    "capabilities": [
      "customer.groups",
      "pricing.resolve"
    ],
    "sdkTasks": [
      "5.6"
    ],
    "cilTasks": [
      "5.8"
    ],
    "cilNote": ""
  },
  {
    "id": "D25",
    "title": "Shipping Zone design: country, multi-country, or state-level?",
    "module": "cart",
    "session": 7,
    "mc": [
      "Settings › Zones · Shipping methods"
    ],
    "demo": "The delivery options offered for an address change with the zones.",
    "demoable": "live",
    "capabilities": [
      "cart.shipping",
      "cart.address"
    ],
    "sdkTasks": [
      "4.7",
      "4.8"
    ],
    "cilTasks": [
      "4.4",
      "4.5"
    ],
    "cilNote": ""
  },
  {
    "id": "D26",
    "title": "ShippingRateInputType: cartValue, cartClassification, or cartScore?",
    "module": "cart",
    "session": 7,
    "mc": [
      "Settings › Shipping methods (rates, free-above)"
    ],
    "demo": "The delivery price and free-delivery threshold in the bag.",
    "demoable": "live",
    "capabilities": [
      "cart.shipping",
      "cart.summary"
    ],
    "sdkTasks": [
      "4.8"
    ],
    "cilTasks": [
      "4.5"
    ],
    "cilNote": ""
  },
  {
    "id": "D27",
    "title": "Tax mode: platform-calculated, external amount, or externally-calculated?",
    "module": "cart",
    "session": 7,
    "mc": [
      "Settings › Tax categories"
    ],
    "demo": "Changing a country’s tax rate changes the tax line at checkout.",
    "demoable": "live",
    "capabilities": [
      "cart.summary"
    ],
    "sdkTasks": [
      "4.10"
    ],
    "cilTasks": [
      "4.6"
    ],
    "cilNote": "CIL carts are Platform tax mode; external tax under CIL is D45."
  },
  {
    "id": "D28",
    "title": "Product Search: /product-projections, /products/search, or GraphQL?",
    "module": "search",
    "session": 4,
    "mc": [
      "Settings › Product types › attribute “searchable”",
      "Products (names, keywords)"
    ],
    "demo": "Search the storefront: results, facets and sort come from one store-scoped Product Search call.",
    "demoable": "live",
    "capabilities": [
      "search.query",
      "search.fullText",
      "search.facets",
      "search.postFilter"
    ],
    "sdkTasks": [
      "3.1",
      "3.3",
      "3.5",
      "3.6",
      "3.7",
      "3.8"
    ],
    "cilTasks": [
      "3.1",
      "3.2",
      "3.3",
      "3.4"
    ],
    "cilNote": ""
  },
  {
    "id": "D29",
    "title": "Inventory mode: Track Only or Reserve On Order?",
    "module": "inventory",
    "session": 7,
    "mc": [
      "Products › a product › Inventory"
    ],
    "demo": "Lower the stock: the product page badge changes and the stock gate blocks adding more than is available.",
    "demoable": "live",
    "capabilities": [
      "inventory.read",
      "cart.stockGate"
    ],
    "sdkTasks": [
      "4.6"
    ],
    "cilTasks": [
      "2.8"
    ],
    "cilNote": "CIL does not expose a cart's inventory mode: make it a project policy, or set it on cart creation with a Managed API Extension (D44)."
  },
  {
    "id": "D30",
    "title": "Custom Line Item: when to use?",
    "module": "cart",
    "session": 7,
    "mc": [
      "(API)"
    ],
    "demo": "Fees and services that are not catalogue products.",
    "demoable": "explain",
    "capabilities": [
      "cart.summary"
    ],
    "sdkTasks": [
      "4.10"
    ],
    "cilTasks": [],
    "cilNote": ""
  },
  {
    "id": "D31",
    "title": "Order State Machine: default States or a custom State Machine?",
    "module": "order",
    "session": 7,
    "mc": [
      "Orders › an order › state",
      "Settings › States"
    ],
    "demo": "Move an order to the next state: order history and the timeline show it.",
    "demoable": "live",
    "capabilities": [
      "order.history",
      "order.states",
      "ext.messages"
    ],
    "sdkTasks": [
      "6.7",
      "6.8",
      "7.3"
    ],
    "cilTasks": [
      "6.4",
      "6.7",
      "6.8"
    ],
    "cilNote": "The shopper's side is core CIL (cancel 6.7, return 6.8, reorder 6.9, via Order.availableActions); state-machine transitions stay back office. The order timeline (Messages) is not served on CIL."
  },
  {
    "id": "D32",
    "title": "Build your own checkout or use commercetools Checkout?",
    "module": "order",
    "session": 7,
    "mc": [
      "Checkout › Applications · Payment connectors",
      "Commerce Integration Layer › Project Settings › Checkout routing"
    ],
    "demo": "Payment methods offered at the payment step follow the Checkout application (and, on CIL, the routing rule).",
    "demoable": "live",
    "capabilities": [
      "order.checkoutSession",
      "order.create"
    ],
    "sdkTasks": [
      "6.1",
      "6.3",
      "6.10"
    ],
    "cilTasks": [
      "6.10",
      "6.2",
      "6.3",
      "6.6"
    ],
    "cilNote": ""
  },
  {
    "id": "D33",
    "title": "Custom Field vs Custom Object vs State Machine",
    "module": "connector",
    "session": 8,
    "mc": [
      "Settings › Types (custom fields)"
    ],
    "demo": "The gift message is a cart custom field; the feature flag is a custom object.",
    "demoable": "live",
    "capabilities": [
      "ext.customFields",
      "ext.customObjects"
    ],
    "sdkTasks": [
      "7.1",
      "7.2"
    ],
    "cilTasks": [
      "7.4"
    ],
    "cilNote": "On CIL, writing a cart custom field needs the extension bundle (D44)."
  },
  {
    "id": "D34",
    "title": "Subscription vs API Extension vs Polling",
    "module": "connector",
    "session": 8,
    "mc": [
      "(API / Connect)"
    ],
    "demo": "The white-glove flag set on every cart write; the order timeline fed by messages.",
    "demoable": "live",
    "capabilities": [
      "ext.cartRules",
      "ext.messages",
      "ext.consumer"
    ],
    "sdkTasks": [
      "7.4",
      "7.5",
      "7.6",
      "7.7"
    ],
    "cilTasks": [
      "7.3"
    ],
    "cilNote": ""
  },
  {
    "id": "D35",
    "title": "commercetools Connect vs self-hosted integration code",
    "module": "connector",
    "session": 8,
    "mc": [
      "Connect › connectors (deploy / undeploy)"
    ],
    "demo": "Deploy the cart-rules connector: over-limit lines are refused and the white-glove notice appears.",
    "demoable": "live",
    "capabilities": [
      "ext.cartRules"
    ],
    "sdkTasks": [
      "S8",
      "S9"
    ],
    "cilTasks": [
      "S8",
      "S9"
    ],
    "cilNote": ""
  },
  {
    "id": "D36",
    "title": "Classic or Modular catalogue model?",
    "module": "catalog",
    "session": 3,
    "mc": [
      "Project settings (catalogue model)"
    ],
    "demo": "Explain-only: the course project and the B2C sample data are Classic.",
    "demoable": "explain",
    "capabilities": [
      "catalog.pdp",
      "catalog.variantMatrix"
    ],
    "sdkTasks": [],
    "cilTasks": [],
    "cilNote": ""
  },
  {
    "id": "D37",
    "title": "Bundle pricing: own price, rolled-up, or discount-driven?",
    "module": "pricing",
    "session": 5,
    "mc": [
      "Products › the bundle · Discounts"
    ],
    "demo": "The bundle’s price and saving on the product page and in the bag.",
    "demoable": "live",
    "capabilities": [
      "catalog.bundles",
      "cart.bundles"
    ],
    "sdkTasks": [
      "2.7",
      "4.3"
    ],
    "cilTasks": [],
    "cilNote": "See D7."
  },
  {
    "id": "D38",
    "title": "Bundle cart representation: one line or parent + children?",
    "module": "cart",
    "session": 7,
    "mc": [
      "Products › the bundle"
    ],
    "demo": "How the bundle appears in the bag.",
    "demoable": "live",
    "capabilities": [
      "cart.bundles"
    ],
    "sdkTasks": [
      "4.3"
    ],
    "cilTasks": [],
    "cilNote": "See D7."
  },
  {
    "id": "D39",
    "title": "Storefront backend: custom BFF, Commerce Integration Layer, or hybrid?",
    "module": "foundations",
    "session": 9,
    "mc": [
      "Commerce Integration Layer (enrolment, Project Settings)"
    ],
    "demo": "The same storefront on both backends, side by side on one project: a Merchant Center change shows in both.",
    "demoable": "live",
    "capabilities": [
      "project.info",
      "catalog.plp",
      "cart.summary"
    ],
    "sdkTasks": [
      "the SDK track"
    ],
    "cilTasks": [
      "the CIL track"
    ],
    "cilNote": ""
  },
  {
    "id": "D40",
    "title": "Migrating a live project from Classic to Modular",
    "module": "catalog",
    "session": 9,
    "mc": [
      "Project settings (Classic → InMigration → Modular)"
    ],
    "demo": "Explain-only: the staged path (per-request header → InMigration → Modular → cleanup, the point of no return).",
    "demoable": "explain",
    "capabilities": [],
    "sdkTasks": [],
    "cilTasks": [],
    "cilNote": ""
  },
  {
    "id": "D41",
    "title": "Bulk data in: Import API, direct API writes, or a Connect job?",
    "module": "connector",
    "session": 8,
    "mc": [
      "(Import API · Connect)"
    ],
    "demo": "Run the CSV price feed: the new price appears in both storefronts.",
    "demoable": "live",
    "capabilities": [
      "ext.import",
      "pricing.resolve"
    ],
    "sdkTasks": [
      "7.8",
      "S8 price-feed connector"
    ],
    "cilTasks": [
      "7.5",
      "S8 price-feed connector"
    ],
    "cilNote": ""
  },
  {
    "id": "D42",
    "title": "Where does a synchronous business rule live?",
    "module": "connector",
    "session": 8,
    "mc": [
      "Connect › connectors · Commerce Integration Layer › extension bundle"
    ],
    "demo": "One cart rule, three homes: an API Extension behind your backend, a Connect service, or a CIL Managed API Extension.",
    "demoable": "live",
    "capabilities": [
      "ext.cartRules"
    ],
    "sdkTasks": [
      "7.6",
      "7.7",
      "S8"
    ],
    "cilTasks": [
      "7.3",
      "S8"
    ],
    "cilNote": ""
  },
  {
    "id": "D43",
    "title": "Accept, refine or reject an AI-proposed data model?",
    "module": "catalog",
    "session": 2,
    "mc": [
      "Settings › Product types and attributes › Smart Data Modeler (traditional or agentic channels)"
    ],
    "demo": "Upload the Outdoor Living PIM sample: SDM proposes product types with Product- vs Variant-level attributes (agentic channels also transforms the catalogue for OpenAI / Stripe feeds); the architect refines before import.",
    "demoable": "explain",
    "capabilities": [
      "catalog.pdp"
    ],
    "sdkTasks": [],
    "cilTasks": [],
    "cilNote": ""
  },
  {
    "id": "D44",
    "title": "Extending the Commerce Integration Layer: which mechanism, and what may an extension be trusted with?",
    "module": "foundations",
    "session": 9,
    "mc": [
      "Commerce Integration Layer › extension bundle · config · allowlist"
    ],
    "demo": "Once the bundle is pushed, the gift message and white-glove notice go live on the CIL storefront.",
    "demoable": "live",
    "capabilities": [
      "ext.customFields",
      "ext.cartRules"
    ],
    "sdkTasks": [],
    "cilTasks": [
      "7.1",
      "7.2",
      "7.3",
      "7.4",
      "7.6"
    ],
    "cilNote": ""
  },
  {
    "id": "D45",
    "title": "External tax when the storefront runs on CIL",
    "module": "cart",
    "session": 9,
    "mc": [
      "Settings › Tax categories · Commerce Integration Layer › extension bundle"
    ],
    "demo": "Explain-only: a data-triggered Managed API Extension vs Platform tax vs a tax connector.",
    "demoable": "explain",
    "capabilities": [
      "cart.summary"
    ],
    "sdkTasks": [],
    "cilTasks": [],
    "cilNote": ""
  }
];
