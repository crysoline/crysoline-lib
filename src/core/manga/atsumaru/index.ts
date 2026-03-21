import { MangaFetch } from '../../../helpers';
import type { AtsumaruChapterMeta, AtsumaruInfoMeta, AtsumaruSearchMeta } from './types';

/**
 * Creates a Atsumaru API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, chapters, pages
 *
 * @example
 * ```ts
 * const client = Atsumaru(process.env.API_KEY);
 * const results = await client.search("one piece");
 * const info = await client.info(results[0].id);
 * const chapters = await client.chapters(results[0].id);
 * ```
 */
export const Atsumaru = (apiKey: string) =>
  MangaFetch<AtsumaruSearchMeta, AtsumaruInfoMeta, AtsumaruChapterMeta>({
    provider: 'atsumaru',
    apiKey,
  });

export * from './types';
