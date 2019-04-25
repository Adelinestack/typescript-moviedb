export interface IBaseCast {
  character: string;
  gender: number;
  id: number;
  name: string;
  order: number;
}

export interface IUnformattedCast extends IBaseCast {
  cast_id: number;
  credit_id: string;
  profile_path: string;
}

export interface ICast extends IBaseCast {
  castId: number;
  creditId: string;
  profilePath: string;
}
