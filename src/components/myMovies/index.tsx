import { Splide, SplideSlide } from '@splidejs/react-splide';
import { MyMoviesContainer, Title } from './styles';
import Thumbnail from '../thumbnail';
import '@splidejs/react-splide/css';

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
        {movies.length > 5 ? (
          <Splide
            options={ {
              perPage: 4,
              drag: 'free',
              gap: '1em',
              rewind: true,
              width: '100%',
            } }
          >
            {movies.map( ( movie: any ) => (
              <SplideSlide key={ movie.title }>
                <Thumbnail
                  key={ movie.title }
                  text={ movie.title }
                  image={ movie.file }
                />
              </SplideSlide>
            ) )}
          </Splide>
        ) : (
          movies.map( ( movie: any ) => (
            <Thumbnail
              key={ movie.title }
              text={ movie.title }
              image={ movie.file }
            />
          ) )
        )}
      </MyMoviesContainer>
    </>
  );
};

export default MyMovies;
export const ssr = false;
