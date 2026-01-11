import { HentaiFetch } from '../../helpers/fetch';
import type { HianimeEpisodeMeta } from '../anime/hianime';
import type { HAnimeInfoMeta, HAnimeSearchMeta } from './hanime';
import type { HavenEpisodeMeta, HavenInfoMeta, HavenSourceMeta } from './hentaihaven';
import type { HStreamSearchMeta } from './hstream';
import type { WHEpisodeMeta, WHInfoMeta, WHSearchMeta } from './watchhentai';

/**
 * Creates an HAnime API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = HAnime(process.env.API_KEY);
 * const results = await client.search("query");
 * const info = await client.info(results[0].id);
 * const episodes = await client.episodes(results[0].id);
 * ```
 */
const HAnime = (apiKey: string) =>
  HentaiFetch<HAnimeSearchMeta, HAnimeInfoMeta, HianimeEpisodeMeta>({
    provider: 'hanime',
    apiKey,
  });

/**
 * Creates a HentaiHaven API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = HentaiHaven(process.env.API_KEY);
 * const info = await client.info("content-id");
 * const sources = await client.sources({
 *   id: "content-id",
 *   episodeId: "ep-1"
 * });
 * ```
 */
const HentaiHaven = (apiKey: string) =>
  HentaiFetch<unknown, HavenInfoMeta, HavenEpisodeMeta, HavenSourceMeta>({
    provider: 'hentaihaven',
    apiKey,
  });

/**
 * Creates an HStream API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = HStream(process.env.API_KEY);
 * const results = await client.search("query");
 * const info = await client.info(results[0].id);
 * ```
 */
const HStream = (apiKey: string) =>
  HentaiFetch<HStreamSearchMeta>({
    provider: 'hstream',
    apiKey,
  });

const WatchHentai = (apiKey: string) =>
  HentaiFetch<WHSearchMeta, WHInfoMeta, WHEpisodeMeta>({
    provider: 'watchhentai',
    apiKey,
  });

const Hentai = {
  HAnime,
  HentaiHaven,
  HStream,
  WatchHentai,
};

export { Hentai };

export * from './hanime';
export * from './hentaihaven';
export * from './hstream';
export * from './watchhentai';
