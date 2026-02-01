export interface WeebCentralLink {
  source: string | null;
  id: string | null;
}

export interface WeebCentralSearchMeta {
  year: number | null;
  status: string | null;
  type: string | null;
  authors: string[] | null;
  tags: string[] | null;
}

export interface WeebCentralInfoMeta {
  year: number | null;
  status: string | null;
  type: string | null;
  official: boolean | false;
  anime: boolean | false;
  adult: boolean | false;
  authors: string[] | null;
  tags: string[] | null;
  links: WeebCentralLink[] | null;
}
