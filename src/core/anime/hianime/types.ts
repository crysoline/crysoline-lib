export interface HianimeTvInfo {
  rating: string | null;
  quality: string | null;
  sub: number | null;
  dub: number | null;
  showType: string | null;
  duration: string | null;
}

export interface HianimeSeason {
  id: string | null;
  data_number: number | null;
  data_id: number | null;
  season: string | null;
  title: string | null;
  image: string | null;
}

export interface HianimeSearchMeta {
  duration: string | null;
  tvInfo: Partial<HianimeTvInfo>;
}

export interface HianimeEpisodeMeta {
  title_jp: string | null;
}

export interface HianimeInfoMeta {
  year: number | null;
  score: number | null;
  season: string | null;
  rating: string | null;
  type: string | null;
  subCount: number | null;
  dubCount: number | null;
  adult: boolean | null;
  startDate: string | null;
  endDate: string | null;
  duration: string | null;
  genres: string[] | null;
  studios: string[] | null;
  producers: string[] | null;
  seasons: HianimeSeason[] | null;
}
