import { FC, useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useRouter } from 'next/router';
import Thumbnail from '../thumbnail';
import { MyMoviesContainer, Title } from '../myMovies/styles';
import { getPopularExtra } from '@/services/movieService';
import '@splidejs/react-splide/css';

const CarouselPopular:FC = () => {
  const router = useRouter();
  const [populars, setPopulars] = useState<any>( [] );

  useEffect( () => {
    async function getData() {
      try {
        const res = await getPopularExtra();
        setPopulars( res );
      } catch ( err ) {
        console.log( err );
      }
    }
    getData();
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
      <Title id="populares">Películas Populares</Title>
      <MyMoviesContainer>
        <Splide
          options={ {
            drag: 'free',
            rewind: true,
            width: '100%',
            autoWidth: true,
          } }
        >
          {populars.map( ( p: any ) => (
            <SplideSlide
              key={ p.name }
              onClick={ () => navigate( p.id ) }
            >
              <Thumbnail
                image={ p.backdrop_path === null ? '/images/no-image.png'
                  : `https://image.tmdb.org/t/p/w500${p.backdrop_path}` }
                text={ p.original_title }
                score={ p.vote_average && p.vote_average }
                year={ p.release_date && p.release_date.slice( 0, 4 ) }
                key={ p.original_title }
                size="mid"
                movie
              />
            </SplideSlide>
          ) )}
        </Splide>
      </MyMoviesContainer>
    </>
  );
};

export default CarouselPopular;
