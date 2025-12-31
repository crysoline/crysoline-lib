import type { Chapter, Episode, Info, Page, Search, Source } from '../core/types';

type FetchFn = <T>(
  path: string,
  params?: Record<string, string | number | undefined>
) => Promise<T>;

const fetchFn = (baseUrl: string, apiKey: string): FetchFn => {
  return async <T>(
    path: string,
    params?: Record<string, string | number | undefined>
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
        'x-api-key': apiKey,
      },
    });

    if (!res.ok) {
      throw new Error(`Failed (${res.status}) (${res.statusText}) on ${url.pathname}`);
    }

    return res.json() as Promise<T>;
  };
};

interface FetchModuleConfig {
  baseUrl?: string;
  provider: string;
  apiKey: string;
}

export const AnimeFetch = <
  TSearchMeta = unknown,
  TInfoMeta = unknown,
  TEpisodeMeta = unknown,
  TSourceMeta = unknown,
>(
  config: FetchModuleConfig
) => {
  const { baseUrl = 'https://api.crysoline.moe', provider, apiKey } = config;

  const basePath = `${baseUrl}/api/anime/${provider}/`;
  const fetcher = fetchFn(basePath, apiKey);

  /**
   * Search for anime by query string.
   *
   * @param q - Search query.
   */
  const search = async (q: string) => fetcher<Search<TSearchMeta>[]>('search', { q });

  /**
   * Fetch detailed info for a given anime id.
   *
   * @param id - Anime identifier (string or number)
   */
  const info = async (id: string | number) =>
    fetcher<Info<TInfoMeta, Episode<TEpisodeMeta>>>(`info/${encodeURIComponent(id)}`);

  /**
   * Fetch episodes list for a given anime id.
   *
   * @param id - Anime identifier (string or number)
   */
  const episodes = async (id: string | number) =>
    fetcher<Episode<TEpisodeMeta>[]>(`episodes/${encodeURIComponent(id)}`);

  /**
   * Fetch sources for a particular episode.
   *
   * @param params - Object containing `id`, `episodeId` and optional `subType` and `server`
   */
  const sources = (params: {
    id: string | number;
    episodeId: string | number;
    subType?: string;
    server?: string;
  }) => fetcher<Source<TSourceMeta>>('sources', params);

  return {
    search,
    info,
    episodes,
    sources,
  };
};

export const HentaiFetch = <
  TSearchMeta = unknown,
  TInfoMeta = unknown,
  TEpisodeMeta = unknown,
  TSourceMeta = unknown,
>(
  config: FetchModuleConfig
) => {
  const { baseUrl = 'https://api.crysoline.moe', provider, apiKey } = config;

  const basePath = `${baseUrl}/api/hentai/${provider}/`;
  const fetcher = fetchFn(basePath, apiKey);

  /**
   * Search for hentai by query string.
   *
   * @param q - Search query.
   */
  const search = async (q: string) => fetcher<Search<TSearchMeta>[]>('search', { q });

  /**
   * Get detailed info for an item by id.
   *
   * @param id - Item identifier.
   */
  const info = async (id: string | number) =>
    fetcher<Info<TInfoMeta, Episode<TEpisodeMeta>>>(`info/${encodeURIComponent(id)}`);

  /**
   * List episodes for a specific item.
   *
   * @param id - Item identifier.
   */
  const episodes = async (id: string | number) =>
    fetcher<Episode<TEpisodeMeta>[]>(`episodes/${encodeURIComponent(id)}`);

  /**
   * Get sources for a specific episode.
   *
   * @param params - Parameters to identify the episode and optional filters.
   */
  const sources = (params: {
    id: string | number;
    episodeId: string | number;
    subType?: string;
    server?: string;
  }) => fetcher<Source<TSourceMeta>>('sources', params);

  return {
    search,
    info,
    episodes,
    sources,
  };
};

export const MangaFetch = <TSearchMeta = unknown, TInfoMeta = unknown, TChapterMeta = unknown>(
  config: FetchModuleConfig
) => {
  const { baseUrl = 'https://api.crysoline.moe', provider, apiKey } = config;

  const basePath = `${baseUrl}/api/manga/${provider}/`;
  const fetcher = fetchFn(basePath, apiKey);

  /**
   * Search for manga by query string.
   *
   * @param q - Search query.
   */
  const search = async (q: string) => fetcher<Search<TSearchMeta>[]>('search', { q });

  /**
   * Get detailed info for a manga by id.
   *
   * @param id - Manga identifier.
   */
  const info = async (id: string | number) =>
    fetcher<Info<TInfoMeta>>(`info/${encodeURIComponent(id)}`);

  /**
   * List chapters for a specific manga.
   *
   * @param id - Manga identifier.
   */
  const chapters = async (id: string | number) =>
    fetcher<Chapter<TChapterMeta>[]>(`chapters/${encodeURIComponent(id)}`);

  /**
   * Fetch pages for a specific manga chapter.
   *
   * @param params - Object containing `id`, `chapterId` and optional `lang`
   */
  const pages = (params: { id: string | number; chapterId: string | number; lang?: string }) =>
    fetcher<Page[]>('pages', params);

  return {
    search,
    info,
    chapters,
    pages,
  };
};

export const MetaFetch = <TSearchMeta = unknown, TInfoMeta = unknown>(
  config: FetchModuleConfig
) => {
  const { baseUrl = 'https://api.crysoline.moe', provider, apiKey } = config;

  const basePath = `${baseUrl}/api/meta/${provider}/`;
  const fetcher = fetchFn(basePath, apiKey);

  /**
   * Search meta provider by query string.
   *
   * @param q - Search query.
   */
  const search = async (q: string) => fetcher<Search<TSearchMeta>[]>('search', { q });

  /**
   * Get info from meta provider by id.
   *
   * @param id - Resource identifier.
   */
  const info = async (id: string | number) =>
    fetcher<Info<TInfoMeta>>(`info/${encodeURIComponent(id)}`);

  return {
    search,
    info,
  };
};

export const MapperFetch = (config: FetchModuleConfig) => {
  const { baseUrl = 'https://api.crysoline.moe', provider, apiKey } = config;

  const basePath = `${baseUrl}/api/mapper/${provider}`;
  const fetcher = fetchFn(basePath, apiKey);

  /**
   * Map an id from one provider to another.
   *
   * @param params - Mapping parameters: `id` to map and `provider` to map to.
   */
  const map = async (params: { id: number; provider: string }) => fetcher('map', params);

  return {
    map,
  };
};
