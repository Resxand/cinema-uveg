export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Genre { id: number; name: string; }

export interface MovieDetail extends Movie {
  runtime: number;
  tagline: string;
  backdrop_path: string | null;
  genres: Genre[];
}