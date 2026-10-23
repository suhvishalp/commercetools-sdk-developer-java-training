'use client';

/**
 * Two tiny external stores (for `useSyncExternalStore`) behind the shopper's store choice:
 *
 *  - `chosenStoreStore` — the store key the shopper picked, kept in localStorage (per-viewer convenience,
 *    so a reload keeps "their" store). The server snapshot is null, so the first paint matches the server
 *    and the stored key is applied right after hydration. A key that is no longer in the store list is
 *    simply ignored by the preferences (they fall back to the default store).
 *  - `storeConflictStore` — a pending "your basket was started in another store" decision, raised by the
 *    store picker (basket has items, different store) or by any cart creation the BFF refused with 409.
 *    `StoreSwitchDialog` renders it.
 */
const STORAGE_KEY = 'lhc.storeKey';

let memoryKey: string | null = null;
const keyListeners = new Set<() => void>();
const notifyKey = () => keyListeners.forEach((l) => l());

export const chosenStoreStore = {
  subscribe(listener: () => void): () => void {
    keyListeners.add(listener);
    return () => keyListeners.delete(listener);
  },
  getSnapshot(): string | null {
    try {
      return window.localStorage.getItem(STORAGE_KEY) ?? memoryKey;
    } catch {
      return memoryKey;
    }
  },
  getServerSnapshot(): string | null {
    return null;
  },
  set(key: string | null): void {
    memoryKey = key;
    try {
      if (key) window.localStorage.setItem(STORAGE_KEY, key);
      else window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Storage unavailable (private mode, quota) — the in-memory copy still carries the session.
    }
    notifyKey();
  },
};

/** The store the shopper wants to move to; the basket's current store is read from the live cart. */
export interface StoreConflict {
  toKey: string;
}

let pending: StoreConflict | null = null;
const conflictListeners = new Set<() => void>();
const notifyConflict = () => conflictListeners.forEach((l) => l());

export const storeConflictStore = {
  subscribe(listener: () => void): () => void {
    conflictListeners.add(listener);
    return () => conflictListeners.delete(listener);
  },
  getSnapshot(): StoreConflict | null {
    return pending;
  },
  getServerSnapshot(): StoreConflict | null {
    return null;
  },
  open(toKey: string): void {
    pending = { toKey };
    notifyConflict();
  },
  close(): void {
    pending = null;
    notifyConflict();
  },
};
