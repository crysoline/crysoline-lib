import { AnimeFetch } from '../../../helpers';
import type {
  UniqueStreamEpisodeMeta,
  UniqueStreamInfoMeta,
  UniqueStreamSearchMeta,
} from './types';

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
export const UniqueStream = (apiKey: string) =>
  AnimeFetch<UniqueStreamSearchMeta, UniqueStreamInfoMeta, UniqueStreamEpisodeMeta>({
    provider: 'uniquestream',
    apiKey,
  });

export * from './types';
