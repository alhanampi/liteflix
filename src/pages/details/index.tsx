import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getDetails } from '@/services/movieService';
import { DetailContainer, Text } from './styles';

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
        details here
        {/* create the movie card here */}
      </DetailContainer>
    </>
  );
};

export default MovieDetailPage;
