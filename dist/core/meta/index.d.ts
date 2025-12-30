import type { MInfoMeta, MSearchMeta } from './myanimelist';
import type { MMLInfoMeta, MMSearchMeta } from './mymangalist';
declare const Meta: {
    MyAnimeList: (apiKey: string) => import("../../helpers/fetch").MetaFetchModule<MSearchMeta, MInfoMeta>;
    MyMangaList: (apiKey: string) => import("../../helpers/fetch").MetaFetchModule<MMSearchMeta, MMLInfoMeta>;
};
export { Meta };
