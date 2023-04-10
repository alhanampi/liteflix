/* eslint-disable consistent-return */
import axios from 'axios';

const api = 'https://api.themoviedb.org/3/';
const key = 'api_key=6f26fd536dd6192ec8a57e94141f8b20';

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
  } catch ( error ) { console.log( 'error:', error ); }
};

export const getSeries = async (): Promise<any> => {
  try {
    const response = await axios.get( `${api}tv/popular?${key}` );
    const { results } = response.data;
    return results.slice( 0, 42 );
  } catch ( error ) { console.log( 'error:', error ); }
};

export const getPopularExtra = async (): Promise<any> => {
  try {
    const response = await axios.get( `${api}movie/popular?${key}` );
    const { results } = response.data;
    return results.slice( 0, 42 );
  } catch ( error ) { console.log( 'error:', error ); }
};

export const getDetails = async ( movieId: any ): Promise<any> => {
  try {
    const response = await axios.get( `${api}movie/${movieId}?${key}&language=ES` );
    const movie = response.data;
    console.log( 'route:', `${api}movie/${movieId}?${key}` );
    console.log( 'movie:', movie );
    return movie;
  } catch ( error ) { console.log( 'error:', error ); }
};
