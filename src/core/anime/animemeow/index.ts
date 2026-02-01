import { AnimeFetch } from '../../../helpers';
import type { AnimeMeowSearchMeta } from './types';

/**
 * Creates a AnimeMeow API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = AnimeMeow(process.env.API_KEY);
 * const results = await client.search("naruto");
 * const info = await client.info(results[0].id);
 * ```
 */
export const AnimeMeow = (apiKey: string) =>
  AnimeFetch<AnimeMeowSearchMeta>({
    provider: 'animemeow',
    apiKey,
  });

export * from './types';
