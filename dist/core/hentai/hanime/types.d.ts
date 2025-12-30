export interface HAnimeSearchMeta {
    views: number | null;
    rating: number | null;
    likes: number | null;
    dislikes: number | null;
    url: string | null;
}
export interface HAnimeInfoMeta {
    views?: number | null;
    rating?: number | null;
    likes?: number | null;
    dislikes?: number | null;
    url?: string | null;
    genres?: string[] | null;
    studios?: string[] | null;
    brand?: string;
    brandUploads?: string;
    releaseDate?: string;
    uploadDate?: string;
    alternateTitles?: string[];
    isUncensored?: boolean;
    numericId?: string;
}
