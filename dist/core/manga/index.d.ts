import type { LMangaInfoMeta, LMangaSearchMeta } from './lunar';
import type { MDXInfoMeta, MDXSearchMeta } from './mangadex';
import type { MFInfoMeta, MFSearchMeta } from './mangafire';
declare const Manga: {
    LunarManga: (apiKey: string) => {
        search: (q: string) => Promise<import("../types").Search<LMangaSearchMeta>[]>;
        info: (id: string | number) => Promise<import("../types").Info<LMangaInfoMeta, unknown>>;
        chapters: (id: string | number) => Promise<import("../types").Chapter<unknown>[]>;
        pages: (params: {
            id: string | number;
            chapterId: string | number;
            lang?: string;
        }) => Promise<import("../types").Page[]>;
    };
    MangaDex: (apiKey: string) => {
        search: (q: string) => Promise<import("../types").Search<MDXSearchMeta>[]>;
        info: (id: string | number) => Promise<import("../types").Info<MDXInfoMeta, unknown>>;
        chapters: (id: string | number) => Promise<import("../types").Chapter<unknown>[]>;
        pages: (params: {
            id: string | number;
            chapterId: string | number;
            lang?: string;
        }) => Promise<import("../types").Page[]>;
    };
    MangaFire: (apiKey: string) => {
        search: (q: string) => Promise<import("../types").Search<MFSearchMeta>[]>;
        info: (id: string | number) => Promise<import("../types").Info<MFInfoMeta, unknown>>;
        chapters: (id: string | number) => Promise<import("../types").Chapter<unknown>[]>;
        pages: (params: {
            id: string | number;
            chapterId: string | number;
            lang?: string;
        }) => Promise<import("../types").Page[]>;
    };
};
export { Manga };
