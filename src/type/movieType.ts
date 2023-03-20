export interface ApiMovieItem {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  overview: string;
  original_title: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieItem {
  id: number;
  title: string;
  src: string;
  starRate: number;
}

export interface MovieAppData {
  movies: MovieItem[];
  searchWord: string;
  page: number;
  totalPages: number;
  isShowMore: boolean;
}