export interface ComixSearchMeta {
  slug: string | null;
  status: string | null;
  latestChapter: number | null;
  nsfw: boolean | false;
}

export interface ComixInfoMeta {
  slug: string | null;
  status: string | null;
  latestChapter: number | null;
  nsfw: boolean | false;
}

export interface ComixChapterMeta {
  official: boolean;
}
