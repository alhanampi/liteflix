import { FC, useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { getSeries } from '@/services/movieService';
import { useNavigateSeries } from '@/utils/useNavigateSeries';
import Thumbnail from '../thumbnail';
import { MyMoviesContainer, Title } from '../myMovies/styles';
import '@splidejs/react-splide/css';

const CarouselSeries:FC = () => {
  const navigateToSeries = useNavigateSeries();
  const [series, setSeries] = useState<any>( [] );

  useEffect( () => {
    async function getData() {
      try {
        const res = await getSeries();
        setSeries( res );
      } catch ( err ) {
        throw new Error( `Failed to fetch: ${err}` );
      }
    }
    getData();
  }, [] );

  return (
    <>
      <Title id="series">Series</Title>
      <MyMoviesContainer>
        <Splide
          options={ {
            drag: 'free',
            rewind: true,
            width: '100%',
            gap: '2em',
            autoWidth: true,
            breakpoints: {
              412: {
                gap: 0,
              },
            },
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
