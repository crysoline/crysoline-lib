export interface LMangaSearchMeta {
  format: string;
  startDate: {
    year: number;
    month: number;
    day: number;
  };
  chapters: number;
  volumes: number;
  averageScore: number;
  status: string;
  genres: string[];
  type: string;
}

export interface LMangaInfoMeta {
  format: string;
  status: string;
  chapters: number;
  volumes: number;
  startDate: {
    year: number;
    month: number;
    day: number;
  };
  endDate: {
    year: number;
    month: number;
    day: number;
  };
  genres: string[];
  description: string;
  averageScore: number;
  meanScore: number;
  popularity: number;
  favourites: number;
  tags: {
    name: string;
    isMediaSpoiler: boolean;
    rank: number;
  }[];
}
