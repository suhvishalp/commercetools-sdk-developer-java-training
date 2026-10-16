import { CheckoutView } from '@/components/checkout/CheckoutView';

export default function CheckoutPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="eyebrow">Secure checkout</p>
        <h1 className="mt-1 text-[40px]">Checkout</h1>
      </div>
      <CheckoutView />
    </div>
  );
}
