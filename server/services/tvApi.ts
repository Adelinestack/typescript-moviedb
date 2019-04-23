import axios from 'axios';
import { API_TV_URL } from '../utils/APIConst';
import { API_KEY } from '../utils/APIKey';
import { ITv, IUnformattedTv } from '../../types/tvTypes';
import { IPerson, IUnformattedPerson } from '../../types/personTypes';
import { formatTv } from '../utils/format';

export const getTvById = async (tvId: string): Promise<ITv> => {
  const { data } = await axios.get<IUnformattedTv>(
    `${API_TV_URL}${tvId}?api_key=${API_KEY}`
  );
  return formatTv(data as IUnformattedTv);
};
