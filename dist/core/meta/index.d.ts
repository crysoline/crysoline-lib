import type { MInfoMeta, MSearchMeta } from './myanimelist';
import type { MMLInfoMeta, MMSearchMeta } from './mymangalist';
declare const Meta: {
    MyAnimeList: (apiKey: string) => {
        search: (q: string) => Promise<import("../types").Search<MSearchMeta>[]>;
        info: (id: string | number) => Promise<import("../types").Info<MInfoMeta, unknown>>;
    };
    MyMangaList: (apiKey: string) => {
        search: (q: string) => Promise<import("../types").Search<MMSearchMeta>[]>;
        info: (id: string | number) => Promise<import("../types").Info<MMLInfoMeta, unknown>>;
    };
};
export { Meta };
