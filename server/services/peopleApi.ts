import axios from 'axios';
import { API_PEOPLE_URL } from '../utils/APIConst';
import { API_KEY } from '../utils/APIKey';
import { IUnformattedPeople, IPeople } from '../../types/peopleTypes';
import { formatPeople } from '../utils/format';

export const getPeopleById = async (peopleId: string): Promise<IPeople> => {
  const { data } = await axios.get<IUnformattedPeople>(
    `${API_PEOPLE_URL}${peopleId}?api_key=${API_KEY}`
  );
  return formatPeople(data as IUnformattedPeople);
};
