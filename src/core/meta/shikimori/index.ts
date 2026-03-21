import { MetaFetch } from '../../../helpers';
import type { ShikimoriInfoMeta, ShikimoriSearchMeta } from './types';

/**
 * Creates an Shikimori API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info
 *
 * @example
 * ```ts
 * const client = Shikimori(process.env.API_KEY);
 * const results = await client.search("alya");
 * const info = await client.info(results[0].id);
 * ```
 */
export const Shikimori = (apiKey: string) =>
  MetaFetch<ShikimoriSearchMeta, ShikimoriInfoMeta>({
    provider: 'shikimori',
    apiKey,
  });

export * from './types';
