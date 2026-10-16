import { CategoryView, ProductView } from './types';

/**
 * Sample content shown under a LOCKED feature so the storefront always reads like a real shop
 * (dimmed, with an Unlock button). Once the feature unlocks, live BFF data replaces this. The images
 * are the project's own catalogue photos (commercetools B2C lifestyle sample data), so the locked
 * state looks like the shop it will become.
 */
const BUCKET = 'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle';
const img = (file: string) => `${BUCKET}/${file}`;
const usd = (centAmount: number) => ({ currencyCode: 'USD', centAmount });

/** Named catalogue photos used by merchandising blocks (hero tiles, editorial, category cards). */
export const IMG = {
  charlie: img('Charlie_Armchair-1.1.jpeg'),
  leah: img('Leah_Armchair-1.1.jpeg'),
  glam: img('Glam_Armchair-1.1.jpeg'),
  sofa: img('Nala_Two_Seater_Sofa-1.2.jpeg'),
  closet: img('Entryway_Closet-1.1.jpeg'),
  bookcase: img('Modern_Bookcase-1.1.jpeg'),
  candle: img('Vanilla_Candle-1.1.jpeg'),
  painting: img('Pink_Abstract_Painting-1.1.jpeg'),
  rug: img('Aria_Rug-1.1.jpeg'),
  pillow: img('Luxe_Pillow_Cover-1.1.jpeg'),
  bedsheet: img('Cotton_Silk_Bedsheet-1.1.jpeg'),
  plate: img('Green_Serving_Plate-1.1.jpeg'),
  teapot: img('Willow_Teapot-1.1.jpeg'),
  bowl: img('Sunnai_Glass_Bowl-1.1.jpeg'),
};

export const SAMPLE_CATEGORIES: CategoryView[] = [
  { key: 'furniture', name: 'Furniture', slug: 'furniture', children: [{ key: 'living-room-furniture', name: 'Living Room Furniture', slug: 'living-room-furniture' }, { key: 'bedroom-furniture', name: 'Bedroom Furniture', slug: 'bedroom-furniture' }] },
  { key: 'home-decor', name: 'Home Decor', slug: 'home-decor', children: [{ key: 'room-decor', name: 'Room Decor', slug: 'room-decor' }, { key: 'bedding', name: 'Bedding', slug: 'bedding' }] },
  { key: 'kitchen', name: 'Kitchen', slug: 'kitchen', children: [{ key: 'bar-and-glassware', name: 'Bar and Glassware', slug: 'bar-and-glassware' }, { key: 'dinnerware', name: 'Dinnerware', slug: 'serving-and-tableware' }] },
  { key: 'new-arrivals', name: 'New Arrivals', slug: 'new-arrivals' },
  { key: 'bundles', name: 'Bundles', slug: 'bundles' },
];

/** A catalogue photo for a category card — by key where we know one, else by position. */
const CATEGORY_IMAGES: Record<string, string> = {
  furniture: IMG.leah,
  'living-room-furniture': IMG.sofa,
  'bedroom-furniture': IMG.closet,
  'home-decor': IMG.painting,
  'room-decor': IMG.rug,
  bedding: IMG.pillow,
  kitchen: IMG.plate,
  'bar-and-glassware': IMG.bowl,
  dinnerware: IMG.teapot,
  'new-arrivals': IMG.glam,
  bundles: IMG.bedsheet,
  living: IMG.sofa,
  bedroom: IMG.closet,
  lighting: IMG.candle,
  decor: IMG.painting,
};
const FALLBACK_IMAGES = [IMG.leah, IMG.closet, IMG.painting, IMG.pillow, IMG.plate, IMG.candle];
export function categoryImage(key: string, index = 0): string {
  return CATEGORY_IMAGES[key] ?? FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
}

export const SAMPLE_PRODUCTS: ProductView[] = [
  { key: 'charlie-armchair', name: 'Charlie Armchair', slug: 'charlie-armchair', price: usd(42415), originalPrice: usd(49900), imageUrl: IMG.charlie },
  { key: 'leah-armchair', name: 'Leah Armchair', slug: 'leah-armchair', price: usd(33915), originalPrice: usd(39900), imageUrl: IMG.leah },
  { key: 'green-serving-plate', name: 'Green Serving Plate', slug: 'green-serving-plate', price: usd(599), imageUrl: IMG.plate },
  { key: 'entryway-closet', name: 'Entryway Closet', slug: 'entryway-closet', price: usd(259900), imageUrl: IMG.closet },
  { key: 'vanilla-candle', name: 'Vanilla Candle', slug: 'vanilla-candle', price: usd(999), imageUrl: IMG.candle },
  { key: 'aria-rug', name: 'Aria Rug', slug: 'aria-rug', price: usd(12499), imageUrl: IMG.rug },
  { key: 'luxe-pillow-cover', name: 'Luxe Pillow Cover', slug: 'luxe-pillow-cover', price: usd(2599), imageUrl: IMG.pillow },
  { key: 'willow-teapot', name: 'Willow Teapot', slug: 'willow-teapot', price: usd(899), imageUrl: IMG.teapot },
];

export const SAMPLE_PRODUCT: ProductView = SAMPLE_PRODUCTS[0];
