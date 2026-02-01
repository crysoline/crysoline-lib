import { AnimeFetch } from '../../../helpers';
import type {
  HiAnimeEpisodeMeta,
  HiAnimeInfoMeta,
  HiAnimeSearchMeta,
  HiAnimeServerMeta,
} from './types';

/**
 * Creates an HiAnime API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources, servers
 *
 * @example
 * ```ts
 * const client = HiAnime(process.env.API_KEY);
 * const results = await client.search("spy x family");
 * const episodes = await client.episodes(results[0].id);
 * ```
 */
export const HiAnime = (apiKey: string) =>
  AnimeFetch<
    HiAnimeSearchMeta,
    HiAnimeInfoMeta,
    HiAnimeEpisodeMeta,
    unknown,
    HiAnimeServerMeta,
    {
      search: true;
      info: true;
      episodes: true;
      sources: true;
      servers: true;
    }
  >({
    provider: 'hianime',
    apiKey,
  });

export * from './types';
