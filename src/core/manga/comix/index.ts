import { MangaFetch } from '../../../helpers';
import type { ComixChapterMeta, ComixInfoMeta, ComixSearchMeta } from './types';

/**
 * Creates a Comix API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, chapters, pages
 *
 * @example
 * ```ts
 * const client = Comix(process.env.API_KEY);
 * const results = await client.search("one piece");
 * const info = await client.info(results[0].id);
 * const chapters = await client.chapters(results[0].id);
 * ```
 */
export const Comix = (apiKey: string) =>
  MangaFetch<ComixSearchMeta, ComixInfoMeta, ComixChapterMeta>({
    provider: 'comix',
    apiKey,
  });

export * from './types';
