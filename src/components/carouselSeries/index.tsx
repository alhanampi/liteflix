import { FC, useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useRouter } from 'next/router';
import Thumbnail from '../thumbnail';
import { MyMoviesContainer, Title } from '../myMovies/styles';
import { getSeries } from '@/services/movieService';
import '@splidejs/react-splide/css';

const CarouselSeries:FC = () => {
  const router = useRouter();
  const [series, setSeries] = useState<any>( [] );

  useEffect( () => {
    async function getData() {
      try {
        const res = await getSeries();
        setSeries( res );
      } catch ( err ) {
        console.log( err );
      }
    }
    getData();
  }, [] );

  const navigateToSeries = ( id: number ): void => {
    console.log( id );
    router.push( {
      pathname: '/series-details/',
      query: { id },
    } );
  };

  return (
    <>
      <Title id="series">Series</Title>
      <MyMoviesContainer>
        <Splide
          options={ {
            drag: 'free',
            rewind: true,
            width: '100%',
            autoWidth: true,
            gap: '2em',
          } }
        >
          {series.map( ( serie: any ) => (
            <SplideSlide
              key={ serie.name }
              onClick={ () => navigateToSeries( serie.id ) }
            >
              <Thumbnail
                key={ serie.name }
                text={ serie.name }
                image={ serie.poster_path === null ? '/images/no-image.png'
                  : `https://image.tmdb.org/t/p/w500${serie.poster_path}` }
                score={ serie.vote_average }
                year={ serie.first_air_date.slice( 0, 4 ) }
                size="big"
                movie={ false }
              />
            </SplideSlide>
          ) )}
        </Splide>
      </MyMoviesContainer>
    </>
  );
};

export default CarouselSeries;
