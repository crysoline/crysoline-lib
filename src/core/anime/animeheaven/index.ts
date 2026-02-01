import { AnimeFetch } from '../../../helpers';
import type { AnimeHeavenInfoMeta } from './types';

/**
 * Creates an AnimeHeaven API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = AnimeHeaven(process.env.API_KEY);
 * const results = await client.search("demon slayer");
 * const info = await client.info(results[0].id);
 * ```
 */
export const AnimeHeaven = (apiKey: string) =>
  AnimeFetch<unknown, AnimeHeavenInfoMeta>({
    provider: 'animeheaven',
    apiKey,
  });

export * from './types';
