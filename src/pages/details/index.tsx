import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { getDetails, getSimilarMovies } from '@/services/movieService';
import {
  DetailContainer, Left, Right, Text,
} from './styles';
import Thumbnail from '../../components/thumbnail';
import '@splidejs/react-splide/css';

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
      console.log( 'similar', res );
    } catch ( err ) {
      console.log( 'err', err );
    }
  };

  useEffect( () => {
    detail();
    similarTitles();
  }, [] );

  if ( !movie ) {
    // Render a loading indicator or message here
    return <div>Loading...</div>;
  }

  return (
    <>
      <Text onClick={ () => router.back() }>Volver al home!</Text>
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
              {movie.genres.map( ( g: any ) => (
                <span key={ g.name }>
                  {g.name}
                  {' '}
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
      <>
        <h3>Querés ver algo similar?</h3>
        <Splide
          options={ {
            perPage: 4,
            drag: 'free',
            rewind: true,
            width: '100%',
          } }
        >
          {similar.map( ( sim: any ) => (
            <SplideSlide key={ sim.name }>
              <Thumbnail
                image={ `https://image.tmdb.org/t/p/w500${sim.backdrop_path}` }
                text={ sim.original_title }
                score={ sim.vote_average }
                year={ sim.release_date.slice( 0, 4 ) }
                key={ sim.original_title }
                size="mid"
              />
            </SplideSlide>
          ) )}
        </Splide>
      </>
      )}
    </>
  );
};

export default MovieDetailPage;
