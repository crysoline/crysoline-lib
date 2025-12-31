import { MetaFetch } from '../../helpers/fetch';
import type { MInfoMeta, MSearchMeta } from './myanimelist';
import type { MMLInfoMeta, MMSearchMeta } from './mymangalist';

/**
 * Creates a MyAnimeList API client for anime metadata.
 *
 * **Provides comprehensive anime information and statistics from MyAnimeList.**
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info
 *
 * @example
 * ```ts
 * const mal = MyAnimeList(process.env.API_KEY);
 *
 * // Search for anime
 * const results = await mal.search("steins gate");
 *
 * // Get detailed info with MAL ratings, stats, and metadata
 * const info = await mal.info(results[0].id);
 * console.log(info.score, info.rank, info.popularity);
 * ```
 */
const MyAnimeList = (apiKey: string) =>
  MetaFetch<MSearchMeta, MInfoMeta>({
    provider: 'myanimelist',
    apiKey,
  });

/**
 * Creates a MyMangaList API client for manga metadata.
 *
 * **Provides comprehensive manga information and statistics from MyAnimeList.**
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info
 *
 * @example
 * ```ts
 * const mml = MyMangaList(process.env.API_KEY);
 *
 * // Search for manga
 * const results = await mml.search("berserk");
 *
 * // Get detailed info with MAL ratings, stats, and metadata
 * const info = await mml.info(results[0].id);
 * console.log(info.score, info.rank, info.members);
 * ```
 */
const MyMangaList = (apiKey: string) =>
  MetaFetch<MMSearchMeta, MMLInfoMeta>({
    provider: 'mymangalist',
    apiKey,
  });

const Meta = {
  MyAnimeList,
  MyMangaList,
};

export { Meta };
