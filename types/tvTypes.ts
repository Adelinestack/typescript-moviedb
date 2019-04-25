import { IGenre } from './genreTypes';

export interface IBaseTv {
  id?: number;
  name?: string;
  popularity?: number;
  overview?: string;
  genres?: IGenre[];
  status?: string;
}

export interface IUnformattedTv extends IBaseTv {
  original_name?: string;
  media_type?: string;
  vote_count?: number;
  vote_average?: number;
  poster_path?: string;
  first_air_date?: string;
  last_air_date: string;
  genre_ids?: number[];
  original_language?: string;
  backdrop_path?: string;
  origin_country?: string[];
  number_of_episodes?: number;
  number_of_seasons?: number;
}

export interface ITv extends IBaseTv {
  originalName?: string;
  mediaType?: string;
  voteCount?: number;
  voteAverage?: number;
  posterPath?: string;
  firstAirDate?: string;
  lastAirDate?: string;
  genreIds?: number[];
  originalLanguage?: string;
  backdropPath?: string;
  originCountry?: string[];
  numberOfEpisodes?: number;
  numberOfSeasons?: number;
}
