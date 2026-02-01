import { HentaiFetch } from '../../../helpers';
import type { HStreamSearchMeta } from './types';

/**
 * Creates an HStream API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = HStream(process.env.API_KEY);
 * const results = await client.search("query");
 * const info = await client.info(results[0].id);
 * ```
 */
export const HStream = (apiKey: string) =>
  HentaiFetch<HStreamSearchMeta>({
    provider: 'hstream',
    apiKey,
  });

export * from './types';
