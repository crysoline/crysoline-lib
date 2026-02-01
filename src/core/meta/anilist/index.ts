import { MetaFetch } from '../../../helpers';
import type { AnilistInfoMeta, AnilistSearchMeta } from './types';

/**
 * Creates an Anilist API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info
 *
 * @example
 * ```ts
 * const client = Anilist(process.env.API_KEY);
 * const results = await client.search("alya");
 * const info = await client.info(results[0].id);
 * ```
 */
export const Anilist = (apiKey: string) =>
  MetaFetch<AnilistSearchMeta, AnilistInfoMeta>({
    provider: 'anilist',
    apiKey,
  });

export * from './types';
