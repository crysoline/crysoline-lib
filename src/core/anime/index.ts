import { AnimeFetch } from '../../helpers/fetch';
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

const OneTwoThreeAnime = (apiKey: string) =>
  AnimeFetch<OneTwoThreeAnimeSearchMeta, OneTwoThreeAnimeInfoMeta>({
    provider: 'onetwothreeanime',
    apiKey,
  });

const AnimeParadise = (apiKey: string) =>
  AnimeFetch({
    provider: 'animeparadise',
    apiKey,
  });

const AnimeHeaven = (apiKey: string) =>
  AnimeFetch({
    provider: 'animeheaven',
    apiKey,
  });

const AnimeKai = (apiKey: string) =>
  AnimeFetch<KaiSearchMeta, KaiInfoMeta, KaiEpisodeMeta>({
    provider: 'animekai',
    apiKey,
  });

const AnimeNexus = (apiKey: string) =>
  AnimeFetch<NSearchMeta, NInfoMeta, NEpisodeMeta>({
    provider: 'animenexus',
    apiKey,
  });

const AnimeOnsen = (apiKey: string) =>
  AnimeFetch<unknown, OInfoMeta, OEpisodeMeta>({
    provider: 'animeonsen',
    apiKey,
  });

const AnimePahe = (apiKey: string) =>
  AnimeFetch<PaheSearchMeta, PaheInfoMeta, PaheEpisodeMeta>({
    provider: 'animepahe',
    apiKey,
  });

const AniZone = (apiKey: string) =>
  AnimeFetch<AZSearchMeta, AZInfoMeta, AZEpisodeMeta>({
    provider: 'anizone',
    apiKey,
  });

const HiAnime = (apiKey: string) =>
  AnimeFetch<HianimeSearchMeta, HianimeInfoMeta, HianimeEpisodeMeta>({
    provider: 'hianime',
    apiKey,
  });

const KickAssAnime = (apiKey: string) =>
  AnimeFetch<KSearchMeta, KInfoMeta, KEpisodeMeta, KSourceMeta>({
    provider: 'kickassanime',
    apiKey,
  });

const LunarAnime = (apiKey: string) =>
  AnimeFetch<LSearchMeta, LInfoMeta, LEpisodeMeta, LSourcesMeta>({
    provider: 'lunaranime',
    apiKey,
  });

const UniqueStream = (apiKey: string) =>
  AnimeFetch<UniqueSearchMeta, UniqueInfoMeta, UniqueEpisodeMeta>({
    provider: 'uniquestream',
    apiKey,
  });

const Anime = {
  OneTwoThreeAnime,
  AnimeParadise,
  AnimeHeaven,
  AnimeKai,
  AnimeNexus,
  AnimeOnsen,
  AnimePahe,
  AniZone,
  HiAnime,
  KickAssAnime,
  LunarAnime,
  UniqueStream,
};

export { Anime };
