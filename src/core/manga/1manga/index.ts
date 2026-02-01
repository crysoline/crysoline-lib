import { MangaFetch } from '../../../helpers';

/**
 * Creates a OneManga API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, chapters, pages
 *
 * @example
 * ```ts
 * const client = OneManga(process.env.API_KEY);
 * const results = await client.search("one piece");
 * const info = await client.info(results[0].id);
 * const chapters = await client.chapters(results[0].id);
 * ```
 */
export const OneManga = (apiKey: string) =>
  MangaFetch({
    provider: '1manga',
    apiKey,
  });

export * from './types';
