import { FC, useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useRouter } from 'next/router';
import Thumbnail from '../thumbnail';
import { MyMoviesContainer, Title } from '../myMovies/styles';
import { getLatest } from '@/services/movieService';
import '@splidejs/react-splide/css';

const CarouselLatest:FC = () => {
  const router = useRouter();
  const [latest, setLatest] = useState<any>( [] );

  useEffect( () => {
    const getData = async () => {
      try {
        const res = await getLatest();
        setLatest( res );
      } catch ( err ) {
        console.log( err );
      }
    };

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
      <Title id="latest">En cartelera</Title>
      <MyMoviesContainer>
        <Splide
          options={ {
            drag: 'free',
            rewind: true,
            width: '100%',
            autoWidth: true,
          } }
        >
          {latest.map( ( p: any ) => (
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
              />
            </SplideSlide>
          ) )}
        </Splide>
      </MyMoviesContainer>
    </>
  );
};

export default CarouselLatest;
