import type { LMangaInfoMeta, LMangaSearchMeta } from './lunar';
import type { MDXInfoMeta, MDXSearchMeta } from './mangadex';
import type { MFInfoMeta, MFSearchMeta } from './mangafire';
declare const Manga: {
    LunarManga: (apiKey: string) => import("../../helpers/fetch").MangaFetchModule<LMangaSearchMeta, LMangaInfoMeta, unknown>;
    MangaDex: (apiKey: string) => import("../../helpers/fetch").MangaFetchModule<MDXSearchMeta, MDXInfoMeta, unknown>;
    MangaFire: (apiKey: string) => import("../../helpers/fetch").MangaFetchModule<MFSearchMeta, MFInfoMeta, unknown>;
};
export { Manga };
