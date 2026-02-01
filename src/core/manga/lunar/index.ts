import { MangaFetch } from '../../../helpers';
import type { LunarMangaInfoMeta, LunarMangaSearchMeta } from './types';

/**
 * Creates a LunarManga API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, chapters, pages
 *
 * @example
 * ```ts
 * const client = LunarManga(process.env.API_KEY);
 * const results = await client.search("one piece");
 * const info = await client.info(results[0].id);
 * const chapters = await client.chapters(results[0].id);
 * ```
 */
export const LunarManga = (apiKey: string) =>
  MangaFetch<LunarMangaSearchMeta, LunarMangaInfoMeta>({
    provider: 'lunarmanga',
    apiKey,
  });

export * from './types';
