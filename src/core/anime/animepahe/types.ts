export interface PaheRelations {
  id: string | null;
  title: string | null;
  image: string | null;
  url: string | null;
  releaseDate: string | null;
  type: string | null;
  relationType: string | null;
}

export interface PaheExternalLinks {
  id: string | null;
  url: string | null;
  sourceName: string | null;
}

export interface PaheSearchMeta {
  year: number | null;
  rating: number | null;
  type: string | null;
}

export interface PaheEpisodeMeta {
  duration: string | null;
  url: string | null;
}

export interface PaheInfoMeta {
  year: number | null;
  season: string | null;
  status: string | null;
  type: string | null;
  startDate: string | null;
  endDate: string | null;
  duration: string | null;
  genres: string[] | null;
  studios: string[] | null;
  themes: string[] | null;
  demographics: string[] | null;
  externalLinks: Array<Partial<PaheExternalLinks>> | null;
  relations: Array<Partial<PaheRelations>>;
}
