import axios from "axios";

const api = "https://api.themoviedb.org/3/movie/";
const key = "api_key=6f26fd536dd6192ec8a57e94141f8b20";

export const getNowPlaying = async (): Promise<any> => {
  try {
    const response = await axios.get(`${api}now_playing?${key}`);
    const {results} = response.data;

    // console.log("now playing:", results[0]);
    // console.log("type:", typeof results[0]);
    return results[0];
    
  } catch (error: any) {
    throw new Error(`Failed to fetch: ${error}`);
  }
};

export const getPopular = async(): Promise<any> => {
  try {
    const response = await axios.get(`${api}popular?${key}`); 
    
    const {results} = response.data;
    // console.log('popular:', results, typeof results);
    
    return results.slice(2, 6);


  } catch (error) {
    
  }
}