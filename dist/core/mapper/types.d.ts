export type MappingMethod = 'ANILIST_ID' | 'MAL_ID' | 'BEST_MATCH' | 'NOT_FOUND';
export interface Mapping {
    idAl: number;
    idMap: string | null;
    provider: string;
    found: boolean;
    method: MappingMethod;
}
