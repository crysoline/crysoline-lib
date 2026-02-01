import { AnimeFetch } from '../../../helpers';
import type { AnimeGGEpisodeMeta, AnimeGGInfoMeta, AnimeGGSearchMeta } from './types';

/**
 * Creates a AnimeGG API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = AnimeGG(process.env.API_KEY);
 * const results = await client.search("naruto");
 * const info = await client.info(results[0].id);
 * ```
 */
export const AnimeGG = (apiKey: string) =>
  AnimeFetch<AnimeGGSearchMeta, AnimeGGInfoMeta, AnimeGGEpisodeMeta>({
    provider: 'animegg',
    apiKey,
  });

export * from './types';
