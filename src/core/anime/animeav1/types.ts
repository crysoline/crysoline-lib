export interface AVSearchMeta {
  slug: string;
}

export interface AVInfoMeta {
  season: string;
  status: string;
  format: string;
  genres: string[];
  startDate: string;
  endDate: string;
}

export interface AVEpisodeMeta {
  url: string;
}

export interface AVSourceMeta {
  poster?: string | null;
}
