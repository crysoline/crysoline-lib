export interface MyAnimeListLink {
  label: string | null;
  url: string | null;
}

export interface MyAnimeListRelation {
  id: number | null;
  image: string | null;
  title: string | null;
  relationType: string | null;
}

export interface MyAnimeListCharacter {
  id: number | null;
  image: string | null;
  name: string | null;
  role: string | null;
  voiceActors: MyAnimeListVoiceActor[] | null;
}

export interface MyAnimeListVoiceActor {
  id: number | null;
  image: string | null;
  name: string | null;
  language: string | null;
}

export interface MyAnimeListStaff {
  id: number | null;
  image: string | null;
  name: string | null;
  role: string | null;
}

export interface MyAnimeListVideo {
  title: string;
  url: string;
  thumbnail: string | null;
  artist?: string | null;
  type: 'trailer' | 'music';
}

export interface MyAnimeListSearchMeta {
  type: string | null;
  score: string | null;
  members: string | null;
}

export interface MyAnimeListInfoMeta {
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
  externalLinks: MyAnimeListLink[] | null;
  streamingLinks: MyAnimeListLink[] | null;
  relations: MyAnimeListRelation[] | null;
  characters: MyAnimeListCharacter[] | null;
  videos: MyAnimeListVideo[] | null;
  staff: MyAnimeListStaff[] | null;
}
