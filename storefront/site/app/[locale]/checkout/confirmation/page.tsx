import { Suspense } from 'react';
import { ConfirmationView } from '@/components/checkout/ConfirmationView';

export default function ConfirmationPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Order confirmation</h1>
      <Suspense fallback={null}>
        <ConfirmationView />
      </Suspense>
    </div>
  );
}
