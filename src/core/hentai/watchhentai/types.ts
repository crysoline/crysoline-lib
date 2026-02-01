export interface WatchHentaiSearchMeta {
  type: string | null;
  year: number | null;
}

export interface WatchHentaiInfoMeta {
  airDate: string | null;
  endDate: string | null;
  seasons: number | null;
  duration: string | null;
  studio: string | null;
  tags: string[] | null;
  screenshots: string[] | null;
}

export interface WatchHentaiEpisodeMeta {
  date: string | null;
}
