import type { KodikEpisodeMeta, KodikTranslation } from '../core/extractors/kodik/types';
import type { Mapping } from '../core/mapper/types';
import type { Chapter, Episode, Info, Page, Search, Server, Source } from '../core/types';

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

type SearchRoute<T = unknown> = (q: string) => Promise<Search<T>[]>;

type InfoRoute<T = unknown, E = unknown> = (id: string | number) => Promise<Info<T, E>>;

type EpisodesRoute<T = unknown> = (id: string | number) => Promise<Episode<T>[]>;

type SourcesRoute<T> = (params: {
  id: string | number;
  episodeId: string | number;
  subType?: string;
  server?: string;
}) => Promise<Source<T>>;

type ServersRoute<T> = (params: {
  id: string | number;
  episodeId: string | number;
}) => Promise<Server<T>>;

type ChaptersRoute<T = unknown> = (id: string | number) => Promise<Chapter<T>[]>;

type PagesRoute = (params: {
  id: string | number;
  chapterId: string | number;
  lang?: string;
}) => Promise<Page[]>;

type TranslationsRoute = (id: string | number) => Promise<KodikTranslation[]>;

type MapRoute = (params: { id: number; provider: string }) => Promise<Mapping>;

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

type SelectRoutes = {
  [K in keyof RouteMap]?: boolean;
};

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

type BuildAnimeRoutes<
  T extends SelectRoutes,
  TSearchMeta = unknown,
  TInfoMeta = unknown,
  TEpisodeMeta = unknown,
  TSourceMeta = unknown,
  TServerMeta = unknown,
> = BuildRoutes<T, TSearchMeta, TInfoMeta, TEpisodeMeta, TSourceMeta, TServerMeta>;

type BuildMangaRoutes<
  T extends SelectRoutes,
  TSearchMeta = unknown,
  TInfoMeta = unknown,
  TChapterMeta = unknown,
> = BuildRoutes<T, TSearchMeta, TInfoMeta, unknown, unknown, unknown, TChapterMeta>;

type BuildMetaRoutes<
  T extends SelectRoutes,
  TSearchMeta = unknown,
  TInfoMeta = unknown,
> = BuildRoutes<T, TSearchMeta, TInfoMeta>;

interface FetchModuleConfig {
  baseUrl?: string;
  provider: string;
  apiKey: string;
  select?: SelectRoutes;
}

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
  config: FetchModuleConfig
): BuildAnimeRoutes<S, TSearchMeta, TInfoMeta, TEpisodeMeta, TSourceMeta, TServerMeta> => {
  const { baseUrl = 'https://api.crysoline.moe', provider, apiKey } = config;

  const basePath = `${baseUrl}/api/anime/${provider}/`;
  const fetcher = fetchFn(basePath, apiKey);

  const search = async (q: string) => fetcher<Search<TSearchMeta>[]>('search', { q });

  const info = async (id: string | number) =>
    fetcher<Info<TInfoMeta, Episode<TEpisodeMeta>>>(`info/${encodeURIComponent(id)}`);

  const episodes = async (id: string | number) =>
    fetcher<Episode<TEpisodeMeta>[]>(`episodes/${encodeURIComponent(id)}`);

  const sources = (params: {
    id: string | number;
    episodeId: string | number;
    subType?: string;
    server?: string;
  }) => fetcher<Source<TSourceMeta>>('sources', params);

  const servers = (params: { id: string | number; episodeId: string | number }) =>
    fetcher<Server<TServerMeta>>('servers', params);

  return {
    name: provider,
    search,
    info,
    episodes,
    sources,
    servers,
  } as BuildAnimeRoutes<S, TSearchMeta, TInfoMeta, TEpisodeMeta, TSourceMeta, TServerMeta>;
};

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
  config: FetchModuleConfig
): BuildAnimeRoutes<S, TSearchMeta, TInfoMeta, TEpisodeMeta, TSourceMeta, TServerMeta> => {
  const { baseUrl = 'https://api.crysoline.moe', provider, apiKey } = config;

  const basePath = `${baseUrl}/api/hentai/${provider}/`;
  const fetcher = fetchFn(basePath, apiKey);

  const search = async (q: string) => fetcher<Search<TSearchMeta>[]>('search', { q });

  const info = async (id: string | number) =>
    fetcher<Info<TInfoMeta, Episode<TEpisodeMeta>>>(`info/${encodeURIComponent(id)}`);

  const episodes = async (id: string | number) =>
    fetcher<Episode<TEpisodeMeta>[]>(`episodes/${encodeURIComponent(id)}`);

  const sources = (params: {
    id: string | number;
    episodeId: string | number;
    subType?: string;
    server?: string;
  }) => fetcher<Source<TSourceMeta>>('sources', params);

  const servers = (params: { id: string | number; episodeId: string | number }) =>
    fetcher<Server<TServerMeta>>('servers', params);

  return {
    name: provider,
    search,
    info,
    episodes,
    sources,
    servers,
  } as BuildAnimeRoutes<S, TSearchMeta, TInfoMeta, TEpisodeMeta, TSourceMeta, TServerMeta>;
};

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
  config: FetchModuleConfig
): BuildMangaRoutes<S, TSearchMeta, TInfoMeta, TChapterMeta> => {
  const { baseUrl = 'https://api.crysoline.moe', provider, apiKey } = config;

  const basePath = `${baseUrl}/api/manga/${provider}/`;
  const fetcher = fetchFn(basePath, apiKey);

  const search = async (q: string) => fetcher<Search<TSearchMeta>[]>('search', { q });

  const info = async (id: string | number) =>
    fetcher<Info<TInfoMeta>>(`info/${encodeURIComponent(id)}`);

  const chapters = async (id: string | number) =>
    fetcher<Chapter<TChapterMeta>[]>(`chapters/${encodeURIComponent(id)}`);

  const pages = (params: { id: string | number; chapterId: string | number; lang?: string }) =>
    fetcher<Page[]>('pages', params);

  return {
    name: provider,
    search,
    info,
    chapters,
    pages,
  } as BuildMangaRoutes<S, TSearchMeta, TInfoMeta, TChapterMeta>;
};

export const NovelFetch = <
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
  config: FetchModuleConfig
): BuildMangaRoutes<S, TSearchMeta, TInfoMeta, TChapterMeta> => {
  const { baseUrl = 'https://api.crysoline.moe', provider, apiKey } = config;

  const basePath = `${baseUrl}/api/novels/${provider}/`;
  const fetcher = fetchFn(basePath, apiKey);

  const search = async (q: string) => fetcher<Search<TSearchMeta>[]>('search', { q });

  const info = async (id: string | number) =>
    fetcher<Info<TInfoMeta>>(`info/${encodeURIComponent(id)}`);

  const chapters = async (id: string | number) =>
    fetcher<Chapter<TChapterMeta>[]>(`chapters/${encodeURIComponent(id)}`);

  const pages = (params: { id: string | number; chapterId: string | number; lang?: string }) =>
    fetcher<Page[]>('pages', params);

  return {
    name: provider,
    search,
    info,
    chapters,
    pages,
  } as BuildMangaRoutes<S, TSearchMeta, TInfoMeta, TChapterMeta>;
};

export const MetaFetch = <
  TSearchMeta = unknown,
  TInfoMeta = unknown,
  S extends SelectRoutes = {
    search: true;
    info: true;
  },
>(
  config: FetchModuleConfig
): BuildMetaRoutes<S, TSearchMeta, TInfoMeta> => {
  const { baseUrl = 'https://api.crysoline.moe', provider, apiKey } = config;

  const basePath = `${baseUrl}/api/meta/${provider}/`;
  const fetcher = fetchFn(basePath, apiKey);

  const search = async (q: string) => fetcher<Search<TSearchMeta>[]>('search', { q });

  const info = async (id: string | number) =>
    fetcher<Info<TInfoMeta>>(`info/${encodeURIComponent(id)}`);

  return {
    name: provider,
    search,
    info,
  } as BuildMetaRoutes<S, TSearchMeta, TInfoMeta>;
};

export const MapperFetch = (config: FetchModuleConfig): BuildRoutes<{ map: true }> => {
  const { baseUrl = 'https://api.crysoline.moe', provider, apiKey } = config;

  const basePath = `${baseUrl}/api/${provider}/`;
  const fetcher = fetchFn(basePath, apiKey);

  const map = async (params: { id: number; provider: string }) => fetcher<Mapping>('map', params);

  return {
    map,
  } as BuildRoutes<{ map: true }>;
};

export const KodikFetch = (
  config: FetchModuleConfig
): BuildRoutes<{ episodes: true; translations: true; sources: true }> => {
  const { baseUrl = 'https://api.crysoline.moe', provider, apiKey } = config;

  const basePath = `${baseUrl}/extractor/${provider}/`;
  const fetcher = fetchFn(basePath, apiKey);

  const episodes = async (id: string | number) =>
    fetcher<Episode<KodikEpisodeMeta>[]>(`episodes/${encodeURIComponent(id)}`);

  const sources = (params: {
    id: string | number;
    episodeId: string | number;
    subType?: string;
    server?: string;
  }) => fetcher<Source>('sources', params);

  const translations = (id: string | number) =>
    fetcher<KodikTranslation[]>(`translations/${encodeURIComponent(id)}`);

  return {
    name: provider,
    episodes,
    sources,
    translations,
  } as BuildRoutes<{ episodes: true; translations: true; sources: true }>;
};
