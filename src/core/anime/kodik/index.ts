import { AnimeFetch } from '../../../helpers';
import type { KodikInfoMeta, KodikSearchMeta } from './types';

/**
 * Creates an Kodik API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources, servers
 *
 * @example
 * ```ts
 * const client = Kodik(process.env.API_KEY);
 * const results = await client.search("spy x family");
 * const info = await client.info(results[0].id);
 * const episodes = await client.episodes(info.metadata.translations[0].id);
 * ```
 */
export const Kodik = (apiKey: string) =>
  AnimeFetch<KodikSearchMeta, KodikInfoMeta>({
    provider: 'kodik',
    apiKey,
  });

export * from './types';
