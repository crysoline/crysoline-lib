import { HentaiFetch } from '../../../helpers';
import type { WatchHentaiEpisodeMeta, WatchHentaiInfoMeta, WatchHentaiSearchMeta } from './types';

/**
 * Creates an WatchHentai API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, episodes, sources
 *
 * @example
 * ```ts
 * const client = WatchHentai(process.env.API_KEY);
 * const results = await client.search("query");
 * const info = await client.info(results[0].id);
 * ```
 */
export const WatchHentai = (apiKey: string) =>
  HentaiFetch<WatchHentaiSearchMeta, WatchHentaiInfoMeta, WatchHentaiEpisodeMeta>({
    provider: 'watchhentai',
    apiKey,
  });

export * from './types';
