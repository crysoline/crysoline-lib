import type { OneTwoThreeAnimeInfoMeta, OneTwoThreeAnimeSearchMeta } from './123anime';
import type { KaiEpisodeMeta, KaiInfoMeta, KaiSearchMeta } from './animekai';
import type { NEpisodeMeta, NInfoMeta, NSearchMeta } from './animenexus';
import type { OEpisodeMeta, OInfoMeta } from './animeonsen';
import type { PaheEpisodeMeta, PaheInfoMeta, PaheSearchMeta } from './animepahe';
import type { AZEpisodeMeta, AZInfoMeta, AZSearchMeta } from './anizone';
import type { HianimeEpisodeMeta, HianimeInfoMeta, HianimeSearchMeta } from './hianime';
import type { KEpisodeMeta, KInfoMeta, KSearchMeta, KSourceMeta } from './kickassanime';
import type { LEpisodeMeta, LInfoMeta, LSearchMeta, LSourcesMeta } from './lunar';
import type { UniqueEpisodeMeta, UniqueInfoMeta, UniqueSearchMeta } from './uniquestream';
declare const Anime: {
    OneTwoThreeAnime: (apiKey: string) => {
        search: (q: string) => Promise<import("../types").Search<OneTwoThreeAnimeSearchMeta>[]>;
        info: (id: string | number) => Promise<import("../types").Info<OneTwoThreeAnimeInfoMeta, import("../types").Episode<unknown>>>;
        episodes: (id: string | number) => Promise<import("../types").Episode<unknown>[]>;
        sources: (params: {
            id: string | number;
            episodeId: string | number;
            subType?: string;
            server?: string;
        }) => Promise<import("../types").Source<unknown>>;
    };
    AnimeParadise: (apiKey: string) => {
        search: (q: string) => Promise<import("../types").Search<unknown>[]>;
        info: (id: string | number) => Promise<import("../types").Info<unknown, import("../types").Episode<unknown>>>;
        episodes: (id: string | number) => Promise<import("../types").Episode<unknown>[]>;
        sources: (params: {
            id: string | number;
            episodeId: string | number;
            subType?: string;
            server?: string;
        }) => Promise<import("../types").Source<unknown>>;
    };
    AnimeHeaven: (apiKey: string) => {
        search: (q: string) => Promise<import("../types").Search<unknown>[]>;
        info: (id: string | number) => Promise<import("../types").Info<unknown, import("../types").Episode<unknown>>>;
        episodes: (id: string | number) => Promise<import("../types").Episode<unknown>[]>;
        sources: (params: {
            id: string | number;
            episodeId: string | number;
            subType?: string;
            server?: string;
        }) => Promise<import("../types").Source<unknown>>;
    };
    AnimeKai: (apiKey: string) => {
        search: (q: string) => Promise<import("../types").Search<KaiSearchMeta>[]>;
        info: (id: string | number) => Promise<import("../types").Info<KaiInfoMeta, import("../types").Episode<KaiEpisodeMeta>>>;
        episodes: (id: string | number) => Promise<import("../types").Episode<KaiEpisodeMeta>[]>;
        sources: (params: {
            id: string | number;
            episodeId: string | number;
            subType?: string;
            server?: string;
        }) => Promise<import("../types").Source<unknown>>;
    };
    AnimeNexus: (apiKey: string) => {
        search: (q: string) => Promise<import("../types").Search<NSearchMeta>[]>;
        info: (id: string | number) => Promise<import("../types").Info<NInfoMeta, import("../types").Episode<NEpisodeMeta>>>;
        episodes: (id: string | number) => Promise<import("../types").Episode<NEpisodeMeta>[]>;
        sources: (params: {
            id: string | number;
            episodeId: string | number;
            subType?: string;
            server?: string;
        }) => Promise<import("../types").Source<unknown>>;
    };
    AnimeOnsen: (apiKey: string) => {
        search: (q: string) => Promise<import("../types").Search<unknown>[]>;
        info: (id: string | number) => Promise<import("../types").Info<OInfoMeta, import("../types").Episode<OEpisodeMeta>>>;
        episodes: (id: string | number) => Promise<import("../types").Episode<OEpisodeMeta>[]>;
        sources: (params: {
            id: string | number;
            episodeId: string | number;
            subType?: string;
            server?: string;
        }) => Promise<import("../types").Source<unknown>>;
    };
    AnimePahe: (apiKey: string) => {
        search: (q: string) => Promise<import("../types").Search<PaheSearchMeta>[]>;
        info: (id: string | number) => Promise<import("../types").Info<PaheInfoMeta, import("../types").Episode<PaheEpisodeMeta>>>;
        episodes: (id: string | number) => Promise<import("../types").Episode<PaheEpisodeMeta>[]>;
        sources: (params: {
            id: string | number;
            episodeId: string | number;
            subType?: string;
            server?: string;
        }) => Promise<import("../types").Source<unknown>>;
    };
    AniZone: (apiKey: string) => {
        search: (q: string) => Promise<import("../types").Search<AZSearchMeta>[]>;
        info: (id: string | number) => Promise<import("../types").Info<AZInfoMeta, import("../types").Episode<AZEpisodeMeta>>>;
        episodes: (id: string | number) => Promise<import("../types").Episode<AZEpisodeMeta>[]>;
        sources: (params: {
            id: string | number;
            episodeId: string | number;
            subType?: string;
            server?: string;
        }) => Promise<import("../types").Source<unknown>>;
    };
    HiAnime: (apiKey: string) => {
        search: (q: string) => Promise<import("../types").Search<HianimeSearchMeta>[]>;
        info: (id: string | number) => Promise<import("../types").Info<HianimeInfoMeta, import("../types").Episode<HianimeEpisodeMeta>>>;
        episodes: (id: string | number) => Promise<import("../types").Episode<HianimeEpisodeMeta>[]>;
        sources: (params: {
            id: string | number;
            episodeId: string | number;
            subType?: string;
            server?: string;
        }) => Promise<import("../types").Source<unknown>>;
    };
    KickAssAnime: (apiKey: string) => {
        search: (q: string) => Promise<import("../types").Search<KSearchMeta>[]>;
        info: (id: string | number) => Promise<import("../types").Info<KInfoMeta, import("../types").Episode<KEpisodeMeta>>>;
        episodes: (id: string | number) => Promise<import("../types").Episode<KEpisodeMeta>[]>;
        sources: (params: {
            id: string | number;
            episodeId: string | number;
            subType?: string;
            server?: string;
        }) => Promise<import("../types").Source<KSourceMeta>>;
    };
    LunarAnime: (apiKey: string) => {
        search: (q: string) => Promise<import("../types").Search<LSearchMeta>[]>;
        info: (id: string | number) => Promise<import("../types").Info<LInfoMeta, import("../types").Episode<LEpisodeMeta>>>;
        episodes: (id: string | number) => Promise<import("../types").Episode<LEpisodeMeta>[]>;
        sources: (params: {
            id: string | number;
            episodeId: string | number;
            subType?: string;
            server?: string;
        }) => Promise<import("../types").Source<LSourcesMeta>>;
    };
    UniqueStream: (apiKey: string) => {
        search: (q: string) => Promise<import("../types").Search<UniqueSearchMeta>[]>;
        info: (id: string | number) => Promise<import("../types").Info<UniqueInfoMeta, import("../types").Episode<UniqueEpisodeMeta>>>;
        episodes: (id: string | number) => Promise<import("../types").Episode<UniqueEpisodeMeta>[]>;
        sources: (params: {
            id: string | number;
            episodeId: string | number;
            subType?: string;
            server?: string;
        }) => Promise<import("../types").Source<unknown>>;
    };
};
export { Anime };
