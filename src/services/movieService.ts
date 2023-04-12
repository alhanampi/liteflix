/* eslint-disable consistent-return */
import axios from 'axios';

const api = 'https://api.themoviedb.org/3/';
const key = 'api_key=6f26fd536dd6192ec8a57e94141f8b20';

// movies:
export const getNowPlaying = async (): Promise<any> => {
  try {
    const response = await axios.get( `${api}movie/now_playing?${key}` );
    const { results } = response.data;
    return results[0];
  } catch ( error: any ) {
    throw new Error( `Failed to fetch: ${error}` );
  }
};

export const getPopular = async (): Promise<any> => {
  try {
    const response = await axios.get( `${api}movie/popular?${key}` );
    const { results } = response.data;
    return results.slice( 2, 6 );
  } catch ( error ) {
    throw new Error( `Failed to fetch: ${error}` );
  }
};

export const getPopularExtra = async (): Promise<any> => {
  try {
    const response = await axios.get( `${api}movie/popular?${key}` );
    const { results } = response.data;
    return results.slice( 0, 42 );
  } catch ( error ) {
    throw new Error( `Failed to fetch: ${error}` );
  }
};

export const getDetails = async ( movieId: any ): Promise<any> => {
  try {
    const response = await axios.get( `${api}movie/${movieId}?${key}&language=ES` );
    const movie = response.data;
    return movie;
  } catch ( error ) {
    throw new Error( `Failed to fetch: ${error}` );
  }
};

export const getSimilarMovies = async ( movieId: any ): Promise<any> => {
  try {
    const response = await axios.get( `${api}movie/${movieId}/similar?${key}&language=en-US&page=1` );
    const { results } = response.data;
    return results;
  } catch ( error ) {
    throw new Error( `Failed to fetch: ${error}` );
  }
};

export const getLatest = async (): Promise<any> => {
  try {
    const response = await axios.get( `${api}movie/now_playing?${key}&language=en-US&page=1` );
    const { results } = response.data;
    return results;
  } catch ( error ) {
    throw new Error( `Failed to fetch: ${error}` );
  }
};

// series

export const getSeries = async (): Promise<any> => {
  try {
    const response = await axios.get( `${api}tv/popular?${key}` );
    const { results } = response.data;
    return results;
  } catch ( error ) {
    throw new Error( `Failed to fetch: ${error}` );
  }
};

export const getSeriesDetails = async ( seriesId: any ): Promise<any> => {
  try {
    const response = await axios.get( `${api}tv/${seriesId}?${key}&language=ES` );
    const seriesDetail = response.data;
    return seriesDetail;
  } catch ( error ) {
    throw new Error( `Failed to fetch: ${error}` );
  }
};

export const getSeriesEpisodes = async ( tvShowId: string ): Promise<any> => {
  console.log( `${api}tv/${tvShowId}/season/1?${key}` );
  try {
    const response = await axios.get( `${api}tv/${tvShowId}/season/1?${key}` );
    const { episodes } = response.data;
    console.log( episodes );
    return episodes.slice( 0, 40 );
  } catch ( error ) {
    throw new Error( `Failed to fetch: ${error}` );
  }
};

// countries, languages, etc:

export const getCountryName = async ( countryCode: string ): Promise<string> => {
  try {
    const response = await axios.get( `${api}configuration/countries?${key}` );
    const countries = response.data;
    const country = countries.find( ( c: any ) => c.iso_3166_1 === countryCode );
    return country.english_name;
  } catch ( error ) {
    throw new Error( `Failed to fetch: ${error}` );
  }
};
