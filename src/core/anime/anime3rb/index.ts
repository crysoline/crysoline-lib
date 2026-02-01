import { AnimeFetch } from '../../../helpers';
import type { Anime3RBInfoMeta, Anime3RBSourceMeta } from './types';

/**
 * Creates a Anime3rb API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = Anime3rb(process.env.API_KEY);
 * const results = await client.search("naruto");
 * const info = await client.info(results[0].id);
 * ```
 */
export const Anime3rb = (apiKey: string) =>
  AnimeFetch<unknown, Anime3RBInfoMeta, unknown, Anime3RBSourceMeta>({
    provider: 'anime3rb',
    apiKey,
  });

export * from './types';
