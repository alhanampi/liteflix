export interface IMovie {
  title: string;
  file: File | null | any;
}

export interface IButton {
  text: string;
  icon?: JSX.Element;
  onClick?: any;
  variation: boolean;
  disabled?: boolean;
  classN?: string;
}

export interface IHeader {
  mainPage?: boolean;
}

export interface IProgressBar {
  completed: number;
  color: string;
  cancelUpload: any;
}

export interface IThumbnail {
  image: string;
  text: string;
  score?: number;
  year?: string;
  size?: string;
  onClick?: any;
  movie?: boolean;
}

// service interfaces:
export interface Movie {
  id: number | string | string[] | undefined;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export interface Series {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  first_air_date: string;
  vote_average: number;
}

export interface Country {
  iso_3166_1: string;
  english_name: string;
}

export interface Episode {
  id: number;
  name: string;
  overview: string;
  still_path: string | null;
  air_date: string;
  episode_number: number;
  season_number: number;
}

export interface SeriesDetail {
  id: string | string[] | number | undefined;
  name: string;
  overview: string;
  poster_path: string | null;
  vote_average: number;
  first_air_date: string;
  genres: { id: number; name: string }[];
  episode_run_time: number[];
  origin_country: string;
}
