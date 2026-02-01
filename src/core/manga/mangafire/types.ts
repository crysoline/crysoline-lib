export interface MangaFireLanguage {
  id: string | null;
  code: string | null;
  title: string | null;
  chapters: number | null;
}

export interface MangaFireSearchMeta {
  type?: string;
  imageUrl?: string;
  status?: string;
  chapter?: string;
  volume?: string;
}

export interface MangaFireInfoMeta {
  status: string | null;
  type: string | null;
  author: string | null;
  published: string | null;
  genres: string[] | null;
  mangazines: string[] | null;
  languages: MangaFireLanguage[] | null;
}
