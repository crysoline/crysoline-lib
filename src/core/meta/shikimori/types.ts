import type { Image, Search } from '../../types';

export interface ShikimoriDate {
  year: number | null;
  month: number | null;
  day: number | null;
  date: string | null;
}

export interface ShikimoriVideo {
  id: string;
  url: string | null;
  name: string | null;
  kind: string | null;
  playerUrl: string | null;
  imageUrl: string | null;
}

export interface ShikimoriSearchMeta {
  kind: string | null;
  rating: string | null;
  score: number | null;
  status: string | null;
  franchise: string | null;
  duration: number | null;
  season: string | null;
  airedOn: ShikimoriDate | null;
  releasedOn: ShikimoriDate | null;
}

export interface ShikimoriInfoMeta {
  kind: string | null;
  rating: string | null;
  score: number | null;
  status: string | null;
  franchise: string | null;
  duration: number | null;
  season: string | null;
  airedOn: ShikimoriDate | null;
  releasedOn: ShikimoriDate | null;
  chronology: Search[] | null;
  videos: ShikimoriVideo[] | null;
  screenshots: Image[] | null;
}
