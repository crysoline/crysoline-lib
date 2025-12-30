import { MangaFetch } from '../../helpers/fetch';
import type { LMangaInfoMeta, LMangaSearchMeta } from './lunar';
import type { MDXInfoMeta, MDXSearchMeta } from './mangadex';
import type { MFInfoMeta, MFSearchMeta } from './mangafire';

const LunarManga = (apiKey: string) =>
  MangaFetch<LMangaSearchMeta, LMangaInfoMeta>({
    provider: 'lunarmanga',
    apiKey,
  });

const MangaDex = (apiKey: string) =>
  MangaFetch<MDXSearchMeta, MDXInfoMeta>({
    provider: 'mangadex',
    apiKey,
  });

const MangaFire = (apiKey: string) =>
  MangaFetch<MFSearchMeta, MFInfoMeta>({
    provider: 'mangafire',
    apiKey,
  });

const Manga = {
  LunarManga,
  MangaDex,
  MangaFire,
};

export { Manga };
