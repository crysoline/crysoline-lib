export interface KEpisodeLanguage {
  id: string;
  name: string;
}

export interface KFormatImage {
  aspectRatio: number | null;
  jpeg: {
    sm: string;
    hq: string;
  };
  webp: {
    sm: string;
    hq: string;
  };
}

export interface KSearchMeta {
  slug: string | null;
  year: number | null;
  status: string | null;
  type: string | null;
  episode_duration: number | null;
  genres: string[];
  locales: string[];
}

export interface KInfoMeta {
  slug: string | null;
  year: number | null;
  season: string | null;
  status: string | null;
  type: string | null;
  rating: string | null;
  start_date: string | null;
  end_date: string | null;
  episode_duration: number | null;
  genres: string[];
  locales: string[];
}

export interface KEpisodeMeta {
  episode_string: string | null;
  languages: KEpisodeLanguage[];
}

export interface KSourceMeta {
  episode_number: number | null;
  episode_title: string | null;
  episode_synopsis: string | null;
  language: string | null;
  duration_ms: number | null;
  thumbnail: KFormatImage | null;
}
