import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import { Circles } from 'react-loader-spinner';
import { getDetails, getSimilarMovies } from '@/services/movieService';
import {
  DetailContainer, Left, Right, Similar, NotFound,
} from './styles';
import Thumbnail from '../../components/thumbnail';
import '@splidejs/react-splide/css';
import Header from '@/components/header';

const MovieDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState<any>( null );
  const [similar, setSimilar] = useState<any>( null );

  const detail = async () => {
    try {
      const res = await getDetails( id );
      setMovie( res );
    } catch ( err ) {
      console.log( 'err', err );
    }
  };

  const similarTitles = async () => {
    try {
      const res = await getSimilarMovies( id );
      setSimilar( res );
    } catch ( err ) {
      console.log( 'err', err );
    }
  };

  useEffect( () => {
    detail();
    similarTitles();
  }, [] );

  if ( !movie ) {
    return (
      <>
        <Header mainPage={ false } />
        <NotFound>
          <h3>Ups! Volvé atrás e intentalo nuevamente</h3>
          <img src="/images/no-image.png" alt="movie not found!" />
        </NotFound>
      </>
    );
  }

  return (
    <>
      <Header mainPage={ false } />

      <DetailContainer>
        <Left>
          <img
            src={ `https://image.tmdb.org/t/p/w500${movie.poster_path}` }
            alt="poster"
          />
        </Left>
        <Right>
          {movie.tagline && (
            <p>
              &quot;
              {movie.tagline}
              &quot;
            </p>
          )}
          <h2>{movie.title}</h2>
          {movie.overview && <p>{movie.overview}</p>}

          <div>
            {movie.genres && (
            <p>
              Géneros:
              {' '}
              {movie.genres.map( ( g: any, i: number ) => (
                <span key={ g.name }>
                  {g.name}
                  {i !== movie.genres.length - 1 && ' | '}
                </span>
              ) )}
            </p>
            )}
            {movie.release_date && (
            <p>
              Año:
              {' '}
              {movie.release_date.slice( 0, 4 )}
            </p>
            )}
            {movie.runtime && (
            <p>
              Duración:
              {' '}
              {movie.runtime}
              {' '}
              minutos
            </p>
            )}
          </div>
        </Right>

      </DetailContainer>
      {similar && (
      <Similar>
        <h2>Querés ver algo similar?</h2>
        <Splide
          options={ {
            perPage: 6,
            drag: 'free',
            rewind: true,
            width: '100%',
            breakpoints: {
              1536: {
                perPage: 5,
              },
              1280: {
                perPage: 3,
              },
            },
          } }
        >
          {similar.map( ( sim: any ) => (
            <SplideSlide key={ sim.name }>
              <Thumbnail
                image={ sim.backdrop_path === null ? '/images/no-image.png'
                  : `https://image.tmdb.org/t/p/w500${sim.backdrop_path}` }
                text={ sim.original_title }
                score={ sim.vote_average }
                year={ sim.release_date.slice( 0, 4 ) }
                key={ sim.original_title }
                size="mid"
              />
            </SplideSlide>
          ) )}
        </Splide>
      </Similar>
      )}
    </>
  );
};

export default MovieDetailPage;
