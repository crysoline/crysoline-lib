export interface KodikTranslation {
  id: number | null;
  link: string | null;
  type: string | null;
  title: string | null;
  episodeCount: number | null;
  quality: string | null;
  camrip: boolean | false;
}

export interface KodikEpisodeMeta {
  hash: string | null;
  type: string | null;
  link: string | null;
}
