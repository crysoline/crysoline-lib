import { AnimeFetch } from '../../../helpers';
import type { AnimeNexusEpisodeMeta, AnimeNexusInfoMeta, AnimeNexusSearchMeta } from './types';

/**
 * Creates an AnimeNexus API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = AnimeNexus(process.env.API_KEY);
 * const results = await client.search("jujutsu kaisen");
 * const info = await client.info(results[0].id);
 * ```
 */
export const AnimeNexus = (apiKey: string) =>
  AnimeFetch<AnimeNexusSearchMeta, AnimeNexusInfoMeta, AnimeNexusEpisodeMeta>({
    provider: 'animenexus',
    apiKey,
  });

export * from './types';
