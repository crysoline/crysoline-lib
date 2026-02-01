import { AnimeFetch } from '../../../helpers';
import type { AnimeLibInfoMeta, AnimeLibSearchMeta } from './types';

/**
 * Creates a AnimeLib API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources, servers
 *
 * @example
 * ```ts
 * const client = AnimeLib(process.env.API_KEY);
 * const results = await client.search("naruto");
 * const info = await client.info(results[0].id);
 * ```
 */
export const AnimeLib = (apiKey: string) =>
  AnimeFetch<
    AnimeLibSearchMeta,
    AnimeLibInfoMeta,
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
    provider: 'animelib',
    apiKey,
  });

export * from './types';
