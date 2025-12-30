export interface MLink {
  label: string | null;
  url: string | null;
}

export interface MRelation {
  id: number | null;
  image: string | null;
  title: string | null;
  relationType: string | null;
}

export interface MCharacter {
  id: number | null;
  image: string | null;
  name: string | null;
  role: string | null;
  voiceActors: MVoiceActor[] | null;
}

export interface MVoiceActor {
  id: number | null;
  image: string | null;
  name: string | null;
  language: string | null;
}

export interface MStaff {
  id: number | null;
  image: string | null;
  name: string | null;
  role: string | null;
}

export interface MVideo {
  title: string;
  url: string;
  thumbnail: string | null;
  artist?: string | null;
  type: 'trailer' | 'music';
}

export interface MSearchMeta {
  type: string | null;
  score: string | null;
  members: string | null;
}

export interface MInfoMeta {
  moreInfo: string | null;
  score: string | null;
  rank: string | null;
  popularity: string | null;
  members: string | null;
  type: string | null;
  episodes: string | null;
  status: string | null;
  aired: string | null;
  premiered: string | null;
  broadcast: string | null;
  producers: string[] | null;
  licensors: string[] | null;
  studios: string[] | null;
  source: string | null;
  genres: string[] | null;
  themes: string[] | null;
  duration: string | null;
  rating: string | null;
  favorites: string | null;
  externalLinks: MLink[] | null;
  streamingLinks: MLink[] | null;
  relations: MRelation[] | null;
  characters: MCharacter[] | null;
  videos: MVideo[] | null;
  staff: MStaff[] | null;
}
