import { MetaFetch } from '../../../helpers';
import type { MyMangaListInfoMeta, MyMangaListSearchMeta } from './types';

export const MyMangaList = (apiKey: string) =>
  MetaFetch<MyMangaListSearchMeta, MyMangaListInfoMeta>({
    provider: 'mymangalist',
    apiKey,
  });

export * from './types';
