import { MetaFetch } from "../../helpers/fetch";
import type { AnilistInfoMeta, AnilistSearchMeta } from "./anilist";
import type { MInfoMeta, MSearchMeta } from "./myanimelist";
import type { MMLInfoMeta, MMSearchMeta } from "./mymangalist";

/**
 * Creates an AniList API client for anime/manga metadata.
 *
 * **Provides comprehensive information from the AniList database.**
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info
 *
 * @example
 * ```ts
 * const anilist = Anilist(process.env.API_KEY);
 *
 * // Search for anime/manga
 * const results = await anilist.search("cowboy bebop");
 *
 * // Get detailed info with AniList metadata
 * const info = await anilist.info(results[0].id);
 * console.log(info.title, info.description);
 * ```
 */
const Anilist = (apiKey: string) =>
  MetaFetch<AnilistSearchMeta, AnilistInfoMeta>({
    provider: "anilist",
    apiKey,
  });

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
    provider: "myanimelist",
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
    provider: "mymangalist",
    apiKey,
  });

/**
 * Collection of metadata provider clients for aggregating anime/manga information.
 *
 * These providers fetch metadata, ratings, and statistics from major
 * anime/manga databases like MyAnimeList and AniList.
 *
 * @example
 * ```ts
 * import { Meta } from "crysoline";
 *
 * const mal = Meta.MyAnimeList(process.env.API_KEY);
 * const results = await mal.search("fullmetal alchemist");
 * const info = await mal.info(results[0].id);
 * console.log(`Score: ${info.score}, Rank: #${info.rank}`);
 * ```
 */
const Meta = {
  Anilist,
  MyAnimeList,
  MyMangaList,
};

export { Meta };
