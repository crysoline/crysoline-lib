import { MetaFetch } from '../../helpers/fetch';
import type { MInfoMeta, MSearchMeta } from './myanimelist';
import type { MMLInfoMeta, MMSearchMeta } from './mymangalist';

const MyAnimeList = (apiKey: string) =>
  MetaFetch<MSearchMeta, MInfoMeta>({
    provider: 'myanimelist',
    apiKey,
  });

const MyMangaList = (apiKey: string) =>
  MetaFetch<MMSearchMeta, MMLInfoMeta>({
    provider: 'mymangalist',
    apiKey,
  });

const Meta = {
  MyAnimeList,
  MyMangaList,
};

export { Meta };
