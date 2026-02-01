import { MangaFetch } from '../../../helpers';
import type { WeebCentralInfoMeta, WeebCentralSearchMeta } from './types';

/**
 * Creates a WeebCentral API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, chapters, pages
 *
 * @example
 * ```ts
 * const client = WeebCentral(process.env.API_KEY);
 * const results = await client.search("one piece");
 * const info = await client.info(results[0].id);
 * const chapters = await client.chapters(results[0].id);
 * ```
 */
export const WeebCentral = (apiKey: string) =>
  MangaFetch<WeebCentralSearchMeta, WeebCentralInfoMeta>({
    provider: 'weebcentral',
    apiKey,
  });

export * from './types';
