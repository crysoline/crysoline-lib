import { AnimeFetch } from '../../../helpers';
import type { PaheEpisodeMeta, PaheInfoMeta, PaheSearchMeta } from './types';

/**
 * Creates an AnimePahe API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = AnimePahe(process.env.API_KEY);
 * const results = await client.search("chainsaw man");
 * const info = await client.info(results[0].id);
 * ```
 */
export const AnimePahe = (apiKey: string) =>
  AnimeFetch<PaheSearchMeta, PaheInfoMeta, PaheEpisodeMeta>({
    provider: 'animepahe',
    apiKey,
  });

export * from './types';
