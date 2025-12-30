export enum MediaFormat {
  TV = 'TV',
  TV_SHORT = 'TV_SHORT',
  MOVIE = 'MOVIE',
  SPECIAL = 'SPECIAL',
  OVA = 'OVA',
  ONA = 'ONA',
  MUSIC = 'MUSIC',
  MANGA = 'MANGA',
  NOVEL = 'NOVEL',
  ONE_SHOT = 'ONE_SHOT',
  UNKNOWN = 'UNKNOWN',
}

export interface MDXSearchMeta {
  synonyms?: (string | undefined)[] | null;
  format: MediaFormat;
  year?: number;
}

export interface MDXInfoMeta {
  format: string;
  year: number | null;
  artwork: Array<{ image: string; providerId: string; type: string }>;
  countryOfOrigin: string | null;
  genres: string[];
  totalVolumes: number | null;
  status: string | null;
  tags: string[];
  type: string;
}
