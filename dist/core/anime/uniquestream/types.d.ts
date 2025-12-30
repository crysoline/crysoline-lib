export interface UniqueInfoMeta {
    duration: string | null;
    url: string | null;
    audioLocales: string[];
    subtitleLocales: string[];
    seasons: Array<{
        content_id: string;
        title: string;
        season_number: number;
        season_seq_number: number;
        display_number: string;
        episode_count: number;
    }>;
}
export interface UniqueEpisodeMeta {
    duration_ms: number | null;
}
export interface UniqueSearchMeta {
    type: string | null;
    subbed: boolean;
    dubbed: boolean;
    seasonsCount: number;
}
