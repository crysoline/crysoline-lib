import type {
  Chapter,
  Episode,
  Info,
  Page,
  Search,
  Source,
} from "../core/types";

type FetchFn = <T>(
  path: string,
  params?: Record<string, string | number | undefined>,
) => Promise<T>;

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
      throw new Error(`Failed (${res.status}) on ${url.pathname}`);
    }

    return res.json() as Promise<T>;
  };
};

export interface FetchModuleConfig {
  baseUrl?: string;
  provider: string;
  apiKey: string;
}

export class AnimeFetchModule<
  TSearchMeta = unknown,
  TInfoMeta = unknown,
  TEpisodeMeta = unknown,
  TSourceMeta = unknown,
> {
  private readonly fetcher: FetchFn;
  private readonly basePath: string;

  constructor(config: FetchModuleConfig) {
    const { baseUrl = "https://api.crysoline.moe", provider, apiKey } = config;

    this.basePath = `/api/anime/${provider}`;
    this.fetcher = fetchFn(baseUrl, apiKey);
  }

  async search(q: string): Promise<Search<TSearchMeta>[]> {
    return this.fetcher(`${this.basePath}/search`, {
      q,
    });
  }

  async info(
    id: string | number,
  ): Promise<Info<TInfoMeta, Episode<TEpisodeMeta>>> {
    return this.fetcher(`${this.basePath}/info/${encodeURIComponent(id)}`);
  }

  async episodes(id: string | number): Promise<Episode<TEpisodeMeta>[]> {
    return this.fetcher(`${this.basePath}/episodes/${encodeURIComponent(id)}`);
  }

  async sources(params: {
    id: string | number;
    episodeId: string | number;
    subType?: string;
    server?: string;
  }): Promise<Source<TSourceMeta>> {
    return this.fetcher(`${this.basePath}/sources`, params);
  }
}

export class HentaiFetchModule<
  TSearchMeta = unknown,
  TInfoMeta = unknown,
  TEpisodeMeta = unknown,
  TSourceMeta = unknown,
> {
  private readonly fetcher: FetchFn;
  private readonly basePath: string;

  constructor(config: FetchModuleConfig) {
    const { baseUrl = "https://api.crysoline.moe", provider, apiKey } = config;

    this.basePath = `/api/hentai/${provider}`;
    this.fetcher = fetchFn(baseUrl, apiKey);
  }

  async search(q: string): Promise<Search<TSearchMeta>[]> {
    return this.fetcher(`${this.basePath}/search`, {
      q,
    });
  }

  async info(
    id: string | number,
  ): Promise<Info<TInfoMeta, Episode<TEpisodeMeta>>> {
    return this.fetcher(`${this.basePath}/info/${encodeURIComponent(id)}`);
  }

  async episodes(id: string | number): Promise<Episode<TEpisodeMeta>[]> {
    return this.fetcher(`${this.basePath}/episodes/${encodeURIComponent(id)}`);
  }

  async sources(params: {
    id: string | number;
    episodeId: string | number;
    subType?: string;
    server?: string;
  }): Promise<Source<TSourceMeta>> {
    return this.fetcher(`${this.basePath}/sources`, params);
  }
}

export class MangaFetchModule<
  TSearchMeta = unknown,
  TInfoMeta = unknown,
  TChapterMeta = unknown,
> {
  private readonly fetcher: FetchFn;
  private readonly basePath: string;

  constructor(config: FetchModuleConfig) {
    const { baseUrl = "https://api.crysoline.moe", provider, apiKey } = config;

    this.basePath = `/api/manga/${provider}`;
    this.fetcher = fetchFn(baseUrl, apiKey);
  }

  async search(q: string): Promise<Search<TSearchMeta>[]> {
    return this.fetcher(`${this.basePath}/search`, {
      q,
    });
  }

  async info(id: string | number): Promise<Info<TInfoMeta>> {
    return this.fetcher(`${this.basePath}/info/${encodeURIComponent(id)}`);
  }

  async chapters(id: string | number): Promise<Chapter<TChapterMeta>[]> {
    return this.fetcher(`${this.basePath}/chapters/${encodeURIComponent(id)}`);
  }

  async pages(params: {
    id: string | number;
    chapterId: string | number;
    lang?: string;
  }): Promise<Page[]> {
    return this.fetcher(`${this.basePath}/pages`, params);
  }
}

export class MetaFetchModule<TSearchMeta = unknown, TInfoMeta = unknown> {
  private readonly fetcher: FetchFn;
  private readonly basePath: string;

  constructor(config: FetchModuleConfig) {
    const { baseUrl = "https://api.crysoline.moe", provider, apiKey } = config;

    this.basePath = `/api/meta/${provider}`;
    this.fetcher = fetchFn(baseUrl, apiKey);
  }

  async search(q: string): Promise<Search<TSearchMeta>[]> {
    return this.fetcher(`${this.basePath}/search`, {
      q,
    });
  }

  async info(id: string | number): Promise<Info<TInfoMeta>> {
    return this.fetcher(`${this.basePath}/info/${encodeURIComponent(id)}`);
  }
}

export class MapperFetchModule {
  private readonly fetcher: FetchFn;
  private readonly basePath: string;

  constructor(config: FetchModuleConfig) {
    const { baseUrl = "https://api.crysoline.moe", provider, apiKey } = config;

    this.basePath = `/api/${provider}`;
    this.fetcher = fetchFn(baseUrl, apiKey);
  }

  async map(params: { id: number; provider: string }) {
    return this.fetcher(`${this.basePath}/map`, params);
  }
}

export const AnimeFetch = <
  TSearchMeta = unknown,
  TInfoMeta = unknown,
  TEpisodeMeta = unknown,
  TSourceMeta = unknown,
>(
  config: FetchModuleConfig,
) =>
  new AnimeFetchModule<TSearchMeta, TInfoMeta, TEpisodeMeta, TSourceMeta>(
    config,
  );

export const HentaiFetch = <
  TSearchMeta = unknown,
  TInfoMeta = unknown,
  TEpisodeMeta = unknown,
  TSourceMeta = unknown,
>(
  config: FetchModuleConfig,
) =>
  new HentaiFetchModule<TSearchMeta, TInfoMeta, TEpisodeMeta, TSourceMeta>(
    config,
  );

export const MangaFetch = <
  TSearchMeta = unknown,
  TInfoMeta = unknown,
  TChapterMeta = unknown,
>(
  config: FetchModuleConfig,
) => new MangaFetchModule<TSearchMeta, TInfoMeta, TChapterMeta>(config);

export const MetaFetch = <TSearchMeta = unknown, TInfoMeta = unknown>(
  config: FetchModuleConfig,
) => new MetaFetchModule<TSearchMeta, TInfoMeta>(config);

export const MapperFetch = (config: FetchModuleConfig) =>
  new MapperFetchModule(config);
