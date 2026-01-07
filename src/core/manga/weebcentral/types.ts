export interface WCLink {
  source: string | null;
  id: string | null;
}

export interface WCSearchMeta {
  year: number | null;
  status: string | null;
  type: string | null;
  authors: string[] | null;
  tags: string[] | null;
}

export interface WCInfoMeta {
  year: number | null;
  status: string | null;
  type: string | null;
  official: boolean | false;
  anime: boolean | false;
  adult: boolean | false;
  authors: string[] | null;
  tags: string[] | null;
  links: WCLink[] | null;
}
