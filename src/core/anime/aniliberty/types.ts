export interface AnilibertySearchMeta {
  type: string | null;
  season: string | null;
  alias: string | null;
  isOngoing: boolean | false;
  ageRating: string | null;
  genres: string[] | null;
}

export interface AnilibertyInfoMeta {
  type: string | null;
  season: string | null;
  year: number | null;
  alias: string | null;
  isOngoing: boolean | false;
  ageRating: string | null;
  genres: string[] | null;
}

export interface AnilibertyEpisodeMeta {
  hls_480: string | null;
  hls_720: string | null;
  hls_1080: string | null;
  opening: {
    start: number;
    stop: number;
  };
  ending: {
    start: number | null;
    stop: number | null;
  };
  duration: number | null;
}
