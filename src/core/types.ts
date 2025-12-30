export interface Image {
  aspectRatio: number;
  small: string;
  medium: string;
  large: string;
}

export interface Title {
  english?: string | null | undefined;
  romaji?: string | null | undefined;
  japanese?: string | null | undefined;
  native?: string | null | undefined;
}

export interface Chapter<T = unknown> {
  id?: string | null;
  title?: string | null;
  number?: number | null;
  rating?: number | null;
  updatedAt?: number | string | null;
  mixdrop?: string | null;
  metadata?: T;
}

export interface Episode<T = unknown> {
  id?: number | string | null;
  title?: string | null;
  image?: Image | string | null;
  description?: string | null;
  number?: number | null;
  teaserUrl?: string | null;
  metadata?: T | null;
  isFiller?: boolean | null;
  isRecap?: boolean | null;
}

export interface Info<T = unknown, E = unknown> {
  id?: string | number | null;
  idMal?: string | number | null;
  idAl?: string | number | null;

  idMdx?: string | number | null;

  title?: Title | null;
  synonyms?: string[] | null;
  description?: string | null;
  image?: Image | null;
  banner?: Image | null;
  logo?: Image | null;
  airedEpisodes?: number | null;
  totalEpisodes?: number | null;
  metadata?: T | null;
  episodes?: Partial<E>[] | null;
}

export interface Page {
  url?: string | null;
  index?: number | null;
  headers?: Record<string, unknown> | null;
}

export interface Search<T = unknown> {
  id?: number | string | null;
  title?: Title | null;
  image?: Image | null;
  banner?: Image | null;
  logo?: Image | null;
  description?: string | null;
  airedEpisodes?: number | null;
  totalEpisodes?: number | null;
  metadata?: T | null;
}

export enum VideoType {
  HLS = 'hls',
  DASH = 'dash',
  MP4 = 'mp4',
}

export interface IntroOutro {
  start?: number | null;
  end?: number | null;
}

export interface Download {
  url?: string | null;
  quality?: string | null;
}

export interface VideoSource {
  url?: string | null;
  isM3U8?: boolean | null;
  type?: VideoType | null;
  quality?: string | null;
  isDub?: boolean | null;
}

export interface Subtitle {
  id?: string | null;
  url?: string | null;
  label?: string | null;
  srcLang?: string | null;
}

export interface Source<T = unknown> {
  headers?: Record<string, unknown> | null;
  intro?: IntroOutro | null;
  outro?: IntroOutro | null;
  sources: Partial<VideoSource>[];
  subtitles?: Partial<Subtitle>[] | null;
  download?: Partial<Download>[] | string | null;
  chapters?: string | null;
  thumbnails?: string | null;
  metadata?: T | null;
}
