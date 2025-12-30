export interface LLanguage {
    poster_url: string;
    description: string;
    language: string;
}
export interface LHost {
    hoster: string;
    language: string;
    owned: boolean;
    redirect_uri: string;
}
export interface LInfoMeta {
    alt_titles: string[];
    start_year: number;
    end_year: number;
    slug: string;
    seasons: number;
    genres: string[];
    search: string;
}
export interface LSearchMeta {
    alt_titles: string[];
    start_year: number;
    end_year: number;
    slug: string;
    genres: string[];
    search: string;
}
export interface LEpisodeMeta {
    season: number;
    languages: LLanguage[];
}
export interface LSourcesMeta {
    title: string;
    episode: number;
    season: number;
    hoster: LHost;
}
