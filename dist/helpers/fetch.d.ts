import type { Chapter, Episode, Info, Page, Search, Source } from "../core/types";
export interface FetchModuleConfig {
    baseUrl?: string;
    provider: string;
    apiKey: string;
}
export declare class AnimeFetchModule<TSearchMeta = unknown, TInfoMeta = unknown, TEpisodeMeta = unknown, TSourceMeta = unknown> {
    private readonly fetcher;
    private readonly basePath;
    constructor(config: FetchModuleConfig);
    search(q: string): Promise<Search<TSearchMeta>[]>;
    info(id: string | number): Promise<Info<TInfoMeta, Episode<TEpisodeMeta>>>;
    episodes(id: string | number): Promise<Episode<TEpisodeMeta>[]>;
    sources(params: {
        id: string | number;
        episodeId: string | number;
        subType?: string;
        server?: string;
    }): Promise<Source<TSourceMeta>>;
}
export declare class HentaiFetchModule<TSearchMeta = unknown, TInfoMeta = unknown, TEpisodeMeta = unknown, TSourceMeta = unknown> {
    private readonly fetcher;
    private readonly basePath;
    constructor(config: FetchModuleConfig);
    search(q: string): Promise<Search<TSearchMeta>[]>;
    info(id: string | number): Promise<Info<TInfoMeta, Episode<TEpisodeMeta>>>;
    episodes(id: string | number): Promise<Episode<TEpisodeMeta>[]>;
    sources(params: {
        id: string | number;
        episodeId: string | number;
        subType?: string;
        server?: string;
    }): Promise<Source<TSourceMeta>>;
}
export declare class MangaFetchModule<TSearchMeta = unknown, TInfoMeta = unknown, TChapterMeta = unknown> {
    private readonly fetcher;
    private readonly basePath;
    constructor(config: FetchModuleConfig);
    search(q: string): Promise<Search<TSearchMeta>[]>;
    info(id: string | number): Promise<Info<TInfoMeta>>;
    chapters(id: string | number): Promise<Chapter<TChapterMeta>[]>;
    pages(params: {
        id: string | number;
        chapterId: string | number;
        lang?: string;
    }): Promise<Page[]>;
}
export declare class MetaFetchModule<TSearchMeta = unknown, TInfoMeta = unknown> {
    private readonly fetcher;
    private readonly basePath;
    constructor(config: FetchModuleConfig);
    search(q: string): Promise<Search<TSearchMeta>[]>;
    info(id: string | number): Promise<Info<TInfoMeta>>;
}
export declare class MapperFetchModule {
    private readonly fetcher;
    private readonly basePath;
    constructor(config: FetchModuleConfig);
    map(params: {
        id: number;
        provider: string;
    }): Promise<unknown>;
}
export declare const AnimeFetch: <TSearchMeta = unknown, TInfoMeta = unknown, TEpisodeMeta = unknown, TSourceMeta = unknown>(config: FetchModuleConfig) => AnimeFetchModule<TSearchMeta, TInfoMeta, TEpisodeMeta, TSourceMeta>;
export declare const HentaiFetch: <TSearchMeta = unknown, TInfoMeta = unknown, TEpisodeMeta = unknown, TSourceMeta = unknown>(config: FetchModuleConfig) => HentaiFetchModule<TSearchMeta, TInfoMeta, TEpisodeMeta, TSourceMeta>;
export declare const MangaFetch: <TSearchMeta = unknown, TInfoMeta = unknown, TChapterMeta = unknown>(config: FetchModuleConfig) => MangaFetchModule<TSearchMeta, TInfoMeta, TChapterMeta>;
export declare const MetaFetch: <TSearchMeta = unknown, TInfoMeta = unknown>(config: FetchModuleConfig) => MetaFetchModule<TSearchMeta, TInfoMeta>;
export declare const MapperFetch: (config: FetchModuleConfig) => MapperFetchModule;
