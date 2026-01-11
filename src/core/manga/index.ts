import { MangaFetch } from '../../helpers/fetch';
import type { COChapterMeta, COInfoMeta, COSearchMeta } from './comix';
import type { LMangaInfoMeta, LMangaSearchMeta } from './lunar';
import type { MDXInfoMeta, MDXSearchMeta } from './mangadex';
import type { MFInfoMeta, MFSearchMeta } from './mangafire';
import type { WCInfoMeta, WCSearchMeta } from './weebcentral';

const Comix = (apiKey: string) =>
  MangaFetch<COSearchMeta, COInfoMeta, COChapterMeta>({
    provider: 'comix',
    apiKey,
  });

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
 * const pages = await client.pages({
 *   id: results[0].id,
 *   chapterId: chapters[0].id
 * });
 * ```
 */
const LunarManga = (apiKey: string) =>
  MangaFetch<LMangaSearchMeta, LMangaInfoMeta>({
    provider: 'lunarmanga',
    apiKey,
  });

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
 * const pages = await client.pages({
 *   id: results[0].id,
 *   chapterId: chapters[0].id,
 *   lang: "en"
 * });
 * ```
 */
const MangaDex = (apiKey: string) =>
  MangaFetch<MDXSearchMeta, MDXInfoMeta>({
    provider: 'mangadex',
    apiKey,
  });

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
const MangaFire = (apiKey: string) =>
  MangaFetch<MFSearchMeta, MFInfoMeta>({
    provider: 'mangafire',
    apiKey,
  });

const WeebCentral = (apiKey: string) =>
  MangaFetch<WCSearchMeta, WCInfoMeta>({
    provider: 'weebcentral',
    apiKey,
  });

const Manga = {
  Comix,
  LunarManga,
  MangaDex,
  MangaFire,
  WeebCentral,
};

export { Manga };

export * from './comix';
export * from './lunar';
export * from './mangadex';
export * from './mangafire';
export * from './weebcentral';
