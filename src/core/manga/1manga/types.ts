export interface OneMangaSearchMeta {
  id: number;
  slug: string;
  latestChapter: number | null;
  isLicensed: boolean;
}

export interface OneMangaInfoMeta {
  id: number;
  slug: string;
  status: string;
  author: string;
  isLicensed: boolean;
}

export interface OneMangaChapterMeta {
  number: number;
  slug: string;
}
