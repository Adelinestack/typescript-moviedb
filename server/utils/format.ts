import { IUnformattedMovie, IMovie } from '../../types/movieTypes';
import { IUnformattedCast, ICast } from '../../types/castTypes';
import { IUnformattedPeople, IPeople } from '../../types/peopleTypes';
import { IUnformattedTv, ITv } from '../../types/tvTypes';
import { IUnformattedPerson, IPerson } from '../../types/personTypes';

export const formatMovies = (movies: IUnformattedMovie[]): IMovie[] => {
  const formattedMovies = movies.map(
    ({
      id,
      video,
      title,
      popularity,
      adult,
      overview,
      vote_count: voteCount,
      vote_average: voteAverage,
      poster_path: posterPath,
      original_language: originalLanguage,
      original_title: originalTitle,
      genre_ids: genreIds,
      backdrop_path: backdropPath,
      release_date: releaseDate,
    }) => ({
      id,
      video,
      title,
      popularity,
      adult,
      overview,
      voteCount,
      voteAverage,
      posterPath,
      originalLanguage,
      originalTitle,
      genreIds,
      backdropPath,
      releaseDate,
    })
  );
  return formattedMovies as IMovie[];
};

export const formatMovie = ({
  id,
  video,
  title,
  popularity,
  adult,
  overview,
  vote_count: voteCount,
  vote_average: voteAverage,
  poster_path: posterPath,
  original_language: originalLanguage,
  original_title: originalTitle,
  genres,
  backdrop_path: backdropPath,
  release_date: releaseDate,
  media_type: mediaType,
}: IUnformattedMovie): IMovie =>
  ({
    id,
    video,
    title,
    popularity,
    adult,
    overview,
    voteCount,
    voteAverage,
    posterPath,
    originalLanguage,
    originalTitle,
    genres,
    backdropPath,
    releaseDate,
    mediaType,
  } as IMovie);

export const formatCast = (cast: IUnformattedCast[]): ICast[] => {
  const formattedCast = cast.map(
    ({
      character,
      gender,
      id,
      name,
      order,
      cast_id: castId,
      credit_id: creditId,
      profile_path: profilePath,
    }) => ({
      character,
      gender,
      id,
      name,
      order,
      castId,
      creditId,
      profilePath,
    })
  );
  return formattedCast as ICast[];
};

export const formatPeople = ({
  birthday,
  deathday,
  id,
  name,
  gender,
  biography,
  popularity,
  adult,
  homepage,
  known_for_department: knownForDepartment,
  also_known_as: alsoKnownAs,
  place_of_birth: placeOfBirth,
  profile_path: profilePath,
  imdb_id: imdbId,
}: IUnformattedPeople): IPeople =>
  ({
    birthday,
    deathday,
    id,
    name,
    gender,
    biography,
    popularity,
    adult,
    homepage,
    knownForDepartment,
    alsoKnownAs,
    placeOfBirth,
    profilePath,
    imdbId,
  } as IPeople);

export const formatTv = ({
  id,
  name,
  popularity,
  overview,
  genres,
  status,
  original_name: originalName,
  media_type: mediaType,
  vote_count: voteCount,
  vote_average: voteAverage,
  poster_path: posterPath,
  first_air_date: firstAirDate,
  last_air_date: lastAirDate,
  genre_ids: genreIds,
  original_language: originalLanguage,
  backdrop_path: backdropPath,
  origin_country: originCountry,
  number_of_episodes: numberOfEpisodes,
  number_of_seasons: numberOfSeasons,
}: IUnformattedTv): ITv =>
  ({
    id,
    name,
    popularity,
    overview,
    genres,
    status,
    originalName,
    mediaType,
    voteCount,
    voteAverage,
    posterPath,
    firstAirDate,
    lastAirDate,
    genreIds,
    originalLanguage,
    backdropPath,
    originCountry,
    numberOfEpisodes,
    numberOfSeasons,
  } as ITv);

export const formatPerson = ({
  popularity,
  id,
  name,
  adult,
  media_type: mediaType,
  profile_path: profilePath,
  known_for: knownFor,
}: IUnformattedPerson): IPerson =>
  ({
    popularity,
    id,
    name,
    adult,
    mediaType,
    profilePath,
    knownFor,
  } as IPerson);
