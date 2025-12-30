export interface OBroadcast {
  day_of_the_week: string;
  start_time: string;
}

export interface OGenre {
  id: number;
  name: string;
}

export interface OStudio {
  id: number;
  name: string;
}

export interface OEpisodeMeta {
  title_jp: string | null;
}

export interface OInfoMeta {
  score: number | null;
  rating: string | null;
  type: string | null;
  broadcast: OBroadcast | null;
  genres: Array<OGenre> | null;
  studios: Array<OStudio> | null;
}
