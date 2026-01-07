export interface WHSearchMeta {
  type: string | null;
  year: number | null;
}

export interface WHInfoMeta {
  airDate: string | null;
  endDate: string | null;
  seasons: number | null;
  duration: string | null;
  studio: string | null;
  tags: string[] | null;
  screenshots: string[] | null;
}

export interface WHEpisodeMeta {
  date: string | null;
}
