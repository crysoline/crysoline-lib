export interface AGGSearchMeta {
  status: string | null;
  altTitles: string[] | null;
}

export interface AGGInfoMeta {
  status: string | null;
  genres: string[] | null;
}

export interface AGGEpisodeMeta {
  sub: boolean | false;
  dub: boolean | false;

  hd: boolean | false;
  sd: boolean | false;
}
