export interface NGenre {
  id: string;
  name: string;
  code: string;
}

export interface NProducer {
  id: string;
  name: string;
}

export interface NStudio {
  id: string;
  name: string;
}

export interface NDemographic {
  id: string;
  name: string;
  code: string;
}

export interface NImage {
  resized: Record<string, string>;
  resized_blur: Record<string, string>;
}

export interface NRelationShow {
  id: string;
  name: string | null;
  slug: string;
  relation: string;
  poster: NImage;
}

export interface NSearchMeta {
  year: number | null;
  type: string | null;
  status: string | null;
  rating: string | null;
  slug: string | null;
  genres: NGenre[];
}

export interface NInfoMeta {
  year: number | null;
  score: number | null;
  season: string | null;
  slug: string | null;
  rating: string | null;
  status: string | null;
  type: string | null;
  trailer: string | null;
  startDate: string | null;
  endDate: string | null;
  releaseDay: string | null;
  broadcast: string | null;
  genres: NGenre[];
  producers: NProducer[];
  studios: NStudio[];
  demographics: NDemographic[];
  relations: NRelationShow[];
}

export interface NEpisodeMeta {
  subtitle_languages: string[];
  audio_languages: string[];
  status: string | null;
  duration: number | null;
  slug: string | null;
}
