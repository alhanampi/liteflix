import { FC, useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Thumbnail from '../thumbnail';
import { MyMoviesContainer, Title } from '../myMovies/styles';
import { getSeries } from '@/services/movieService';
import '@splidejs/react-splide/css';

const CarouselSeries:FC = () => {
  const [series, setSeries] = useState<any>( [] );

  useEffect( () => {
    getSeries()
      .then( ( res: any ) => {
        setSeries( res );
      } )
      .catch( ( err: any ) => {
        console.log( err );
      } );
  }, [] );
  return (
    <>
      <Title id="series">Series</Title>
      <MyMoviesContainer>
        <Splide
          options={ {
            perPage: 6,
            drag: 'free',
            rewind: true,
            width: '100%',
            gap: '2em',
          } }
        >
          {series.map( ( serie: any ) => (
            <SplideSlide key={ serie.name }>
              <Thumbnail
                key={ serie.name }
                text={ serie.name }
                image={ `https://image.tmdb.org/t/p/w500${serie.poster_path}` }
                score={ serie.vote_average }
                year={ serie.first_air_date.slice( 0, 4 ) }
                size="big"
              />
            </SplideSlide>
          ) )}
        </Splide>
      </MyMoviesContainer>
    </>
  );
};

export default CarouselSeries;
