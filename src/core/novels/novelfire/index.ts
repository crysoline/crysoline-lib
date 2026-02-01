import { NovelFetch } from '../../../helpers';
import type { NovelFireSearchMeta } from './types';

/**
 * Creates a NovelFire API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, chapters, pages
 *
 * @example
 * ```ts
 * const client = NovelFire(process.env.API_KEY);
 * const results = await client.search("one piece");
 * const info = await client.info(results[0].id);
 * const chapters = await client.chapters(results[0].id);
 * ```
 */
export const NovelFire = (apiKey: string) =>
  NovelFetch<NovelFireSearchMeta>({
    provider: 'novelfire',
    apiKey,
  });

export * from './types';
