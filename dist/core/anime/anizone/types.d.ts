export interface AZAirDate {
    iso: string | null;
    date: Date | null;
    unix: number | null;
}
export interface AZInfoMeta {
    type: string | null;
    status: string | null;
    year: string | null;
    officialSite: string | null;
}
export interface AZEpisodeMeta {
    airDate: AZAirDate;
}
export interface AZSearchMeta {
    year: string | null;
    genres: string[];
    format: string | null;
}
