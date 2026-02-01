import { HentaiFetch } from '../../../helpers';
import type { HAnimeInfoMeta, HAnimeSearchMeta } from './types';

/**
 * Creates an HAnime API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = HAnime(process.env.API_KEY);
 * const results = await client.search("query");
 * const info = await client.info(results[0].id);
 * const episodes = await client.episodes(results[0].id);
 * ```
 */
export const HAnime = (apiKey: string) =>
  HentaiFetch<HAnimeSearchMeta, HAnimeInfoMeta>({
    provider: 'hanime',
    apiKey,
  });

export * from './types';
