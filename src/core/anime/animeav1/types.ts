export interface AnimeAV1SearchMeta {
  slug: string;
}

export interface AnimeAV1InfoMeta {
  season: string;
  status: string;
  format: string;
  genres: string[];
  startDate: string;
  endDate: string;
}

export interface AnimeAV1EpisodeMeta {
  url: string;
}

export interface AnimeAV1SourceMeta {
  poster?: string | null;
}
