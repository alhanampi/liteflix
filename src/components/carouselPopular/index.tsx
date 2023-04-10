import { FC, useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Thumbnail from '../thumbnail';
import { MyMoviesContainer, Title } from '../myMovies/styles';
import { getPopularExtra } from '@/services/movieService';
import '@splidejs/react-splide/css';
import { useRouter } from 'next/router';

const CarouselPopular:FC = () => {
  const router = useRouter();
  const [populars, setPopulars] = useState<any>( [] );

  useEffect( () => {
    getPopularExtra()
      .then( ( res: any ) => {
        setPopulars( res );
      } )
      .catch( ( err: any ) => {
        console.log( err );
      } );
  }, [] );

  const navigate = ( id: number ): void => {
    console.log( id );
    router.push( {
      pathname: '/details/',
      query: { id },
    } );
  };

  return (
    <>
      <Title id="populares">Popular Titles</Title>
      <MyMoviesContainer>
        <Splide
          options={ {
            perPage: 4,
            drag: 'free',
            rewind: true,
            width: '100%',
          } }
        >
          {populars.map( ( p: any ) => (
            <SplideSlide key={ p.name } onClick={ () => navigate( p.id ) }>
              <Thumbnail
                image={ `https://image.tmdb.org/t/p/w500${p.backdrop_path}` }
                text={ p.original_title }
                score={ p.vote_average }
                year={ p.release_date.slice( 0, 4 ) }
                key={ p.original_title }
                size="mid"
              />
            </SplideSlide>
          ) )}
        </Splide>
      </MyMoviesContainer>
    </>
  );
};

export default CarouselPopular;
