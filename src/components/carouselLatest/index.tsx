import { FC, useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { getLatest } from '@/services/movieService';
import { useNavigate } from '@/utils/useNavigate';
import Thumbnail from '../thumbnail';
import { MyMoviesContainer, Title } from '../myMovies/styles';
import '@splidejs/react-splide/css';

const CarouselLatest:FC = () => {
  const navigate = useNavigate();
  const [latest, setLatest] = useState<any>( [] );

  useEffect( () => {
    const getData = async () => {
      try {
        const res = await getLatest();
        setLatest( res );
      } catch ( err ) {
        throw new Error( `Failed to fetch: ${err}` );
      }
    };

    getData();
  }, [] );

  return (
    <>
      <Title id="latest">En cartelera</Title>
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
                movie
              />
            </SplideSlide>
          ) )}
        </Splide>
      </MyMoviesContainer>
    </>
  );
};

export default CarouselLatest;
