import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getDetails } from '@/services/movieService';
import {
  DetailContainer, Down, Left, Right, Text,
} from './styles';

const MovieDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState<any>( null );

  const detail = async () => {
    try {
      const res = await getDetails( id );
      setMovie( res );
      console.log( 'movie', res );
    } catch ( err ) {
      console.log( 'err', err );
    }
  };

  useEffect( () => {
    detail();
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

          <img src={ `https://image.tmdb.org/t/p/w500${movie.poster_path}` } alt="poster" />
        </Left>
        <Right>
          <p>
            &quot;
            {movie.tagline}
            &quot;
          </p>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </Right>
        <Down>
          <div>
            Géneros:
            {' '}
            {movie.genres.map( ( g: any ) => (
              <span key={ g.name }>
                {g.name}
                {' '}
              </span>
            ) )}
            <p>
              Año:
              {' '}
              {movie.release_date.slice( 0, 4 )}
            </p>
            <p>
              Duración:
              {' '}
              {movie.runtime}
              {' '}
              minutos
            </p>

          </div>

        </Down>

      </DetailContainer>
    </>
  );
};

export default MovieDetailPage;
