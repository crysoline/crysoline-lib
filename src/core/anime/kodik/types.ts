import type { Image, Search, Server } from '../../types';

export interface KodikDate {
  year: number | null;
  month: number | null;
  day: number | null;
  date: string | null;
}

export interface KodikVideo {
  id: string;
  url: string | null;
  name: string | null;
  kind: string | null;
  playerUrl: string | null;
  imageUrl: string | null;
}

export interface KodikSearchMeta {
  kind: string | null;
  rating: string | null;
  score: number | null;
  status: string | null;
  franchise: string | null;
  duration: number | null;
  season: string | null;
  airedOn: KodikDate | null;
  releasedOn: KodikDate | null;
}

export interface KodikInfoMeta {
  kind: string | null;
  rating: string | null;
  score: number | null;
  status: string | null;
  franchise: string | null;
  duration: number | null;
  season: string | null;
  airedOn: KodikDate | null;
  releasedOn: KodikDate | null;
  chronology: Search[] | null;
  videos: KodikVideo[] | null;
  screenshots: Image[] | null;
  translations: Server[] | null;
}
