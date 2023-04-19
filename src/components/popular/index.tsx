import {
  FC, useEffect, useState, useContext,
} from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { getPopular } from '@/services/movieService';
import { PopularContainer } from './styles';
import Thumbnail from '../thumbnail';
import { LiteFlixContext } from '@/context';

const Popular: FC = () => {
  const router = useRouter();
  const [popular, setPopular] = useState<any>( [] );
  const [showPopular, setShowPopular] = useState<boolean>( false );

  const {
    handlePopular, showPopularCont, showDropdownCont,
  } = useContext( LiteFlixContext );

  useEffect( () => {
    const getPopularMovies = async () => {
      try {
        const res = await getPopular();
        setPopular( res );
      } catch ( err ) {
        throw new Error( `Failed to fetch: ${err}` );
      }
    };
    getPopularMovies();
  }, [] );

  const showModalPopular = () => {
    setShowPopular( !showPopular );
    if ( showDropdownCont ) {
      handlePopular( showPopularCont );
    } else { handlePopular( !showPopularCont ); }
  };

  const navigate = ( id: number ): void => {
    router.push( {
      pathname: '/details/',
      query: { id },
    } );
  };

  return (
    <div>
      <PopularContainer>
        <h2 onClick={ showModalPopular }>
          <span>Ver:</span>
          &nbsp;
          populares
          {showPopularCont && showPopular ? <BsChevronUp /> : <BsChevronDown />}
        </h2>
        {showPopularCont && showPopular && (
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
