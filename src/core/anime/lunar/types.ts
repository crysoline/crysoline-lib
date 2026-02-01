export interface LunarLanguage {
  poster_url: string;
  description: string;
  language: string;
}

export interface LunarHost {
  hoster: string;
  language: string;
  owned: boolean;
  redirect_uri: string;
}

export interface LunarInfoMeta {
  alt_titles: string[];
  start_year: number;
  end_year: number;
  slug: string;
  seasons: number;
  genres: string[];
  search: string;
}

export interface LunarSearchMeta {
  alt_titles: string[];
  start_year: number;
  end_year: number;
  slug: string;
  genres: string[];
  search: string;
}

export interface LunarEpisodeMeta {
  season: number;
  languages: LunarLanguage[];
}

export interface LunarSourcesMeta {
  title: string;
  episode: number;
  season: number;
  hoster: LunarHost;
}
