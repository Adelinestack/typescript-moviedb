import axios from 'axios';
import { API_MOVIES_URL } from '../utils/APIConst';
import { API_KEY } from '../utils/APIKey';
import { IMovie, IUnformattedMovie } from '../../types/movieTypes';
import { IResponseApi } from '../../types/apiTypes';
import { formatMovies } from '../utils/format';

export const getNewMovies = async (): Promise<IMovie[]> => {
  const {
    data: { results },
  } = await axios.get<IResponseApi<IUnformattedMovie[]>>(
    `${API_MOVIES_URL}upcoming?api_key=${API_KEY}`
  );
  return formatMovies(results as IUnformattedMovie[]);
};
