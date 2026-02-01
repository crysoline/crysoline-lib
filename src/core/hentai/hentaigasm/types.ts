export interface HentaigasmSearchMeta {
  views: string;
  comments: number;
  likes: number;
  author?: string;
  timeAgo?: string;
  url: string;
}

export interface HentaigasmInfoMeta {
  date?: string;
  series?: string[];
  genres?: string[];
  downloadUrl?: string;
  url: string;
}
