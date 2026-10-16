import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import { CapabilitiesProvider } from '@/context/capabilities-context';
import { UnlockDialogProvider } from '@/context/unlock-dialog';
import { PreferencesProvider } from '@/context/preferences-context';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FocusHighlighter } from '@/components/ui/FocusHighlighter';
import { ArchitectMode } from '@/components/architect/ArchitectMode';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Lifestyle & Home Corp',
  description: 'Considered furniture and home décor, thoughtfully made in small batches.',
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="flex min-h-screen flex-col">
        <NextIntlClientProvider messages={messages}>
          <CapabilitiesProvider>
            <UnlockDialogProvider>
              <PreferencesProvider>
                <Suspense fallback={null}>
                  <FocusHighlighter />
                </Suspense>
                <Header />
                <main className="mx-auto w-full max-w-7xl flex-1 px-6 pb-16 pt-6">{children}</main>
                <Footer />
                {/* Sphere Architect course: ?architect=1 explains the decisions behind the page. */}
                <Suspense fallback={null}>
                  <ArchitectMode />
                </Suspense>
              </PreferencesProvider>
            </UnlockDialogProvider>
          </CapabilitiesProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
