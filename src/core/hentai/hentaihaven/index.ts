import { HentaiFetch } from '../../../helpers';
import type { HavenEpisodeMeta, HavenInfoMeta, HavenSourceMeta } from './types';

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
export const HentaiHaven = (apiKey: string) =>
  HentaiFetch<unknown, HavenInfoMeta, HavenEpisodeMeta, HavenSourceMeta>({
    provider: 'hentaihaven',
    apiKey,
  });

export * from './types';
