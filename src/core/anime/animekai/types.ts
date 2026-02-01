export interface AnimeKaiRelation {
  id: string;
  title: string;
  url: string;
  image?: string;
  japaneseTitle?: string;
  type?: string;
  sub?: number;
  dub?: number;
  relationType?: string;
  episodes?: number;
}

export interface AnimeKaiEpisodeMeta {
  sub: boolean | false;
  dub: boolean | false;
  url: string | null;
}

export interface AnimeKaiInfoMeta {
  ani_id: string | null;
  type: string | null;
  url: string | null;
  sub: number | null;
  dub: number | null;
  hasSub: boolean | null;
  hasDub: boolean | null;
  status: string | null;
  season: string | null;
  genres: string[] | null;
  relations: AnimeKaiRelation[] | null;
}

export interface AnimeKaiSearchMeta {
  sub: number | null;
  dub: number | null;
  type: string | null;
  url: string | null;
}
