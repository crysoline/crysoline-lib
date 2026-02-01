import { AnimeFetch } from '../../../helpers';
import type {
  AnimeAV1EpisodeMeta,
  AnimeAV1InfoMeta,
  AnimeAV1SearchMeta,
  AnimeAV1SourceMeta,
} from './types';

/**
 * Creates a AnimeAV1 API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = AnimeAV1(process.env.API_KEY);
 * const results = await client.search("naruto");
 * const info = await client.info(results[0].id);
 * ```
 */
export const AnimeAV1 = (apiKey: string) =>
  AnimeFetch<AnimeAV1SearchMeta, AnimeAV1InfoMeta, AnimeAV1EpisodeMeta, AnimeAV1SourceMeta>({
    provider: 'animeav1',
    apiKey,
  });

export * from './types';
