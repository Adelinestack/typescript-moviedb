import axios from 'axios';
import { API_MOVIES_URL, API_TV_URL } from '../utils/APIConst';
import { API_KEY } from '../utils/APIKey';
import { IUnformattedCast, ICast } from '../../types/castTypes';
import { IResponseApi } from '../../types/apiTypes';
import { formatCast } from '../utils/format';

export const getCastByMovieId = async (movieId: string): Promise<ICast[]> => {
  const {
    data: { cast },
  } = await axios.get<IResponseApi<IUnformattedCast[]>>(
    `${API_MOVIES_URL}${movieId}/credits?api_key=${API_KEY}`
  );
  return formatCast(cast as IUnformattedCast[]);
};

export const getCastByTvId = async (tvId: string): Promise<ICast[]> => {
  const {
    data: { cast },
  } = await axios.get<IResponseApi<IUnformattedCast[]>>(
    `${API_TV_URL}${tvId}/credits?api_key=${API_KEY}`
  );
  return formatCast(cast as IUnformattedCast[]);
};
