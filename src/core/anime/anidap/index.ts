import { AnimeFetch } from '../../../helpers';
import type { AnilistInfoMeta, AnilistSearchMeta } from '../../meta';

/**
 * Creates a Anidap API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = Anidap(process.env.API_KEY);
 * const results = await client.search("naruto");
 * const info = await client.info(results[0].id);
 * ```
 */
export const Anidap = (apiKey: string) =>
  AnimeFetch<AnilistSearchMeta, AnilistInfoMeta>({
    provider: 'anidap',
    apiKey,
  });
