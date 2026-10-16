import { Suspense } from 'react';
import { ConfirmationView } from '@/components/checkout/ConfirmationView';

export default function ConfirmationPage() {
  return (
    <Suspense fallback={null}>
      <ConfirmationView />
    </Suspense>
  );
}
