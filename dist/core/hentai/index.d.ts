import type { HianimeEpisodeMeta } from '../anime/hianime';
import type { HAnimeInfoMeta, HAnimeSearchMeta } from './hanime';
import type { HavenEpisodeMeta, HavenInfoMeta, HavenSourceMeta } from './hentaihaven';
import type { HStreamSearchMeta } from './hstream';
declare const Hentai: {
    HAnime: (apiKey: string) => {
        search: (q: string) => Promise<import("../types").Search<HAnimeSearchMeta>[]>;
        info: (id: string | number) => Promise<import("../types").Info<HAnimeInfoMeta, import("../types").Episode<HianimeEpisodeMeta>>>;
        episodes: (id: string | number) => Promise<import("../types").Episode<HianimeEpisodeMeta>[]>;
        sources: (params: {
            id: string | number;
            episodeId: string | number;
            subType?: string;
            server?: string;
        }) => Promise<import("../types").Source<unknown>>;
    };
    HentaiHaven: (apiKey: string) => {
        search: (q: string) => Promise<import("../types").Search<unknown>[]>;
        info: (id: string | number) => Promise<import("../types").Info<HavenInfoMeta, import("../types").Episode<HavenEpisodeMeta>>>;
        episodes: (id: string | number) => Promise<import("../types").Episode<HavenEpisodeMeta>[]>;
        sources: (params: {
            id: string | number;
            episodeId: string | number;
            subType?: string;
            server?: string;
        }) => Promise<import("../types").Source<HavenSourceMeta>>;
    };
    HStream: (apiKey: string) => {
        search: (q: string) => Promise<import("../types").Search<HStreamSearchMeta>[]>;
        info: (id: string | number) => Promise<import("../types").Info<unknown, import("../types").Episode<unknown>>>;
        episodes: (id: string | number) => Promise<import("../types").Episode<unknown>[]>;
        sources: (params: {
            id: string | number;
            episodeId: string | number;
            subType?: string;
            server?: string;
        }) => Promise<import("../types").Source<unknown>>;
    };
};
export { Hentai };
