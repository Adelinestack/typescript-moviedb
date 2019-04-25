import { IUnformattedMovie } from './movieTypes';
import { IUnformattedTv } from './tvTypes';
import { IUnformattedPerson } from './personTypes';

export interface ISearch {
  results: (IUnformattedMovie | IUnformattedTv | IUnformattedPerson)[];
}
export type formattedSearch = {
  id: number;
  mediaType: string;
  title?: string;
  posterPath?: string;
};
