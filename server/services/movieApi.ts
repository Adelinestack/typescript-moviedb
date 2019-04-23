import axios from 'axios';
import { API_MOVIES_URL, API_SEARCH_URL } from '../utils/APIConst';
import { API_KEY } from '../utils/APIKey';
import { IMovie, IUnformattedMovie } from '../../types/movieTypes';
import { ITv, IUnformattedTv } from '../../types/tvTypes';
import { IPerson, IUnformattedPerson } from '../../types/personTypes';
import { ISearch, formattedSearch } from '../../types/searchTypes';
import { formatMovie, formatPerson, formatTv } from '../utils/format';

export const getMovieById = async (movieId: string): Promise<IMovie> => {
  const { data } = await axios.get<IUnformattedMovie>(
    `${API_MOVIES_URL}${movieId}?api_key=${API_KEY}`
  );
  return formatMovie(data as IUnformattedMovie);
};

export const getSearchResults = async (
  keywords: string
): Promise<formattedSearch[]> => {
  const {
    data: { results },
  } = await axios.get<ISearch>(
    `${API_SEARCH_URL}?api_key=${API_KEY}&query=${keywords}`
  );
  const formattedResults = results.map(result => {
    if (result.media_type === 'movie') {
      const { id, mediaType, title, posterPath }: IMovie = formatMovie(
        result as IUnformattedMovie
      );
      return { id, mediaType, title, posterPath };
    } else if (result.media_type === 'person') {
      const {
        id,
        mediaType,
        name: title,
        profilePath: posterPath,
      }: IPerson = formatPerson(result as IUnformattedPerson);
      return { id, mediaType, title, posterPath };
    } else {
      const { id, mediaType, name: title, posterPath }: ITv = formatTv(
        result as IUnformattedTv
      );
      return { id, mediaType, title, posterPath };
    }
  });

  return formattedResults as formattedSearch[];
};
