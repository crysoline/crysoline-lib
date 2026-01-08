/**
 * Image data with multiple resolution URLs.
 * @property {number} aspectRatio - The aspect ratio of the image (width/height)
 * @property {string} small - URL for small resolution image
 * @property {string} medium - URL for medium resolution image
 * @property {string} large - URL for large resolution image
 */
export interface Image {
  aspectRatio: number;
  small: string;
  medium: string;
  large: string;
}

/**
 * Multi-language title information.
 * @property {string} [english] - English title
 * @property {string} [romaji] - Romanized Japanese title
 * @property {string} [japanese] - Japanese title
 * @property {string} [native] - Native language title
 * @property {string} [other] - Alternative title
 */
export interface Title {
  english?: string | null;
  romaji?: string | null;
  japanese?: string | null;
  native?: string | null;
  other?: string | null;
}

/**
 * Manga chapter information.
 * @template T - Custom metadata type
 * @property {string | number} [id] - Unique chapter identifier
 * @property {string} [title] - Chapter title
 * @property {number} [number] - Chapter number
 * @property {number} [rating] - Chapter rating
 * @property {number | string} [updatedAt] - Last update timestamp
 * @property {string} [mixdrop] - Mixdrop URL if available
 * @property {T} [metadata] - Provider-specific metadata
 */
export interface Chapter<T = unknown> {
  id?: string | number | null;
  title?: string | null;
  number?: number | null;
  rating?: number | null;
  updatedAt?: number | string | null;
  mixdrop?: string | null;
  metadata?: T;
}

/**
 * Anime episode information.
 * @template T - Custom metadata type
 * @property {number | string} [id] - Unique episode identifier
 * @property {string} [title] - Episode title
 * @property {Image | string} [image] - Episode thumbnail
 * @property {string} [description] - Episode description
 * @property {number} [number] - Episode number
 * @property {string} [teaserUrl] - Teaser/preview video URL
 * @property {T} [metadata] - Provider-specific metadata
 * @property {boolean} [isFiller] - Whether episode is filler content
 * @property {boolean} [isRecap] - Whether episode is a recap
 */
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

/**
 * Detailed anime/manga information.
 * @template T - Custom metadata type
 * @template E - Episode/Chapter type
 * @property {string | number} [id] - Unique identifier
 * @property {string | number} [idMal] - MyAnimeList ID
 * @property {string | number} [idAl] - AniList ID
 * @property {string | number} [idMdx] - MangaDex ID
 * @property {Title} [title] - Multi-language titles
 * @property {string[]} [synonyms] - Alternative titles
 * @property {string} [description] - Full description/synopsis
 * @property {Image} [image] - Cover image
 * @property {Image} [background] - Background image
 * @property {Image} [logo] - Logo image
 * @property {number} [airedEpisodes] - Number of aired episodes
 * @property {number} [totalEpisodes] - Total expected episodes
 * @property {T} [metadata] - Provider-specific metadata
 * @property {Partial<E>[]} [episodes] - List of episodes/chapters
 */
export interface Info<T = unknown, E = unknown> {
  id?: string | number | null;
  idMal?: string | number | null;
  idAl?: string | number | null;

  idMdx?: string | number | null;

  title?: Title | null;
  synonyms?: string[] | null;
  description?: string | null;
  image?: Image | null;
  background?: Image | null;
  logo?: Image | null;
  airedEpisodes?: number | null;
  totalEpisodes?: number | null;
  metadata?: T | null;
  episodes?: Partial<E>[] | null;
}

/**
 * Manga page information.
 * @property {string} [url] - Page image URL
 * @property {number} [index] - Page index/number
 * @property {Record<string, unknown>} [headers] - Required HTTP headers for fetching the page
 */
export interface Page {
  url?: string | null;
  index?: number | null;
  headers?: Record<string, unknown> | null;
}

/**
 * Search result item.
 * @template T - Custom metadata type
 * @property {number | string} [id] - Unique identifier
 * @property {Title} [title] - Multi-language titles
 * @property {Image} [image] - Thumbnail image
 * @property {Image} [banner] - Banner image
 * @property {Image} [logo] - Logo image
 * @property {string} [description] - Short description
 * @property {number} [airedEpisodes] - Number of aired episodes
 * @property {number} [totalEpisodes] - Total expected episodes
 * @property {T} [metadata] - Provider-specific metadata
 */
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

/**
 * Video stream types.
 * @enum {string}
 */
export enum VideoType {
  /** HTTP Live Streaming */
  HLS = "hls",
  /** Dynamic Adaptive Streaming over HTTP */
  DASH = "dash",
  /** MPEG-4 video file */
  MP4 = "mp4",
}

/**
 * Intro/outro timing information for skipping.
 * @property {number} [start] - Start time in seconds
 * @property {number} [end] - End time in seconds
 */
export interface IntroOutro {
  start?: number | null;
  end?: number | null;
}

/**
 * Downloadable video file information.
 * @property {string} [url] - Download URL
 * @property {string} [quality] - Video quality (e.g., "1080p", "720p")
 */
export interface Download {
  url?: string | null;
  quality?: string | null;
}

/**
 * Video source stream information.
 * @property {string} [url] - Stream URL
 * @property {boolean} [isM3U8] - Whether the stream is an M3U8 playlist
 * @property {VideoType | string} [type] - Stream type (HLS, DASH, MP4)
 * @property {string} [quality] - Video quality (e.g., "1080p", "720p")
 * @property {boolean} [isDub] - Whether the audio is dubbed
 */
export interface VideoSource {
  url?: string | null;
  isM3U8?: boolean | null;
  type?: VideoType | string | null;
  quality?: string | null;
  isDub?: boolean | null;
}

/**
 * Subtitle track information.
 * @property {string} [id] - Unique subtitle identifier
 * @property {string} [url] - Subtitle file URL (usually VTT or SRT)
 * @property {string} [label] - Display label for the subtitle track
 * @property {string} [srcLang] - Source language code (e.g., "en", "ja")
 */
export interface Subtitle {
  id?: string | null;
  url?: string | null;
  label?: string | null;
  srcLang?: string | null;
}

/**
 * Complete video source information including streams, subtitles, and metadata.
 * @template T - Custom metadata type
 * @property {Record<string, unknown>} [headers] - Required HTTP headers for video requests
 * @property {IntroOutro} [intro] - Intro timing for skipping
 * @property {IntroOutro} [outro] - Outro timing for skipping
 * @property {Partial<VideoSource>[]} sources - Available video streams
 * @property {Partial<Subtitle>[]} [subtitles] - Available subtitle tracks
 * @property {Partial<Download>[] | string} [download] - Download links or URL
 * @property {string} [chapters] - Chapter markers URL
 * @property {string} [thumbnails] - Thumbnail preview URL
 * @property {T} [metadata] - Provider-specific metadata
 */
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

/**
 * Video server/host information.
 * @template T - Custom metadata type
 * @property {string | number} [id] - Unique server identifier
 * @property {string} [name] - Server name (e.g., "Vidstreaming", "Gogo")
 * @property {string} [type] - Server type (e.g., "sub", "dub")
 * @property {T} [metadata] - Provider-specific metadata
 */
export interface Server<T = unknown> {
  id?: string | number | null;
  name?: string | null;
  type?: string | null;
  metadata?: T | null;
}
