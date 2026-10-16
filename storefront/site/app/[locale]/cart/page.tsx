import { CartView } from '@/components/cart/CartView';

export default function CartPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="eyebrow">Your bag</p>
        <h1 className="mt-1 text-[40px]">Bag</h1>
      </div>
      <CartView />
    </div>
  );
}
