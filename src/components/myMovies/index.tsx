import { Splide, SplideSlide } from '@splidejs/react-splide';
import { MyMoviesContainer, Title, MyMoviesMain } from './styles';
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
    <MyMoviesMain>
      { movies.length > 0 && (
        <>
          <Title id="misPeliculas">Mis películas</Title>
          <MyMoviesContainer>
            {movies.length > 5 ? (
              <Splide
                options={ {
                  drag: 'free',
                  rewind: true,
                  width: '100%',
                  gap: '2em',
                  autoWidth: true,
                } }
              >
                {movies.map( ( movie: any ) => (
                  <SplideSlide key={ movie.title }>
                    <Thumbnail
                      key={ movie.title }
                      text={ movie.title }
                      image={ movie.file }
                      movie
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
                  movie
                />
              ) )
            )}
          </MyMoviesContainer>
        </>
      )}
    </MyMoviesMain>
  );
};

export default MyMovies;
export const ssr = false;
