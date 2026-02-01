import type { AnilistDate, AnilistTrailerInfo } from '../../meta';

export interface AnicoreInfoMeta {
  format: string;
  status: string;
  startDate: AnilistDate;
  endDate: AnilistDate;
  season: string | null;
  seasonYear: number | null;
  duration: number | null;
  source: string | null;
  averageScore: number | null;
  popularity: number;
  studios: string[];
  genres: string[];
  trailer: AnilistTrailerInfo | null;
}
