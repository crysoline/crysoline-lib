import { AnimeFetch } from '../../../helpers';
import type { LunarEpisodeMeta, LunarInfoMeta, LunarSearchMeta, LunarSourcesMeta } from './types';

/**
 * Creates a LunarAnime API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = LunarAnime(process.env.API_KEY);
 * const results = await client.search("bleach");
 * const info = await client.info(results[0].id);
 * const episodes = await client.episodes(results[0].id);
 * ```
 */
export const LunarAnime = (apiKey: string) =>
  AnimeFetch<LunarSearchMeta, LunarInfoMeta, LunarEpisodeMeta, LunarSourcesMeta>({
    provider: 'lunaranime',
    apiKey,
  });

export * from './types';
