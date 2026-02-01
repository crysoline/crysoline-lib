export interface AnimeGGSearchMeta {
  status: string | null;
  altTitles: string[] | null;
}

export interface AnimeGGInfoMeta {
  status: string | null;
  genres: string[] | null;
}

export interface AnimeGGEpisodeMeta {
  sub: boolean | false;
  dub: boolean | false;

  hd: boolean | false;
  sd: boolean | false;
}
