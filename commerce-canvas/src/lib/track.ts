/**
 * Which backend Canvas is talking to. Canvas is track-agnostic: the BFF track (Java / NestJS) and the
 * Commerce Integration Layer track serve the same training API. A backend MAY describe itself at
 * GET /api/training/meta; without it (the BFFs today) Canvas keeps its original BFF wording, so nothing
 * changes for the BFF course.
 */
export interface TrackMeta {
  track: 'bff' | 'cil';
  /** "BFF" / "CIL layer" — used in "BFF online", "Calling BFF…", "Start your BFF". */
  backendName: string;
  /** Where it listens, e.g. ":8081". */
  backendLocation: string;
  /** "your BFF" / "the CIL layer" — the Try It target. */
  tryItTarget: string;
  /** Shown when a task is not implemented yet. */
  implementHint: string;
  /** The generic Tier-1 framing when a task has no description. */
  t1Framing: string;
  startCommands: string[];
  /** Optional per-track session codenames; the built-in list is used when absent. */
  sessionTitles?: Record<string, { codename: string; subtitle: string }>;
}

export const BFF_TRACK: TrackMeta = {
  track: 'bff',
  backendName: 'BFF',
  backendLocation: ':8081',
  tryItTarget: 'your BFF',
  implementHint: 'Implement the one infrastructure adapter method for this task',
  t1Framing:
    'Implement exactly one commercetools SDK call in the repository, then validate it and explain it back. AI accelerates the plumbing; you verify it.',
  startCommands: ['cd bff-java && mvn spring-boot:run -pl app', 'cd bff-ts && npm run start'],
};

let current: TrackMeta = BFF_TRACK;

/** The active track (read during render; App re-renders when it changes). */
export function track(): TrackMeta {
  return current;
}

export function setTrack(meta: Partial<TrackMeta> | null | undefined): TrackMeta {
  current = meta && meta.track ? { ...BFF_TRACK, ...meta } : BFF_TRACK;
  return current;
}
