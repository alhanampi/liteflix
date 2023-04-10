/* eslint-disable no-shadow */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import { Circles } from 'react-loader-spinner';
import { getSeriesDetails, getSeriesEpisodes, getCountryName } from '@/services/movieService';
import {
  DetailContainer, Left, Right, Similar, NotFound,
} from '../details/styles';
import Thumbnail from '../../components/thumbnail';
import '@splidejs/react-splide/css';
import Header from '@/components/header';

const SeriesDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [serie, setSerie] = useState<any>( null );
  const [episodes, setEpisodes] = useState<any>( null );
  const [country, setCountry] = useState<string>( '' );

  const detail = async () => {
    try {
      const res = await getSeriesDetails( id );
      setSerie( res );
      const countryName = await getCountryName( res.origin_country[0] );
      setCountry( countryName );
    } catch ( err ) {
      console.log( 'err', err );
    }
  };

  const episodeList = async ( id: any ) => {
    try {
      const res = await getSeriesEpisodes( id );
      setEpisodes( res );
      console.log( 'similar', res );
    } catch ( err ) {
      console.log( 'err', err );
    }
  };

  useEffect( () => {
    detail();
    episodeList( id );
  }, [] );

  useEffect( () => {
    if ( country ) {
      setCountry( country );
    }
  }, [country] );

  if ( !serie ) {
    return (
      <NotFound>
        <h3>Ups! Volvé atrás e intentalo nuevamente</h3>
        <img src="/images/no-image.png" alt="serie not found!" />
      </NotFound>
      // implementar spinner mientras cargue:
      // <Circles
      //   height="120"
      //   width="120"
      //   color="rgb(100, 238, 188)"
      //   ariaLabel="circles-loading"
      //   wrapperStyle={ {} }
      //   wrapperClass=""
      //   visible
      // />
    );
  }

  return (
    <>
      <Header mainPage={ false } />

      <DetailContainer>
        <Left>
          <img
            src={ `https://image.tmdb.org/t/p/w500${serie.poster_path}` }
            alt="poster"
          />
        </Left>
        <Right>
          {serie.tagline && (
            <p>
              &quot;
              {serie.tagline}
              &quot;
            </p>
          )}
          <h2>{serie.name}</h2>
          {serie.overview && <p>{serie.overview}</p>}

          <div>
            {serie.genres && (
            <p>
              Géneros:
              {serie.genres.map( ( g: any, i: number ) => (
                <span key={ g.name }>
                  {g.name}
                  {i !== serie.genres.length - 1 && ' | '}
                </span>
              ) )}
            </p>
            )}
            {serie.seasons && (
            <p>
              Año:
              {serie.seasons[0].air_date.slice( 0, 4 )}
            </p>
            )}
            {serie.number_of_episodes && (
            <p>
              Cantidad de episodios:
              {serie.number_of_episodes}
              -
              {serie.number_of_seasons}
              temporadas
            </p>
            )}
            {country && (
            <p>
              País de origen:
              {country}
            </p>
            )}
          </div>
        </Right>

      </DetailContainer>
      {episodes && (
      <Similar>
        <h2>Temporada 1</h2>
        <Splide
          options={ {
            perPage: 4,
            drag: 'free',
            rewind: true,
            width: '100%',
          } }
        >
          {episodes.map( ( ep: any ) => (
            <SplideSlide key={ ep.name }>
              <Thumbnail
                image={ ep.still_path === null ? '/images/no-image.png'
                  : `https://image.tmdb.org/t/p/w500${ep.still_path}` }
                text={ ep.name }
                key={ ep.name }
                size="mid"
              />
            </SplideSlide>
          ) )}
        </Splide>
      </Similar>
      )}
    </>
  );
};

export default SeriesDetailPage;
