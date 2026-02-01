import { MangaFetch } from '../../../helpers';
import type { MangaDexInfoMeta, MangaDexSearchMeta } from './types';

/**
 * Creates a MangaDex API client.
 *
 * **Popular provider with multi-language support.**
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, chapters, pages
 *
 * @example
 * ```ts
 * const client = MangaDex(process.env.API_KEY);
 * const results = await client.search("chainsaw man");
 * const chapters = await client.chapters(results[0].id);
 * ```
 */
export const MangaDex = (apiKey: string) =>
  MangaFetch<MangaDexSearchMeta, MangaDexInfoMeta>({
    provider: 'mangadex',
    apiKey,
  });

export * from './types';
