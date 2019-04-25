import { IGenre } from './genreTypes';

export interface IBaseMovie {
  id?: number;
  video?: boolean;
  title?: string;
  popularity?: string;
  adult?: boolean;
  overview?: string;
  genres?: IGenre[];
}

export interface IUnformattedMovie extends IBaseMovie {
  vote_count?: number;
  vote_average?: number;
  poster_path?: string;
  original_language?: string;
  original_title?: string;
  genre_ids?: number[];
  backdrop_path?: string;
  release_date?: string;
  media_type?: string;
}

export interface IMovie extends IBaseMovie {
  voteCount?: number;
  voteAverage?: number;
  posterPath?: string;
  originalLanguage?: string;
  originalTitle?: string;
  genreIds?: number[];
  backdropPath?: string;
  releaseDate?: string;
  mediaType?: string;
}
