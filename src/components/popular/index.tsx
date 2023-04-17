/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { FC, useEffect, useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { getPopular } from '@/services/movieService';
import { PopularContainer } from './styles';
import Thumbnail from '../thumbnail';

const Popular: FC = () => {
  const router = useRouter();
  const [popular, setPopular] = useState<any>( [] );
  const [showPopular, setShowPopular] = useState<boolean>( false );

  useEffect( () => {
    const getPopularMovies = async () => {
      try {
        const res = await getPopular();
        setPopular( res );
      } catch ( err ) {
        console.log( err );
      }
    };
    getPopularMovies();
  }, [] );

  const navigate = ( id: number ): void => {
    console.log( id );
    router.push( {
      pathname: '/details/',
      query: { id },
    } );
  };

  return (
    <div>
      <PopularContainer>
        <h2 onClick={ () => setShowPopular( !showPopular ) }>
          <span>Ver:</span>
          &nbsp;
          populares
          {showPopular ? <BsChevronUp /> : <BsChevronDown />}
        </h2>
        {showPopular && (
          <div className="animate">
            {popular.map( ( p: any ) => (
              <Thumbnail
                image={ `https://image.tmdb.org/t/p/w500${p.backdrop_path}` }
                text={ p.original_title }
                score={ p.vote_average }
                year={ p.release_date.slice( 0, 4 ) }
                key={ p.original_title }
                onClick={ () => navigate( p.id ) }
                size="biggish"
                movie
              />
            ) )}
          </div>
        )}
      </PopularContainer>
    </div>
  );
};

export default Popular;
