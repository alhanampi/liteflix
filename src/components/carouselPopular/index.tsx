import { FC, useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { getPopularExtra } from '@/services/movieService';
import Thumbnail from '../thumbnail';
import { MyMoviesContainer, Title } from '../myMovies/styles';
import '@splidejs/react-splide/css';
import { useNavigate } from '@/utils/useNavigate';

const CarouselPopular:FC = () => {
  const navigate = useNavigate();
  const [populars, setPopulars] = useState<any>( [] );

  useEffect( () => {
    async function getData() {
      try {
        const res = await getPopularExtra();
        setPopulars( res );
      } catch ( error ) {
        throw new Error( `Failed to fetch: ${error}` );
      }
    }
    getData();
  }, [] );

  return (
    <>
      <Title id="populares">Películas Populares</Title>
      <MyMoviesContainer>
        <Splide
          options={ {
            drag: 'free',
            rewind: true,
            width: '100%',
            gap: '2em',
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
