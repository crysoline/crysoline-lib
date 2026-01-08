/**
 * @fileoverview HTTP client utilities for Crysoline API providers.
 * Provides typed fetch functions for anime, manga, hentai, and metadata providers.
 * @module helpers/fetch
 */

import type {
  KodikEpisodeMeta,
  KodikTranslation,
} from "../core/extractors/kodik/types";
import type { Mapping } from "../core/mapper/types";
import type {
  Chapter,
  Episode,
  Info,
  Page,
  Search,
  Server,
  Source,
} from "../core/types";

/**
 * Generic fetch function type for API requests.
 * @template T - The expected response type
 * @param path - API endpoint path
 * @param params - Optional query parameters
 * @returns Promise resolving to the typed response
 */
type FetchFn = <T>(
  path: string,
  params?: Record<string, string | number | undefined>,
) => Promise<T>;

/**
 * Creates a configured fetch function with base URL and authentication.
 * @param baseUrl - Base API URL
 * @param apiKey - API key for authentication
 * @returns Configured fetch function
 * @internal
 */
const fetchFn = (baseUrl: string, apiKey: string): FetchFn => {
  return async <T>(
    path: string,
    params?: Record<string, string | number | undefined>,
  ): Promise<T> => {
    const url = new URL(baseUrl + path);

    if (params) {
      for (const [key, value] of Object.entries(params)) {
        if (value !== undefined && value !== null) {
          url.searchParams.set(key, String(value));
        }
      }
    }

    const res = await fetch(url.toString(), {
      headers: {
        "x-api-key": apiKey,
      },
    });

    if (!res.ok) {
      throw new Error(
        `Failed (${res.status}) (${res.statusText}) on ${url.pathname}`,
      );
    }

    return res.json() as Promise<T>;
  };
};

/**
 * Search route function type.
 * @template T - Custom metadata type for search results
 * @param q - Search query string
 * @returns Promise resolving to array of search results
 */
type SearchRoute<T = unknown> = (q: string) => Promise<Search<T>[]>;

/**
 * Info route function type.
 * @template T - Custom metadata type for info
 * @template E - Episode/Chapter type
 * @param id - Content identifier
 * @returns Promise resolving to detailed info
 */
type InfoRoute<T = unknown, E = unknown> = (
  id: string | number,
) => Promise<Info<T, E>>;

/**
 * Episodes route function type.
 * @template T - Custom metadata type for episodes
 * @param id - Content identifier
 * @returns Promise resolving to array of episodes
 */
type EpisodesRoute<T = unknown> = (
  id: string | number,
) => Promise<Episode<T>[]>;

/**
 * Sources route function type.
 * @template T - Custom metadata type for sources
 * @param params - Source request parameters
 * @returns Promise resolving to video sources
 */
type SourcesRoute<T> = (params: {
  id: string | number;
  episodeId: string | number;
  subType?: string;
  server?: string;
}) => Promise<Source<T>>;

/**
 * Servers route function type.
 * @template T - Custom metadata type for servers
 * @param params - Server request parameters
 * @returns Promise resolving to available servers
 */
type ServersRoute<T> = (params: {
  id: string | number;
  episodeId: string | number;
}) => Promise<Server<T>>;

/**
 * Chapters route function type.
 * @template T - Custom metadata type for chapters
 * @param id - Manga identifier
 * @returns Promise resolving to array of chapters
 */
type ChaptersRoute<T = unknown> = (
  id: string | number,
) => Promise<Chapter<T>[]>;

/**
 * Pages route function type.
 * @param params - Page request parameters
 * @returns Promise resolving to array of page URLs
 */
type PagesRoute = (params: {
  id: string | number;
  chapterId: string | number;
  lang?: string;
}) => Promise<Page[]>;

/**
 * Translations route function type for Kodik extractor.
 * @param id - Content identifier
 * @returns Promise resolving to available translations
 */
type TranslationsRoute = (id: string | number) => Promise<KodikTranslation[]>;

/**
 * Map route function type for ID mapping.
 * @param params - Mapping parameters
 * @returns Promise resolving to cross-provider ID mappings
 */
type MapRoute = (params: { id: number; provider: string }) => Promise<Mapping>;

/**
 * Map of all available route functions.
 * @template TSearchMeta - Search metadata type
 * @template TInfoMeta - Info metadata type
 * @template TEpisodeMeta - Episode metadata type
 * @template TSourceMeta - Source metadata type
 * @template TServerMeta - Server metadata type
 * @template TChapterMeta - Chapter metadata type
 * @internal
 */
type RouteMap<
  TSearchMeta = unknown,
  TInfoMeta = unknown,
  TEpisodeMeta = unknown,
  TSourceMeta = unknown,
  TServerMeta = unknown,
  TChapterMeta = unknown,
> = {
  search: SearchRoute<TSearchMeta>;
  info: InfoRoute<TInfoMeta, Episode<TEpisodeMeta>>;
  episodes: EpisodesRoute<TEpisodeMeta>;
  sources: SourcesRoute<TSourceMeta>;
  servers: ServersRoute<TServerMeta>;
  chapters: ChaptersRoute<TChapterMeta>;
  pages: PagesRoute;
  translations: TranslationsRoute;
  map: MapRoute;
};

/**
 * Route selection configuration.
 * @internal
 */
type SelectRoutes = {
  [K in keyof RouteMap]?: boolean;
};

/**
 * Builds a client with selected routes.
 * @template T - Selected routes configuration
 * @internal
 */
type BuildRoutes<
  T extends SelectRoutes,
  TSearchMeta = unknown,
  TInfoMeta = unknown,
  TEpisodeMeta = unknown,
  TSourceMeta = unknown,
  TServerMeta = unknown,
  TChapterMeta = unknown,
> = { name: string } & {
  [K in keyof T & keyof RouteMap as T[K] extends true ? K : never]: RouteMap<
    TSearchMeta,
    TInfoMeta,
    TEpisodeMeta,
    TSourceMeta,
    TServerMeta,
    TChapterMeta
  >[K];
};

/**
 * Builds an anime client with selected routes.
 * @internal
 */
type BuildAnimeRoutes<
  T extends SelectRoutes,
  TSearchMeta = unknown,
  TInfoMeta = unknown,
  TEpisodeMeta = unknown,
  TSourceMeta = unknown,
  TServerMeta = unknown,
> = BuildRoutes<
  T,
  TSearchMeta,
  TInfoMeta,
  TEpisodeMeta,
  TSourceMeta,
  TServerMeta
>;

/**
 * Builds a manga client with selected routes.
 * @internal
 */
type BuildMangaRoutes<
  T extends SelectRoutes,
  TSearchMeta = unknown,
  TInfoMeta = unknown,
  TChapterMeta = unknown,
> = BuildRoutes<
  T,
  TSearchMeta,
  TInfoMeta,
  unknown,
  unknown,
  unknown,
  TChapterMeta
>;

/**
 * Builds a metadata provider client with selected routes.
 * @internal
 */
type BuildMetaRoutes<
  T extends SelectRoutes,
  TSearchMeta = unknown,
  TInfoMeta = unknown,
> = BuildRoutes<T, TSearchMeta, TInfoMeta>;

/**
 * Configuration for fetch module initialization.
 * @internal
 */
interface FetchModuleConfig {
  /** Base API URL (defaults to https://api.crysoline.moe) */
  baseUrl?: string;
  /** Provider identifier */
  provider: string;
  /** API key for authentication */
  apiKey: string;
  /** Route selection configuration */
  select?: SelectRoutes;
}

/**
 * Creates an anime provider API client with typed methods.
 *
 * @template TSearchMeta - Custom metadata type for search results
 * @template TInfoMeta - Custom metadata type for info
 * @template TEpisodeMeta - Custom metadata type for episodes
 * @template TSourceMeta - Custom metadata type for sources
 * @template TServerMeta - Custom metadata type for servers
 * @template S - Selected routes configuration
 * @param config - Client configuration
 * @returns Configured anime API client
 *
 * @example
 * ```ts
 * const client = AnimeFetch({
 *   provider: "hianime",
 *   apiKey: process.env.API_KEY
 * });
 *
 * const results = await client.search("demon slayer");
 * const info = await client.info(results[0].id);
 * ```
 * @internal
 */
export const AnimeFetch = <
  TSearchMeta = unknown,
  TInfoMeta = unknown,
  TEpisodeMeta = unknown,
  TSourceMeta = unknown,
  TServerMeta = unknown,
  S extends SelectRoutes = {
    search: true;
    info: true;
    episodes: true;
    sources: true;
  },
>(
  config: FetchModuleConfig,
): BuildAnimeRoutes<
  S,
  TSearchMeta,
  TInfoMeta,
  TEpisodeMeta,
  TSourceMeta,
  TServerMeta
> => {
  const { baseUrl = "https://api.crysoline.moe", provider, apiKey } = config;

  const basePath = `${baseUrl}/api/anime/${provider}/`;
  const fetcher = fetchFn(basePath, apiKey);

  const search = async (q: string) =>
    fetcher<Search<TSearchMeta>[]>("search", { q });

  const info = async (id: string | number) =>
    fetcher<Info<TInfoMeta, Episode<TEpisodeMeta>>>(
      `info/${encodeURIComponent(id)}`,
    );

  const episodes = async (id: string | number) =>
    fetcher<Episode<TEpisodeMeta>[]>(`episodes/${encodeURIComponent(id)}`);

  const sources = (params: {
    id: string | number;
    episodeId: string | number;
    subType?: string;
    server?: string;
  }) => fetcher<Source<TSourceMeta>>("sources", params);

  const servers = (params: {
    id: string | number;
    episodeId: string | number;
  }) => fetcher<Server<TServerMeta>>("servers", params);

  return {
    name: provider,
    search,
    info,
    episodes,
    sources,
    servers,
  } as BuildAnimeRoutes<
    S,
    TSearchMeta,
    TInfoMeta,
    TEpisodeMeta,
    TSourceMeta,
    TServerMeta
  >;
};

/**
 * Creates a hentai provider API client with typed methods.
 *
 * @template TSearchMeta - Custom metadata type for search results
 * @template TInfoMeta - Custom metadata type for info
 * @template TEpisodeMeta - Custom metadata type for episodes
 * @template TSourceMeta - Custom metadata type for sources
 * @template TServerMeta - Custom metadata type for servers
 * @template S - Selected routes configuration
 * @param config - Client configuration
 * @returns Configured hentai API client
 * @internal
 */
export const HentaiFetch = <
  TSearchMeta = unknown,
  TInfoMeta = unknown,
  TEpisodeMeta = unknown,
  TSourceMeta = unknown,
  TServerMeta = unknown,
  S extends SelectRoutes = {
    search: true;
    info: true;
    episodes: true;
    sources: true;
  },
>(
  config: FetchModuleConfig,
): BuildAnimeRoutes<
  S,
  TSearchMeta,
  TInfoMeta,
  TEpisodeMeta,
  TSourceMeta,
  TServerMeta
> => {
  const { baseUrl = "https://api.crysoline.moe", provider, apiKey } = config;

  const basePath = `${baseUrl}/api/hentai/${provider}/`;
  const fetcher = fetchFn(basePath, apiKey);

  const search = async (q: string) =>
    fetcher<Search<TSearchMeta>[]>("search", { q });

  const info = async (id: string | number) =>
    fetcher<Info<TInfoMeta, Episode<TEpisodeMeta>>>(
      `info/${encodeURIComponent(id)}`,
    );

  const episodes = async (id: string | number) =>
    fetcher<Episode<TEpisodeMeta>[]>(`episodes/${encodeURIComponent(id)}`);

  const sources = (params: {
    id: string | number;
    episodeId: string | number;
    subType?: string;
    server?: string;
  }) => fetcher<Source<TSourceMeta>>("sources", params);

  const servers = (params: {
    id: string | number;
    episodeId: string | number;
  }) => fetcher<Server<TServerMeta>>("servers", params);

  return {
    name: provider,
    search,
    info,
    episodes,
    sources,
    servers,
  } as BuildAnimeRoutes<
    S,
    TSearchMeta,
    TInfoMeta,
    TEpisodeMeta,
    TSourceMeta,
    TServerMeta
  >;
};

/**
 * Creates a manga provider API client with typed methods.
 *
 * @template TSearchMeta - Custom metadata type for search results
 * @template TInfoMeta - Custom metadata type for info
 * @template TChapterMeta - Custom metadata type for chapters
 * @template S - Selected routes configuration
 * @param config - Client configuration
 * @returns Configured manga API client
 *
 * @example
 * ```ts
 * const client = MangaFetch({
 *   provider: "mangadex",
 *   apiKey: process.env.API_KEY
 * });
 *
 * const results = await client.search("one piece");
 * const chapters = await client.chapters(results[0].id);
 * ```
 * @internal
 */
export const MangaFetch = <
  TSearchMeta = unknown,
  TInfoMeta = unknown,
  TChapterMeta = unknown,
  S extends SelectRoutes = {
    search: true;
    info: true;
    chapters: true;
    pages: true;
  },
>(
  config: FetchModuleConfig,
): BuildMangaRoutes<S, TSearchMeta, TInfoMeta, TChapterMeta> => {
  const { baseUrl = "https://api.crysoline.moe", provider, apiKey } = config;

  const basePath = `${baseUrl}/api/manga/${provider}/`;
  const fetcher = fetchFn(basePath, apiKey);

  const search = async (q: string) =>
    fetcher<Search<TSearchMeta>[]>("search", { q });

  const info = async (id: string | number) =>
    fetcher<Info<TInfoMeta>>(`info/${encodeURIComponent(id)}`);

  const chapters = async (id: string | number) =>
    fetcher<Chapter<TChapterMeta>[]>(`chapters/${encodeURIComponent(id)}`);

  const pages = (params: {
    id: string | number;
    chapterId: string | number;
    lang?: string;
  }) => fetcher<Page[]>("pages", params);

  return {
    name: provider,
    search,
    info,
    chapters,
    pages,
  } as BuildMangaRoutes<S, TSearchMeta, TInfoMeta, TChapterMeta>;
};

/**
 * Creates a metadata provider API client (MyAnimeList, AniList).
 *
 * @template TSearchMeta - Custom metadata type for search results
 * @template TInfoMeta - Custom metadata type for info
 * @template S - Selected routes configuration
 * @param config - Client configuration
 * @returns Configured metadata API client
 * @internal
 */
export const MetaFetch = <
  TSearchMeta = unknown,
  TInfoMeta = unknown,
  S extends SelectRoutes = {
    search: true;
    info: true;
  },
>(
  config: FetchModuleConfig,
): BuildMetaRoutes<S, TSearchMeta, TInfoMeta> => {
  const { baseUrl = "https://api.crysoline.moe", provider, apiKey } = config;

  const basePath = `${baseUrl}/api/meta/${provider}/`;
  const fetcher = fetchFn(basePath, apiKey);

  const search = async (q: string) =>
    fetcher<Search<TSearchMeta>[]>("search", { q });

  const info = async (id: string | number) =>
    fetcher<Info<TInfoMeta>>(`info/${encodeURIComponent(id)}`);

  return {
    name: provider,
    search,
    info,
  } as BuildMetaRoutes<S, TSearchMeta, TInfoMeta>;
};

/**
 * Creates a cross-provider ID mapping client.
 *
 * Maps content IDs between different providers (e.g., MyAnimeList ID to AniList ID).
 *
 * @param config - Client configuration
 * @returns Configured mapper API client
 *
 * @example
 * ```ts
 * const mapper = MapperFetch({
 *   provider: "mapper",
 *   apiKey: process.env.API_KEY
 * });
 *
 * const mapping = await mapper.map({ id: 123, provider: "myanimelist" });
 * console.log(mapping.anilistId); // Get corresponding AniList ID
 * ```
 * @internal
 */
export const MapperFetch = (
  config: FetchModuleConfig,
): BuildRoutes<{ map: true }> => {
  const { baseUrl = "https://api.crysoline.moe", provider, apiKey } = config;

  const basePath = `${baseUrl}/api/${provider}/`;
  const fetcher = fetchFn(basePath, apiKey);

  const map = async (params: { id: number; provider: string }) =>
    fetcher<Mapping>("map", params);

  return {
    map,
  } as BuildRoutes<{ map: true }>;
};

/**
 * Creates a Kodik video extractor client.
 *
 * Kodik is a popular video hosting service. This client extracts video sources
 * and provides translation options.
 *
 * @param config - Client configuration
 * @returns Configured Kodik extractor client
 *
 * @example
 * ```ts
 * const kodik = KodikFetch({
 *   provider: "kodik",
 *   apiKey: process.env.API_KEY
 * });
 *
 * const translations = await kodik.translations("content-id");
 * const episodes = await kodik.episodes("content-id");
 * const sources = await kodik.sources({
 *   id: "content-id",
 *   episodeId: "ep-1"
 * });
 * ```
 * @internal
 */
export const KodikFetch = (
  config: FetchModuleConfig,
): BuildRoutes<{ episodes: true; translations: true; sources: true }> => {
  const { baseUrl = "https://api.crysoline.moe", provider, apiKey } = config;

  const basePath = `${baseUrl}/extractor/${provider}/`;
  const fetcher = fetchFn(basePath, apiKey);

  const episodes = async (id: string | number) =>
    fetcher<Episode<KodikEpisodeMeta>[]>(`episodes/${encodeURIComponent(id)}`);

  const sources = (params: {
    id: string | number;
    episodeId: string | number;
    subType?: string;
    server?: string;
  }) => fetcher<Source>("sources", params);

  const translations = (id: string | number) =>
    fetcher<KodikTranslation[]>(`translations/${encodeURIComponent(id)}`);

  return {
    name: provider,
    episodes,
    sources,
    translations,
  } as BuildRoutes<{ episodes: true; translations: true; sources: true }>;
};
