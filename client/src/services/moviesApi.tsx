import axios from 'axios';
import { IMovie } from '../../../types/movieTypes';
import { ICast } from '../../../types/castTypes';
import { IPeople } from '../../../types/peopleTypes';
import { ITv } from '../../../types/tvTypes';

export const getUpcoming = async (): Promise<IMovie[]> => {
  const { data } = await axios.get<IMovie[]>('/newMovies');
  return data as IMovie[];
};

export const getMovieById = async (movieId: string): Promise<IMovie> => {
  const { data } = await axios.get<IMovie>(`/movie/${movieId}`);
  return data as IMovie;
};

export const getCastByMovieId = async (movieId: string): Promise<ICast[]> => {
  const { data } = await axios.get<ICast[]>(`/cast/movie/${movieId}`);
  return data as ICast[];
};
export const getCastByTvId = async (tvId: string): Promise<ICast[]> => {
  const { data } = await axios.get<ICast[]>(`/cast/tv/${tvId}`);
  return data as ICast[];
};

export const getPeopleById = async (peopleId: string): Promise<IPeople> => {
  const { data } = await axios.get<IPeople>(`/person/${peopleId}`);
  return data as IPeople;
};

export const getSearchResults = async (keywords: string) => {
  const { data } = await axios.get(`/search/${keywords}`);
  return data;
};

export const getTvById = async (tvId: string): Promise<ITv> => {
  const { data } = await axios.get<ITv>(`/tv/${tvId}`);
  return data as ITv;
};
