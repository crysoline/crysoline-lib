export interface HavenInfoMeta {
    genres: string[];
    year: number | null;
}
export interface HavenEpisodeMeta {
    released: {
        utc: Date | null;
        relative: string | null;
    };
}
export interface HavenSourceMeta {
    poster: string | null;
}
