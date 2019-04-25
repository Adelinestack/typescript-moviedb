import { IMovie } from './movieTypes';
import { ITv } from './tvTypes';

export interface IBasePerson {
  popularity?: number;
  id?: number;
  name?: string;
  adult?: boolean;
}

export interface IUnformattedPerson extends IBasePerson {
  media_type: string;
  profile_path?: string;
  known_for?: (IMovie | ITv)[];
}

export interface IPerson extends IBasePerson {
  mediaType: string;
  profilePath?: string;
  knownFor?: (IMovie | ITv)[];
}
