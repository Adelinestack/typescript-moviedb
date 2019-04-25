export interface IBasePeople {
  birthday?: string;
  deathday?: string;
  id?: number;
  name?: string;
  gender?: number;
  biography?: string;
  popularity?: number;
  adult?: boolean;
  homepage?: string;
}

export interface IUnformattedPeople extends IBasePeople {
  known_for_department?: string;
  also_known_as?: string[];
  place_of_birth?: string;
  profile_path?: string;
  imdb_id?: string;
}

export interface IPeople extends IBasePeople {
  knownForDepartment?: string;
  alsoKnownAs?: string[];
  placeOfBirth?: string;
  profilePath?: string;
  imdbId?: string;
}
