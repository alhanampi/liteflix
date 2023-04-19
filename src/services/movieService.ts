import axios, { AxiosResponse } from 'axios';
import {
  Movie, Series, SeriesDetail, Episode, Country,
} from '@/interfaces';

const api = 'https://api.themoviedb.org/3/';
const key = 'api_key=6f26fd536dd6192ec8a57e94141f8b20';

export const getNowPlaying = async (): Promise<Movie> => {
  try {
    const response: AxiosResponse<{ results: Movie[] }> = await axios.get(
      `${api}movie/now_playing?${key}`,
    );
    const { results } = response.data;
    return results[0];
  } catch ( error ) {
    throw new Error( `Failed to fetch: ${error}` );
  }
};

export const getPopular = async (): Promise<Movie[]> => {
  try {
    const response: AxiosResponse<{ results: Movie[] }> = await axios.get(
      `${api}movie/popular?${key}`,
    );
    const { results } = response.data;
    return results.slice( 2, 6 );
  } catch ( error ) {
    throw new Error( `Failed to fetch: ${error}` );
  }
};

export const getPopularExtra = async (): Promise<Movie[]> => {
  try {
    const response: AxiosResponse<{ results: Movie[] }> = await axios.get(
      `${api}movie/popular?${key}`,
    );
    const { results } = response.data;
    return results.slice( 0, 42 );
  } catch ( error ) {
    throw new Error( `Failed to fetch: ${error}` );
  }
};

export const getDetails = async (
  movieId: number |string | string[] | undefined,
): Promise<Movie> => {
  try {
    const response: AxiosResponse<Movie> = await axios.get(
      `${api}movie/${movieId}?${key}&language=ES`,
    );
    const movie = response.data;
    return movie;
  } catch ( error ) {
    throw new Error( `Failed to fetch: ${error}` );
  }
};

export const getSimilarMovies = async (
  movieId: number |string | string[] | undefined,
): Promise<Movie[]> => {
  try {
    const response: AxiosResponse<{ results: Movie[] }> = await axios.get(
      `${api}movie/${movieId}/similar?${key}&language=en-US&page=1`,
    );
    const { results } = response.data;
    return results;
  } catch ( error ) {
    throw new Error( `Failed to fetch: ${error}` );
  }
};

export const getLatest = async (): Promise<Movie[]> => {
  try {
    const response: AxiosResponse<{ results: Movie[] }> = await axios.get(
      `${api}movie/now_playing?${key}&language=en-US&page=1`,
    );
    const { results } = response.data;
    return results;
  } catch ( error ) {
    throw new Error( `Failed to fetch: ${error}` );
  }
};

export const getSeries = async (): Promise<Series[]> => {
  try {
    const response = await axios.get( `${api}tv/popular?${key}` );
    const { results } = response.data;
    return results;
  } catch ( error ) {
    throw new Error( `Failed to fetch: ${error}` );
  }
};

export const getSeriesDetails = async (
  seriesId: any,
): Promise<SeriesDetail> => {
  try {
    const response = await axios.get( `${api}tv/${seriesId}?${key}&language=ES` );
    const seriesDetail = response.data;
    return seriesDetail;
  } catch ( error ) {
    throw new Error( `Failed to fetch: ${error}` );
  }
};

export const getSeriesEpisodes = async (
  tvShowId: number,
): Promise<Episode[]> => {
  try {
    const response = await axios.get( `${api}tv/${tvShowId}/season/1?${key}` );
    const { episodes } = response.data;
    return episodes.slice( 0, 40 );
  } catch ( error ) {
    throw new Error( `Failed to fetch: ${error}` );
  }
};

// countries, languages, etc:

export const getCountryName = async ( countryCode: string ): Promise<string> => {
  try {
    const response = await axios.get( `${api}configuration/countries?${key}` );
    const countries: Country[] = response.data;
    const country = countries.find( ( c ) => c.iso_3166_1 === countryCode );
    return country ? country.english_name : '';
  } catch ( error ) {
    throw new Error( `Failed to fetch: ${error}` );
  }
};
