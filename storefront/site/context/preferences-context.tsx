'use client';

import { createContext, useContext, useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { useLocale } from 'next-intl';
import useSWR from 'swr';
import { routing, usePathname, useRouter } from '@/i18n/routing';
import { bffGet } from '@/lib/bff/client';
import { useCapability } from '@/context/capabilities-context';
import { chosenStoreStore } from '@/lib/store-choice';
import { COUNTRY_CONFIG, CURRENCY_BY_COUNTRY, COUNTRY_BY_CURRENCY } from '@/lib/utils';

interface ProjectView {
  key: string;
  name: string;
  currencies: string[];
  languages: string[];
  countries: string[];
}

/** Minimal store shape the switcher needs. */
export interface StoreLite {
  key: string;
  name: string;
  languages: string[];
  countries: string[];
  /** The store's distribution-channel keys — the first is the default price channel. */
  channelKeys?: string[];
}

/** The store every shopper lands in when they have not picked one (Task 1.2's payoff), if it exists. */
export const DEFAULT_STORE_KEY = 'b2c-retail-store';

interface PreferencesValue {
  /** Active store name (once one is selected), else the project name / null. */
  storeName: string | null;
  /** Active store KEY (once one is selected), else null. S3 discovery calls pass this as `?store=`. */
  storeKey: string | null;
  /** The stores the shopper can choose from (empty until distribution.stores is unlocked). */
  stores: StoreLite[];
  /** Available language options (locales) — the active store's, else the project's. */
  languages: string[];
  /** Available currency options — the project's. */
  currencies: string[];
  /** Available country options — the active store's, else the project's (drives price selection). */
  countries: string[];
  /** Distribution-channel keys the active store exposes (empty until a store with channels is chosen). */
  channels: string[];
  /** Active language (the next-intl locale), currency, country, and price channel (key, or null). */
  language: string;
  currency: string;
  /** Country for price selection — independently selectable (a pricing-demo axis), defaulting to the
   *  active currency's country so the initial (currency, country) pair is consistent. */
  country: string;
  /** Active distribution channel key for price selection — the store's selected channel, or null. */
  channel: string | null;
  setLanguage: (locale: string) => void;
  setCurrency: (currency: string) => void;
  setCountry: (country: string) => void;
  setChannel: (channelKey: string | null) => void;
  /** Switch to a store: sets its default language + currency + country and its channel options. */
  selectStore: (store: StoreLite) => void;
}

const PreferencesContext = createContext<PreferencesValue | null>(null);

const FALLBACK_LANGS = Object.keys(COUNTRY_CONFIG);
const FALLBACK_CURRENCIES = [...new Set(Object.values(COUNTRY_CONFIG).map((c) => c.currency))];
const FALLBACK_COUNTRIES = [...new Set(Object.values(COUNTRY_CONFIG).map((c) => c.country))];

function isSupportedLocale(locale: string): boolean {
  return (routing.locales as readonly string[]).includes(locale);
}

/** A store's default currency (from its first country) and country — what a basket in that store starts with. */
export function storeDefaults(store: StoreLite, currencies: string[]): { currency: string; country: string | null } {
  const country = store.countries?.[0] ?? null;
  const byCountry = country ? CURRENCY_BY_COUNTRY[country] : undefined;
  return { currency: byCountry && currencies.includes(byCountry) ? byCountry : currencies[0], country };
}

/** The store to shop in: the chosen one if it is still on the list, else the default store, else the first. */
function resolveStore(stores: StoreLite[], chosenKey: string | null): StoreLite | null {
  if (stores.length === 0) return null;
  return stores.find((s) => s.key === chosenKey) ?? stores.find((s) => s.key === DEFAULT_STORE_KEY) ?? stores[0];
}

/**
 * Holds the shopper's active store, language + currency. Language is the next-intl locale (drives routing
 * and localized content); currency is a display/selection preference. The store comes from the store list
 * (once Task 1.2 is live): the shopper's remembered choice, else the default store — so every shopper is
 * "in" a store from the first page. Selecting a store sets its defaults (language, currency, country, price
 * channel); the shopper can then change each one freely.
 */
export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const { data } = useSWR('project', (p) => bffGet<ProjectView>(p));
  const project = data?.ok ? data.data : null;

  const projectLangs = project?.languages?.length ? project.languages : FALLBACK_LANGS;
  const currencies = project?.currencies?.length ? project.currencies : FALLBACK_CURRENCIES;
  const projectCountries = project?.countries?.length ? project.countries : FALLBACK_COUNTRIES;

  // The store list — only fetched once the task behind it is implemented.
  const { unlocked: storesUnlocked } = useCapability('distribution.stores');
  const { data: storesData } = useSWR(storesUnlocked ? 'stores' : null, (p) => bffGet<StoreLite[]>(p));
  const stores = useMemo(() => (storesData?.ok ? storesData.data ?? [] : []), [storesData]);

  // The shopper's remembered choice (localStorage) → the active store, falling back to the default.
  const chosenKey = useSyncExternalStore(chosenStoreStore.subscribe, chosenStoreStore.getSnapshot, chosenStoreStore.getServerSnapshot);
  const activeStore = useMemo(() => resolveStore(stores, chosenKey), [stores, chosenKey]);

  const [currency, setCurrencyState] = useState<string>('');
  const [country, setCountryState] = useState<string>('');
  const [channel, setChannelState] = useState<string | null>(null);

  // When the active store changes (first resolution, a reload, a pick), apply its defaults once — the
  // "store the previous value in state and update conditionally" pattern, so the shopper can still change
  // currency / country / channel afterwards without the store overriding them on every render.
  const [appliedStoreKey, setAppliedStoreKey] = useState<string | null>(null);
  if (activeStore && activeStore.key !== appliedStoreKey) {
    setAppliedStoreKey(activeStore.key);
    const defaults = storeDefaults(activeStore, currencies);
    setCurrencyState(defaults.currency);
    if (defaults.country) setCountryState(defaults.country);
    setChannelState(activeStore.channelKeys?.[0] ?? null);
  }

  const activeCurrency = currency || currencies[0] || 'EUR';

  // Default the currency once the project's currencies are known (prefer the one for the active locale) —
  // set during render, conditionally, so no effect re-renders the tree a second time.
  if (!currency && currencies.length > 0) {
    const localeCurrency = COUNTRY_CONFIG[locale]?.currency;
    setCurrencyState(localeCurrency && currencies.includes(localeCurrency) ? localeCurrency : currencies[0]);
  }

  // Default the country independently (pricing-demo axis), seeded from the active currency's country
  // so the initial (currency, country) pair is consistent; the shopper can then change it freely.
  const storeCountries = activeStore?.countries?.length ? activeStore.countries : null;
  const countries = storeCountries ?? projectCountries;
  if (!country && countries.length > 0) {
    const byCurrency = COUNTRY_BY_CURRENCY[activeCurrency];
    setCountryState(byCurrency && countries.includes(byCurrency) ? byCurrency : countries[0]);
  }

  const storeLangs = useMemo(() => {
    const langs = (activeStore?.languages ?? []).filter(isSupportedLocale);
    return langs.length ? langs : null;
  }, [activeStore]);
  const languages = useMemo(() => (storeLangs ?? projectLangs).filter(isSupportedLocale), [storeLangs, projectLangs]);

  // A store resolved without a pick (default / remembered) keeps the shopper's locale — unless the store
  // does not offer it, in which case the shop moves to the store's first language.
  useEffect(() => {
    if (storeLangs && !storeLangs.includes(locale)) {
      router.replace(pathname, { locale: storeLangs[0] });
    }
  }, [storeLangs, locale, pathname, router]);

  const setLanguage = (l: string) => {
    if (isSupportedLocale(l) && l !== locale) {
      router.replace(pathname, { locale: l });
    }
  };

  const value: PreferencesValue = {
    storeName: activeStore?.name ?? project?.name ?? null,
    storeKey: activeStore?.key ?? null,
    stores,
    languages: languages.length ? languages : FALLBACK_LANGS,
    currencies,
    countries,
    channels: activeStore?.channelKeys ?? [],
    language: locale,
    currency: activeCurrency,
    country: country || countries[0] || '',
    channel,
    setLanguage,
    setCurrency: setCurrencyState,
    setCountry: setCountryState,
    setChannel: setChannelState,
    selectStore: (store) => {
      // Remember the pick (localStorage); the defaults above follow once the active store re-resolves.
      chosenStoreStore.set(store.key);
      const langs = (store.languages ?? []).filter(isSupportedLocale);
      if (langs.length) setLanguage(langs[0]); // store's default language
    },
  };

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences(): PreferencesValue {
  const ctx = useContext(PreferencesContext);
  if (!ctx) throw new Error('usePreferences must be used within PreferencesProvider');
  return ctx;
}
