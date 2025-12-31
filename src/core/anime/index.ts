import { AnimeFetch } from '../../helpers/fetch';
import type { OneTwoThreeAnimeInfoMeta, OneTwoThreeAnimeSearchMeta } from './123anime';
import type { KaiEpisodeMeta, KaiInfoMeta, KaiSearchMeta } from './animekai';
import type { NEpisodeMeta, NInfoMeta, NSearchMeta } from './animenexus';
import type { OEpisodeMeta, OInfoMeta } from './animeonsen';
import type { PaheEpisodeMeta, PaheInfoMeta, PaheSearchMeta } from './animepahe';
import type { AZEpisodeMeta, AZInfoMeta, AZSearchMeta } from './anizone';
import type {
  HianimeEpisodeMeta,
  HianimeInfoMeta,
  HianimeSearchMeta,
  HianimeServerMeta,
} from './hianime';
import type { KEpisodeMeta, KInfoMeta, KSearchMeta, KSourceMeta } from './kickassanime';
import type { LEpisodeMeta, LInfoMeta, LSearchMeta, LSourcesMeta } from './lunar';
import type { UniqueEpisodeMeta, UniqueInfoMeta, UniqueSearchMeta } from './uniquestream';

/**
 * Creates a 123Anime API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = OneTwoThreeAnime(process.env.API_KEY);
 * const results = await client.search("naruto");
 * const info = await client.info(results[0].id);
 * ```
 */
const OneTwoThreeAnime = (apiKey: string) =>
  AnimeFetch<OneTwoThreeAnimeSearchMeta, OneTwoThreeAnimeInfoMeta>({
    provider: 'onetwothreeanime',
    apiKey,
  });

/**
 * Creates an AnimeParadise API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = AnimeParadise(process.env.API_KEY);
 * const results = await client.search("one piece");
 * const episodes = await client.episodes(results[0].id);
 * ```
 */
const AnimeParadise = (apiKey: string) =>
  AnimeFetch({
    provider: 'animeparadise',
    apiKey,
  });

/**
 * Creates an AnimeHeaven API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = AnimeHeaven(process.env.API_KEY);
 * const results = await client.search("demon slayer");
 * const info = await client.info(results[0].id);
 * ```
 */
const AnimeHeaven = (apiKey: string) =>
  AnimeFetch({
    provider: 'animeheaven',
    apiKey,
  });

/**
 * Creates an AnimeKai API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = AnimeKai(process.env.API_KEY);
 * const results = await client.search("attack on titan");
 * const episodes = await client.episodes(results[0].id);
 * ```
 */
const AnimeKai = (apiKey: string) =>
  AnimeFetch<KaiSearchMeta, KaiInfoMeta, KaiEpisodeMeta>({
    provider: 'animekai',
    apiKey,
  });

/**
 * Creates an AnimeNexus API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = AnimeNexus(process.env.API_KEY);
 * const results = await client.search("jujutsu kaisen");
 * const info = await client.info(results[0].id);
 * ```
 */
const AnimeNexus = (apiKey: string) =>
  AnimeFetch<NSearchMeta, NInfoMeta, NEpisodeMeta>({
    provider: 'animenexus',
    apiKey,
  });

/**
 * Creates an AnimeOnsen API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = AnimeOnsen(process.env.API_KEY);
 * const results = await client.search("my hero academia");
 * const episodes = await client.episodes(results[0].id);
 * ```
 */
const AnimeOnsen = (apiKey: string) =>
  AnimeFetch<unknown, OInfoMeta, OEpisodeMeta>({
    provider: 'animeonsen',
    apiKey,
  });

/**
 * Creates an AnimePahe API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = AnimePahe(process.env.API_KEY);
 * const results = await client.search("chainsaw man");
 * const info = await client.info(results[0].id);
 * ```
 */
const AnimePahe = (apiKey: string) =>
  AnimeFetch<PaheSearchMeta, PaheInfoMeta, PaheEpisodeMeta>({
    provider: 'animepahe',
    apiKey,
  });

/**
 * Creates an AniZone API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = AniZone(process.env.API_KEY);
 * const results = await client.search("spy x family");
 * const episodes = await client.episodes(results[0].id);
 * ```
 */
const AniZone = (apiKey: string) =>
  AnimeFetch<AZSearchMeta, AZInfoMeta, AZEpisodeMeta>({
    provider: 'anizone',
    apiKey,
  });

/**
 * Creates a HiAnime API client.
 *
 * **Full-featured provider with server selection support.**
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources, servers
 *
 * @example
 * ```ts
 * const client = HiAnime(process.env.API_KEY);
 *
 * // Search for anime
 * const results = await client.search("alya");
 *
 * // Get anime info
 * const info = await client.info(results[0].id);
 *
 * // Get episodes
 * const episodes = await client.episodes(results[0].id);
 *
 * // Get available servers
 * const servers = await client.servers({
 *   id: results[0].id,
 *   episodeId: episodes[0].id
 * });
 *
 * // Get streaming sources
 * const sources = await client.sources({
 *   id: results[0].id,
 *   episodeId: episodes[0].id,
 *   subType: "sub"
 * });
 * ```
 */
const HiAnime = (apiKey: string) =>
  AnimeFetch<
    HianimeSearchMeta,
    HianimeInfoMeta,
    HianimeEpisodeMeta,
    unknown,
    HianimeServerMeta,
    {
      search: true;
      info: true;
      episodes: true;
      sources: true;
      servers: true;
    }
  >({
    provider: 'hianime',
    apiKey,
  });

/**
 * Creates a KickAssAnime API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = KickAssAnime(process.env.API_KEY);
 * const results = await client.search("vinland saga");
 * const sources = await client.sources({
 *   id: results[0].id,
 *   episodeId: "ep-1"
 * });
 * ```
 */
const KickAssAnime = (apiKey: string) =>
  AnimeFetch<KSearchMeta, KInfoMeta, KEpisodeMeta, KSourceMeta>({
    provider: 'kickassanime',
    apiKey,
  });

/**
 * Creates a LunarAnime API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = LunarAnime(process.env.API_KEY);
 * const results = await client.search("bleach");
 * const info = await client.info(results[0].id);
 * const episodes = await client.episodes(results[0].id);
 * ```
 */
const LunarAnime = (apiKey: string) =>
  AnimeFetch<LSearchMeta, LInfoMeta, LEpisodeMeta, LSourcesMeta>({
    provider: 'lunaranime',
    apiKey,
  });

/**
 * Creates a UniqueStream API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = UniqueStream(process.env.API_KEY);
 * const results = await client.search("solo leveling");
 * const episodes = await client.episodes(results[0].id);
 * ```
 */
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
