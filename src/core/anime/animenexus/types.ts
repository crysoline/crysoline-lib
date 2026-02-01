export interface AnimeNexusGenre {
  id: string;
  name: string;
  code: string;
}

export interface AnimeNexusProducer {
  id: string;
  name: string;
}

export interface AnimeNexusStudio {
  id: string;
  name: string;
}

export interface AnimeNexusDemographic {
  id: string;
  name: string;
  code: string;
}

export interface AnimeNexusImage {
  resized: Record<string, string>;
  resized_blur: Record<string, string>;
}

export interface AnimeNexusRelationShow {
  id: string;
  name: string | null;
  slug: string;
  relation: string;
  poster: AnimeNexusImage;
}

export interface AnimeNexusSearchMeta {
  year: number | null;
  type: string | null;
  status: string | null;
  rating: string | null;
  slug: string | null;
  genres: AnimeNexusGenre[];
}

export interface AnimeNexusInfoMeta {
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
  genres: AnimeNexusGenre[];
  producers: AnimeNexusProducer[];
  studios: AnimeNexusStudio[];
  demographics: AnimeNexusDemographic[];
  relations: AnimeNexusRelationShow[];
}

export interface AnimeNexusEpisodeMeta {
  subtitle_languages: string[];
  audio_languages: string[];
  status: string | null;
  duration: number | null;
  slug: string | null;
}
