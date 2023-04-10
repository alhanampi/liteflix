import React from 'react';
import { MyMoviesContainer, Title } from './styles';
import Thumbnail from '../thumbnail';

export const MyMovies = () => {
  let movies = [];
  try {
    const moviesJson = localStorage.getItem( 'movies' );
    if ( moviesJson ) {
      movies = JSON.parse( moviesJson );
    }
  } catch ( error ) {
    console.error( 'Error parsing movies JSON:', error );
  }

  return (
    <>
      <Title id="misPeliculas">Mis películas</Title>
      <MyMoviesContainer>
        {movies.map( ( movie: any ) => (
          <Thumbnail key={ movie.title } text={ movie.title } image={ movie.file } />
        ) )}
      </MyMoviesContainer>
    </>
  );
};

export default MyMovies;
export const ssr = false;
