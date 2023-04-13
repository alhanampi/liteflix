import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { getDetails, getSimilarMovies } from '@/services/movieService';
import {
  DetailContainer, Left, Right, Similar,
} from './styles';
import Thumbnail from '../../components/thumbnail';
import '@splidejs/react-splide/css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import LoadError from '@/components/loadError';
import Loader from '@/components/loader';

const MovieDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState<any>( null );
  const [similar, setSimilar] = useState<any>( null );
  const [loading, setLoading] = useState<boolean>( true );
  const [error, setError] = useState<boolean>( false );

  const detail = async () => {
    try {
      const res = await getDetails( id );
      setMovie( res );
      setLoading( false );
    } catch ( err ) {
      console.log( 'err', err );
      setError( true );
      setLoading( false );
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

  if ( loading ) {
    return (
      <Loader />
    );
  }

  if ( error ) {
    return (
      <LoadError />
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
                  image={
                    sim.backdrop_path === null
                      ? '/images/no-image.png'
                      : `https://image.tmdb.org/t/p/w500${sim.backdrop_path}`
                  }
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
      <Footer />
    </>
  );
};

export default MovieDetailPage;
