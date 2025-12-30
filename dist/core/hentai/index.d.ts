import type { HianimeEpisodeMeta } from '../anime/hianime';
import type { HAnimeInfoMeta, HAnimeSearchMeta } from './hanime';
import type { HavenEpisodeMeta, HavenInfoMeta, HavenSourceMeta } from './hentaihaven';
import type { HStreamSearchMeta } from './hstream';
declare const Hentai: {
    HAnime: (apiKey: string) => import("../../helpers/fetch").HentaiFetchModule<HAnimeSearchMeta, HAnimeInfoMeta, HianimeEpisodeMeta, unknown>;
    HentaiHaven: (apiKey: string) => import("../../helpers/fetch").HentaiFetchModule<unknown, HavenInfoMeta, HavenEpisodeMeta, HavenSourceMeta>;
    HStream: (apiKey: string) => import("../../helpers/fetch").HentaiFetchModule<HStreamSearchMeta, unknown, unknown, unknown>;
};
export { Hentai };
