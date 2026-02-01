export interface AniZoneAirDate {
  iso: string | null;
  date: Date | null;
  unix: number | null;
}

export interface AniZoneInfoMeta {
  type: string | null;
  status: string | null;
  year: string | null;
  officialSite: string | null;
}

export interface AniZoneEpisodeMeta {
  airDate: AniZoneAirDate;
}

export interface AniZoneSearchMeta {
  year: string | null;
  genres: string[];
  format: string | null;
}
