import { HentaiFetch } from '../../helpers/fetch';
import type { HianimeEpisodeMeta } from '../anime/hianime';
import type { HAnimeInfoMeta, HAnimeSearchMeta } from './hanime';
import type { HavenEpisodeMeta, HavenInfoMeta, HavenSourceMeta } from './hentaihaven';
import type { HStreamSearchMeta } from './hstream';

const HAnime = (apiKey: string) =>
  HentaiFetch<HAnimeSearchMeta, HAnimeInfoMeta, HianimeEpisodeMeta>({
    provider: 'hanime',
    apiKey,
  });

const HentaiHaven = (apiKey: string) =>
  HentaiFetch<unknown, HavenInfoMeta, HavenEpisodeMeta, HavenSourceMeta>({
    provider: 'hentaihaven',
    apiKey,
  });

const HStream = (apiKey: string) =>
  HentaiFetch<HStreamSearchMeta>({
    provider: 'hstream',
    apiKey,
  });

const Hentai = {
  HAnime,
  HentaiHaven,
  HStream,
};

export { Hentai };
