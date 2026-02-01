import { AnimeFetch } from '../../../helpers';

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
export const AnimeParadise = (apiKey: string) =>
  AnimeFetch({
    provider: 'animeparadise',
    apiKey,
  });
