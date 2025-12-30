export interface MFLanguage {
  id: string | null;
  code: string | null;
  title: string | null;
  chapters: number | null;
}

export interface MFSearchMeta {
  type?: string;
  imageUrl?: string;
  status?: string;
  chapter?: string;
  volume?: string;
}

export interface MFInfoMeta {
  status: string | null;
  type: string | null;
  author: string | null;
  published: string | null;
  genres: string[] | null;
  mangazines: string[] | null;
  languages: MFLanguage[] | null;
}
