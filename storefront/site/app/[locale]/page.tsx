import { Hero } from '@/components/product/Hero';
import { CategoryCards } from '@/components/product/CategoryCards';
import { PlpSwitch } from '@/components/product/PlpSwitch';
import { Editorial, MembersBanner, Newsletter, SectionHeader, Testimonials, UspStrip } from '@/components/product/HomeSections';

export default function HomePage() {
  return (
    <div className="space-y-14">
      <div className="space-y-6">
        <Hero />
        <UspStrip />
      </div>

      <CategoryCards />

      <section>
        <SectionHeader title="Featured" lead="What people keep coming back for." href="/products" cta="Shop all" />
        {/* Catalogue grid (catalog.plp) until search.plpV2 unlocks, then the store-scoped discovery
            PLP — flips live via the capabilities poll, no storefront change or reload needed. */}
        <PlpSwitch compact />
      </section>

      <MembersBanner />

      <Editorial />

      <Testimonials />

      <Newsletter />

    </div>
  );
}
