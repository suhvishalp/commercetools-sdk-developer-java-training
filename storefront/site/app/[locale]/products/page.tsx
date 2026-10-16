import { Suspense } from 'react';
import { PlpHeader } from '@/components/product/PlpHeader';
import { CategoryNav } from '@/components/product/CategoryNav';
import { PlpSwitch } from '@/components/product/PlpSwitch';

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <Suspense fallback={null}>
        <PlpHeader />
      </Suspense>
      <CategoryNav />
      {/* One PLP, capability-switched: Session-2 grid until search.plpV2 unlocks, then the composed
          store-scoped search PLP. See PlpSwitch. */}
      <PlpSwitch />
    </div>
  );
}
