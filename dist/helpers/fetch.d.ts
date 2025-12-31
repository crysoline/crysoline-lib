import type { Chapter, Episode, Info, Page, Search, Source } from '../core/types';
interface FetchModuleConfig {
    baseUrl?: string;
    provider: string;
    apiKey: string;
}
export declare const AnimeFetch: <TSearchMeta = unknown, TInfoMeta = unknown, TEpisodeMeta = unknown, TSourceMeta = unknown>(config: FetchModuleConfig) => {
    search: (q: string) => Promise<Search<TSearchMeta>[]>;
    info: (id: string | number) => Promise<Info<TInfoMeta, Episode<TEpisodeMeta>>>;
    episodes: (id: string | number) => Promise<Episode<TEpisodeMeta>[]>;
    sources: (params: {
        id: string | number;
        episodeId: string | number;
        subType?: string;
        server?: string;
    }) => Promise<Source<TSourceMeta>>;
};
export declare const HentaiFetch: <TSearchMeta = unknown, TInfoMeta = unknown, TEpisodeMeta = unknown, TSourceMeta = unknown>(config: FetchModuleConfig) => {
    search: (q: string) => Promise<Search<TSearchMeta>[]>;
    info: (id: string | number) => Promise<Info<TInfoMeta, Episode<TEpisodeMeta>>>;
    episodes: (id: string | number) => Promise<Episode<TEpisodeMeta>[]>;
    sources: (params: {
        id: string | number;
        episodeId: string | number;
        subType?: string;
        server?: string;
    }) => Promise<Source<TSourceMeta>>;
};
export declare const MangaFetch: <TSearchMeta = unknown, TInfoMeta = unknown, TChapterMeta = unknown>(config: FetchModuleConfig) => {
    search: (q: string) => Promise<Search<TSearchMeta>[]>;
    info: (id: string | number) => Promise<Info<TInfoMeta, unknown>>;
    chapters: (id: string | number) => Promise<Chapter<TChapterMeta>[]>;
    pages: (params: {
        id: string | number;
        chapterId: string | number;
        lang?: string;
    }) => Promise<Page[]>;
};
export declare const MetaFetch: <TSearchMeta = unknown, TInfoMeta = unknown>(config: FetchModuleConfig) => {
    search: (q: string) => Promise<Search<TSearchMeta>[]>;
    info: (id: string | number) => Promise<Info<TInfoMeta, unknown>>;
};
export declare const MapperFetch: (config: FetchModuleConfig) => {
    map: (params: {
        id: number;
        provider: string;
    }) => Promise<unknown>;
};
export {};
