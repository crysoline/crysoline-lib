import { MangaFetch } from '../../../helpers';
import type { MbbcdnChapterMeta, MbbcdnInfoMeta, MbbcdnSearchMeta } from './types';

/**
 * Creates a BoxManhwa API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, chapters, pages
 *
 * @example
 * ```ts
 * const client = BoxManhwa(process.env.API_KEY);
 * const results = await client.search("one piece");
 * const info = await client.info(results[0].id);
 * const chapters = await client.chapters(results[0].id);
 * ```
 */
export const BoxManhwa = (apiKey: string) =>
  MangaFetch<MbbcdnSearchMeta, MbbcdnInfoMeta, MbbcdnChapterMeta>({
    provider: 'boxmanhwa',
    apiKey,
  });

/**
 * Creates a MangaCute API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, chapters, pages
 *
 * @example
 * ```ts
 * const client = MangaCute(process.env.API_KEY);
 * const results = await client.search("one piece");
 * const info = await client.info(results[0].id);
 * const chapters = await client.chapters(results[0].id);
 * ```
 */
export const MangaCute = (apiKey: string) =>
  MangaFetch<MbbcdnSearchMeta, MbbcdnInfoMeta, MbbcdnChapterMeta>({
    provider: 'mangacute',
    apiKey,
  });

/**
 * Creates a MangaFab API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, chapters, pages
 *
 * @example
 * ```ts
 * const client = MangaFab(process.env.API_KEY);
 * const results = await client.search("one piece");
 * const info = await client.info(results[0].id);
 * const chapters = await client.chapters(results[0].id);
 * ```
 */
export const MangaFab = (apiKey: string) =>
  MangaFetch<MbbcdnSearchMeta, MbbcdnInfoMeta, MbbcdnChapterMeta>({
    provider: 'mangafab',
    apiKey,
  });

/**
 * Creates a MangaForest API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, chapters, pages
 *
 * @example
 * ```ts
 * const client = MangaForest(process.env.API_KEY);
 * const results = await client.search("one piece");
 * const info = await client.info(results[0].id);
 * const chapters = await client.chapters(results[0].id);
 * ```
 */
export const MangaForest = (apiKey: string) =>
  MangaFetch<MbbcdnSearchMeta, MbbcdnInfoMeta, MbbcdnChapterMeta>({
    provider: 'mangaforest',
    apiKey,
  });

/**
 * Creates a MangaPuma API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, chapters, pages
 *
 * @example
 * ```ts
 * const client = MangaPuma(process.env.API_KEY);
 * const results = await client.search("one piece");
 * const info = await client.info(results[0].id);
 * const chapters = await client.chapters(results[0].id);
 * ```
 */
export const MangaPuma = (apiKey: string) =>
  MangaFetch<MbbcdnSearchMeta, MbbcdnInfoMeta, MbbcdnChapterMeta>({
    provider: 'mangapuma',
    apiKey,
  });

/**
 * Creates a MangaSaga API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, chapters, pages
 *
 * @example
 * ```ts
 * const client = MangaSaga(process.env.API_KEY);
 * const results = await client.search("one piece");
 * const info = await client.info(results[0].id);
 * const chapters = await client.chapters(results[0].id);
 * ```
 */
export const MangaSaga = (apiKey: string) =>
  MangaFetch<MbbcdnSearchMeta, MbbcdnInfoMeta, MbbcdnChapterMeta>({
    provider: 'mangasaga',
    apiKey,
  });

/**
 * Creates a MangaSpin API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, chapters, pages
 *
 * @example
 * ```ts
 * const client = MangaSpin(process.env.API_KEY);
 * const results = await client.search("one piece");
 * const info = await client.info(results[0].id);
 * const chapters = await client.chapters(results[0].id);
 * ```
 */
export const MangaSpin = (apiKey: string) =>
  MangaFetch<MbbcdnSearchMeta, MbbcdnInfoMeta, MbbcdnChapterMeta>({
    provider: 'mangaspin',
    apiKey,
  });

/**
 * Creates a MangaXYZ API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, chapters, pages
 *
 * @example
 * ```ts
 * const client = MangaXYZ(process.env.API_KEY);
 * const results = await client.search("one piece");
 * const info = await client.info(results[0].id);
 * const chapters = await client.chapters(results[0].id);
 * ```
 */
export const MangaXYZ = (apiKey: string) =>
  MangaFetch<MbbcdnSearchMeta, MbbcdnInfoMeta, MbbcdnChapterMeta>({
    provider: 'mangaxyz',
    apiKey,
  });

/**
 * Creates a ManhuaNow API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, chapters, pages
 *
 * @example
 * ```ts
 * const client = ManhuaNow(process.env.API_KEY);
 * const results = await client.search("one piece");
 * const info = await client.info(results[0].id);
 * const chapters = await client.chapters(results[0].id);
 * ```
 */
export const ManhuaNow = (apiKey: string) =>
  MangaFetch<MbbcdnSearchMeta, MbbcdnInfoMeta, MbbcdnChapterMeta>({
    provider: 'manhuanow',
    apiKey,
  });

/**
 * Creates a ManhuaSite API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, chapters, pages
 *
 * @example
 * ```ts
 * const client = ManhuaSite(process.env.API_KEY);
 * const results = await client.search("one piece");
 * const info = await client.info(results[0].id);
 * const chapters = await client.chapters(results[0].id);
 * ```
 */
export const ManhuaSite = (apiKey: string) =>
  MangaFetch<MbbcdnSearchMeta, MbbcdnInfoMeta, MbbcdnChapterMeta>({
    provider: 'manhuasite',
    apiKey,
  });

/**
 * Creates a TrueManga API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, chapters, pages
 *
 * @example
 * ```ts
 * const client = TrueManga(process.env.API_KEY);
 * const results = await client.search("one piece");
 * const info = await client.info(results[0].id);
 * const chapters = await client.chapters(results[0].id);
 * ```
 */
export const TrueManga = (apiKey: string) =>
  MangaFetch<MbbcdnSearchMeta, MbbcdnInfoMeta, MbbcdnChapterMeta>({
    provider: 'truemanga',
    apiKey,
  });

export * from './types';
