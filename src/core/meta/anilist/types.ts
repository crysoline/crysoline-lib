export interface AnilistSearchMeta {
  format: string;
  averageScore: number | null;
  popularity: number;
}

export interface AnilistInfoMeta {
  format: string;
  status: string;
  startDate: AnilistDate;
  endDate: AnilistDate;
  season: string | null;
  seasonYear: number | null;
  duration: number | null;
  source: string | null;
  averageScore: number | null;
  popularity: number;
  favourites: number;
  studios: string[];
  genres: string[];
  tags: string[];
  relations: AnilistRelation[];
  characters: AnilistCharacter[];
  staff: AnilistStaff[];
  trailer: AnilistTrailerInfo | null;
  externalLinks: AnilistExternalLink[];
}

export interface AnilistRelation {
  id: number;
  title: {
    romaji: string;
    english: string | null;
  };
  coverImage: string;
  format: string;
  relationType: string;
}

export interface AnilistVoiceActor {
  id: number;
  name: string;
  language: string;
  image: string;
}

export interface AnilistCharacter {
  id: number;
  name: string;
  role: string;
  image: string;
  voiceActors: AnilistVoiceActor[];
}

export interface AnilistStaff {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface AnilistTrailerInfo {
  url: string;
  site: string;
  thumbnail: string;
}

export interface AnilistExternalLink {
  url: string;
  site: string;
}

export interface AnilistDate {
  year: number | null;
  month: number | null;
  day: number | null;
}
