import { AnimeFetch } from '../../../helpers';
import type { AnicoreInfoMeta } from './types';

/**
 * Creates a Anicore API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = Anicore(process.env.API_KEY);
 * const results = await client.search("naruto");
 * const info = await client.info(results[0].id);
 * ```
 */
export const Anicore = (apiKey: string) =>
  AnimeFetch<unknown, AnicoreInfoMeta>({
    provider: 'anicore',
    apiKey,
  });
