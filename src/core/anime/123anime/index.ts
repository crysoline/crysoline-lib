import { AnimeFetch } from '../../../helpers';
import type { OneTwoThreeAnimeInfoMeta, OneTwoThreeAnimeSearchMeta } from './types';

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
export const OneTwoThreeAnime = (apiKey: string) =>
  AnimeFetch<OneTwoThreeAnimeSearchMeta, OneTwoThreeAnimeInfoMeta>({
    provider: 'onetwothreeanime',
    apiKey,
  });

export * from './types';
