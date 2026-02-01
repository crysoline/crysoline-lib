import { AnimeFetch } from '../../../helpers';
import type {
  KickAssAnimeEpisodeMeta,
  KickAssAnimeInfoMeta,
  KickAssAnimeSearchMeta,
  KickAssAnimeSourceMeta,
} from './types';

/**
 * Creates an KickAssAnime API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = KickAssAnime(process.env.API_KEY);
 * const results = await client.search("spy x family");
 * const episodes = await client.episodes(results[0].id);
 * ```
 */
export const KickAssAnime = (apiKey: string) =>
  AnimeFetch<
    KickAssAnimeSearchMeta,
    KickAssAnimeInfoMeta,
    KickAssAnimeEpisodeMeta,
    KickAssAnimeSourceMeta
  >({
    provider: 'kickassanime',
    apiKey,
  });

export * from './types';
