import { AnimeFetch } from "../../helpers/fetch";
import type {
  OneTwoThreeAnimeInfoMeta,
  OneTwoThreeAnimeSearchMeta,
} from "./123anime";
import type { ALEpisodeMeta, ALInfoMeta, ALSearchMeta } from "./aniliberty";
import type { A3RBInfoMeta, AnimeRBSrcMeta } from "./anime3rb";
import type {
  AVEpisodeMeta,
  AVInfoMeta,
  AVSearchMeta,
  AVSourceMeta,
} from "./animeav1";
import type { AGGEpisodeMeta, AGGInfoMeta, AGGSearchMeta } from "./animegg";
import type { KaiEpisodeMeta, KaiInfoMeta, KaiSearchMeta } from "./animekai";
import type { ALIBInfoMeta, ALIBSearchMeta } from "./animelib";
import type { AnimeMeowSearchMeta } from "./animemeow";
import type { NEpisodeMeta, NInfoMeta, NSearchMeta } from "./animenexus";
import type { AnimeNixEpisodeMeta, AnimeNixSearchMeta } from "./animenix";
import type { OEpisodeMeta, OInfoMeta } from "./animeonsen";
import type {
  PaheEpisodeMeta,
  PaheInfoMeta,
  PaheSearchMeta,
} from "./animepahe";
import type { AZEpisodeMeta, AZInfoMeta, AZSearchMeta } from "./anizone";
import type {
  HianimeEpisodeMeta,
  HianimeInfoMeta,
  HianimeSearchMeta,
  HianimeServerMeta,
} from "./hianime";
import type {
  KEpisodeMeta,
  KInfoMeta,
  KSearchMeta,
  KSourceMeta,
} from "./kickassanime";
import type {
  LEpisodeMeta,
  LInfoMeta,
  LSearchMeta,
  LSourcesMeta,
} from "./lunar";
import type {
  UniqueEpisodeMeta,
  UniqueInfoMeta,
  UniqueSearchMeta,
} from "./uniquestream";

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
    provider: "onetwothreeanime",
    apiKey,
  });

/**
 * Creates an Aniliberty API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = Aniliberty(process.env.API_KEY);
 * const results = await client.search("one piece");
 * const info = await client.info(results[0].id);
 * ```
 */
const Aniliberty = (apiKey: string) =>
  AnimeFetch<ALSearchMeta, ALInfoMeta, ALEpisodeMeta>({
    provider: "aniliberty",
    apiKey,
  });

/**
 * Creates an Anime3rb API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = Anime3rb(process.env.API_KEY);
 * const info = await client.info("anime-id");
 * const sources = await client.sources({
 *   id: "anime-id",
 *   episodeId: "ep-1"
 * });
 * ```
 */
const Anime3rb = (apiKey: string) =>
  AnimeFetch<unknown, A3RBInfoMeta, unknown, AnimeRBSrcMeta>({
    provider: "anime3rb",
    apiKey,
  });

/**
 * Creates an AnimeAV1 API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = AnimeAV1(process.env.API_KEY);
 * const results = await client.search("naruto");
 * const episodes = await client.episodes(results[0].id);
 * ```
 */
const AnimeAV1 = (apiKey: string) =>
  AnimeFetch<AVSearchMeta, AVInfoMeta, AVEpisodeMeta, AVSourceMeta>({
    provider: "animeav1",
    apiKey,
  });

/**
 * Creates an AnimeGG API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = AnimeGG(process.env.API_KEY);
 * const results = await client.search("tokyo ghoul");
 * const info = await client.info(results[0].id);
 * ```
 */
const AnimeGG = (apiKey: string) =>
  AnimeFetch<AGGSearchMeta, AGGInfoMeta, AGGEpisodeMeta>({
    provider: "animegg",
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
    provider: "animeparadise",
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
    provider: "animeheaven",
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
    provider: "animekai",
    apiKey,
  });

/**
 * Creates an AnimeLib API client.
 *
 * **Supports multiple servers for streaming.**
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources, servers
 *
 * @example
 * ```ts
 * const client = AnimeLib(process.env.API_KEY);
 * const results = await client.search("dragon ball");
 * const servers = await client.servers({
 *   id: results[0].id,
 *   episodeId: "ep-1"
 * });
 * ```
 */
const AnimeLib = (apiKey: string) =>
  AnimeFetch<
    ALIBSearchMeta,
    ALIBInfoMeta,
    unknown,
    unknown,
    unknown,
    {
      search: true;
      info: true;
      episodes: true;
      sources: true;
      servers: true;
    }
  >({
    provider: "animelib",
    apiKey,
  });

/**
 * Creates an AnimeMeow API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
/**
 * Creates an AnimeNix API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = AnimeNix(process.env.API_KEY);
 * const results = await client.search("fate");
 * const episodes = await client.episodes(results[0].id);
 * ```
 */
 * ```ts
 * const client = AnimeMeow(process.env.API_KEY);
 * const results = await client.search("cowboy bebop");
 * ```
 */
const AnimeMeow = (apiKey: string) =>
  AnimeFetch<AnimeMeowSearchMeta>({
    provider: "animemeow",
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
    provider: "animenexus",
    apiKey,
  });

const AnimeNix = (apiKey: string) =>
  AnimeFetch<AnimeNixSearchMeta, unknown, AnimeNixEpisodeMeta>({
    provider: "animenix",
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
    provider: "animeonsen",
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
    provider: "animepahe",
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
    provider: "anizone",
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
    provider: "hianime",
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
    provider: "kickassanime",
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
    provider: "lunaranime",
    apiKey,
  });

/**
 * Creates a UniqueStream API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
/**
 * Collection of all available anime streaming provider clients.
 *
 * Each provider requires an API key for authentication.
 * All providers share the same interface with methods:
 * - `search(query)` - Search for anime
 * - `info(id)` - Get detailed anime information
 * - `episodes(id)` - Get episode list
 * - `sources(params)` - Get streaming sources
 * - `servers(params)` - Get available servers (provider-specific)
 *
 * @example
 * ```ts
 * import { Anime } from "crysoline";
 *
 * const client = Anime.HiAnime(process.env.API_KEY);
 * const results = await client.search("demon slayer");
 * const info = await client.info(results[0].id);
 * const episodes = await client.episodes(results[0].id);
 * const sources = await client.sources({
 *   id: results[0].id,
 *   episodeId: episodes[0].id,
 *   subType: "sub"
 * });
 * ```
 */
 * @example
 * ```ts
 * const client = UniqueStream(process.env.API_KEY);
 * const results = await client.search("solo leveling");
 * const episodes = await client.episodes(results[0].id);
 * ```
 */
const UniqueStream = (apiKey: string) =>
  AnimeFetch<UniqueSearchMeta, UniqueInfoMeta, UniqueEpisodeMeta>({
    provider: "uniquestream",
    apiKey,
  });

const Anime = {
  OneTwoThreeAnime,
  Aniliberty,
  Anime3rb,
  AnimeAV1,
  AnimeGG,
  AnimeParadise,
  AnimeHeaven,
  AnimeKai,
  AnimeLib,
  AnimeMeow,
  AnimeNexus,
  AnimeNix,
  AnimeOnsen,
  AnimePahe,
  AniZone,
  HiAnime,
  KickAssAnime,
  LunarAnime,
  UniqueStream,
};

export { Anime };
