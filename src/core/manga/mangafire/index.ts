import { MangaFetch } from '../../../helpers';
import type { MangaFireInfoMeta, MangaFireSearchMeta } from './types';

/**
 * Creates a MangaFire API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, chapters, pages
 *
 * @example
 * ```ts
 * const client = MangaFire(process.env.API_KEY);
 * const results = await client.search("berserk");
 * const info = await client.info(results[0].id);
 * const chapters = await client.chapters(results[0].id);
 * ```
 */
export const MangaFire = (apiKey: string) =>
  MangaFetch<MangaFireSearchMeta, MangaFireInfoMeta>({
    provider: 'mangafire',
    apiKey,
  });

export * from './types';
