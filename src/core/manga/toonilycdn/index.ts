import { MangaFetch } from '../../../helpers';
import type { ToonilyCdnChapterMeta, ToonilyCdnInfoMeta, ToonilyCdnSearchMeta } from './types';

/**
 * Creates a TooniClub API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, chapters, pages
 *
 * @example
 * ```ts
 * const client = TooniClub(process.env.API_KEY);
 * const results = await client.search("one piece");
 * const info = await client.info(results[0].id);
 * const chapters = await client.chapters(results[0].id);
 * ```
 */
export const TooniClub = (apiKey: string) =>
  MangaFetch<ToonilyCdnSearchMeta, ToonilyCdnInfoMeta, ToonilyCdnChapterMeta>({
    provider: 'tooniclub',
    apiKey,
  });

/**
 * Creates a TooniFab API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, chapters, pages
 *
 * @example
 * ```ts
 * const client = TooniFab(process.env.API_KEY);
 * const results = await client.search("one piece");
 * const info = await client.info(results[0].id);
 * const chapters = await client.chapters(results[0].id);
 * ```
 */
export const TooniFab = (apiKey: string) =>
  MangaFetch<ToonilyCdnSearchMeta, ToonilyCdnInfoMeta, ToonilyCdnChapterMeta>({
    provider: 'toonifab',
    apiKey,
  });

/**
 * Creates a Toonily API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, chapters, pages
 *
 * @example
 * ```ts
 * const client = Toonily(process.env.API_KEY);
 * const results = await client.search("one piece");
 * const info = await client.info(results[0].id);
 * const chapters = await client.chapters(results[0].id);
 * ```
 */
export const Toonily = (apiKey: string) =>
  MangaFetch<ToonilyCdnSearchMeta, ToonilyCdnInfoMeta, ToonilyCdnChapterMeta>({
    provider: 'toonily',
    apiKey,
  });

/**
 * Creates a TooniTube API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, chapters, pages
 *
 * @example
 * ```ts
 * const client = TooniTube(process.env.API_KEY);
 * const results = await client.search("one piece");
 * const info = await client.info(results[0].id);
 * const chapters = await client.chapters(results[0].id);
 * ```
 */
export const TooniTube = (apiKey: string) =>
  MangaFetch<ToonilyCdnSearchMeta, ToonilyCdnInfoMeta, ToonilyCdnChapterMeta>({
    provider: 'toonitube',
    apiKey,
  });

/**
 * Creates a BeeHentai API client.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: search, info, chapters, pages
 *
 * @example
 * ```ts
 * const client = BeeHentai(process.env.API_KEY);
 * const results = await client.search("one piece");
 * const info = await client.info(results[0].id);
 * const chapters = await client.chapters(results[0].id);
 * ```
 */
export const BeeHentai = (apiKey: string) =>
  MangaFetch<ToonilyCdnSearchMeta, ToonilyCdnInfoMeta, ToonilyCdnChapterMeta>({
    provider: 'beehentai',
    apiKey,
  });
