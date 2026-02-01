import { AnimeFetch } from '../../../helpers';
import type { AnimeKaiEpisodeMeta, AnimeKaiInfoMeta, AnimeKaiSearchMeta } from './types';

/**
 * Creates an AnimeKai API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = AnimeKai(process.env.API_KEY);
 * const results = await client.search("attack on titan");
 * const episodes = await client.episodes(results[0].id);
 * ```
 */
export const AnimeKai = (apiKey: string) =>
  AnimeFetch<AnimeKaiSearchMeta, AnimeKaiInfoMeta, AnimeKaiEpisodeMeta>({
    provider: 'animekai',
    apiKey,
  });

export * from './types';
