import { AnimeFetch } from '../../../helpers';
import type { AniZoneEpisodeMeta, AniZoneInfoMeta, AniZoneSearchMeta } from './types';

/**
 * Creates an AniZone API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = AniZone(process.env.API_KEY);
 * const results = await client.search("spy x family");
 * const episodes = await client.episodes(results[0].id);
 * ```
 */
export const AniZone = (apiKey: string) =>
  AnimeFetch<AniZoneSearchMeta, AniZoneInfoMeta, AniZoneEpisodeMeta>({
    provider: 'anizone',
    apiKey,
  });

export * from './types';
