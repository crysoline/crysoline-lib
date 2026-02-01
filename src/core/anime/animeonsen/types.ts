export interface AnimeOnsenBroadcast {
  day_of_the_week: string;
  start_time: string;
}

export interface AnimeOnsenGenre {
  id: number;
  name: string;
}

export interface AnimeOnsenStudio {
  id: number;
  name: string;
}

export interface AnimeOnsenEpisodeMeta {
  title_jp: string | null;
}

export interface AnimeOnsenInfoMeta {
  score: number | null;
  rating: string | null;
  type: string | null;
  broadcast: AnimeOnsenBroadcast | null;
  genres: AnimeOnsenGenre[] | null;
  studios: AnimeOnsenStudio[] | null;
}
