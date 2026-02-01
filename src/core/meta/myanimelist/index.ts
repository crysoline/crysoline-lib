import { MetaFetch } from '../../../helpers';
import type { MyAnimeListInfoMeta, MyAnimeListSearchMeta } from './types';

/**
 * Creates an MyAnimeList API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info
 *
 * @example
 * ```ts
 * const client = MyAnimeList(process.env.API_KEY);
 * const results = await client.search("alya");
 * const info = await client.info(results[0].id);
 * ```
 */
export const MyAnimeList = (apiKey: string) =>
  MetaFetch<MyAnimeListSearchMeta, MyAnimeListInfoMeta>({
    provider: 'myanimelist',
    apiKey,
  });

export * from './types';
