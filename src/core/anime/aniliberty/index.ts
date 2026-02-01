import { AnimeFetch } from '../../../helpers';
import type { AnilibertyEpisodeMeta, AnilibertyInfoMeta, AnilibertySearchMeta } from './types';

/**
 * Creates a Aniliberty API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = Aniliberty(process.env.API_KEY);
 * const results = await client.search("naruto");
 * const info = await client.info(results[0].id);
 * ```
 */
export const Aniliberty = (apiKey: string) =>
  AnimeFetch<AnilibertySearchMeta, AnilibertyInfoMeta, AnilibertyEpisodeMeta>({
    provider: 'aniliberty',
    apiKey,
  });

export * from './types';
