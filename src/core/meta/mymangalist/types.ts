export interface MyMangaListSearchMeta {
  type: string | null;
  score: string | null;
  members: string | null;
  volumes: string | null;
}

export interface MyMangaListLink {
  label: string | null;
  url: string | null;
}

export interface MyMangaListRelation {
  id: number | null;
  image: string | null;
  title: string | null;
  relationType: string | null;
}

export interface MyMangaListCharacter {
  id: number | null;
  image: string | null;
  name: string | null;
  role: string | null;
}

export interface MyMangaListVoiceActor {
  id: number | null;
  image: string | null;
  name: string | null;
  language: string | null;
}

export interface MyMangaListInfoMeta {
  moreInfo: string | null;
  score: string | null;
  rank: string | null;
  popularity: string | null;
  members: string | null;
  type: string | null;
  volumes: string | null;
  chapters: string | null;
  status: string | null;
  published: string | null;
  serialization: string | null;
  genres: string[] | null;
  themes: string[] | null;
  authors: string[] | null;
  favorites: string | null;
  externalLinks: MyMangaListLink[] | null;
  relations: MyMangaListRelation[] | null;
  characters: MyMangaListCharacter[] | null;
}
