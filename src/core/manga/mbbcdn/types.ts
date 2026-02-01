export interface MbbcdnSearchMeta {
  slug: string;
  latestChapter: string | null;
}

export interface MbbcdnInfoMeta {
  slug: string;
  bookId: number;
  altTitles: string[];
  latestChapter: string | null;
}

export interface MbbcdnChapterMeta {
  chapterSlug: string;
  chapterNum: string;
}
