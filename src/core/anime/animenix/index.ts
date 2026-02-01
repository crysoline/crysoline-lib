import { AnimeFetch } from '../../../helpers';
import type { AnimeNixEpisodeMeta, AnimeNixSearchMeta } from './types';

/**
 * Creates a AnimeNix API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources, servers
 *
 * @example
 * ```ts
 * const client = AnimeNix(process.env.API_KEY);
 * const results = await client.search("naruto");
 * const info = await client.info(results[0].id);
 * ```
 */
export const AnimeNix = (apiKey: string) =>
  AnimeFetch<AnimeNixSearchMeta, unknown, AnimeNixEpisodeMeta>({
    provider: 'animenix',
    apiKey,
  });

export * from './types';
