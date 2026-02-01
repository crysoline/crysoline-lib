import { AnimeFetch } from '../../../helpers';
import type { AnimeOnsenEpisodeMeta, AnimeOnsenInfoMeta } from './types';

/**
 * Creates an AnimeOnsen API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = AnimeOnsen(process.env.API_KEY);
 * const results = await client.search("my hero academia");
 * const episodes = await client.episodes(results[0].id);
 * ```
 */
export const AnimeOnsen = (apiKey: string) =>
  AnimeFetch<unknown, AnimeOnsenInfoMeta, AnimeOnsenEpisodeMeta>({
    provider: 'animeonsen',
    apiKey,
  });

export * from './types';
