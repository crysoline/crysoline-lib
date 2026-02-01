export interface ToonilyCdnSearchMeta {
  slug: string;
  latestChapter: string | null;
}

export interface ToonilyCdnInfoMeta {
  slug: string;
  bookId: number;
  altTitles: string[];
  latestChapter: string | null;
}

export interface ToonilyCdnChapterMeta {
  chapterSlug: string;
  chapterNum: string;
}
