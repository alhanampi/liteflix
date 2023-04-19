import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { getSeriesDetails, getSeriesEpisodes, getCountryName } from '@/services/movieService';
import '@splidejs/react-splide/css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import LoadError from '@/components/loadError';
import Loader from '@/components/loader';
import Thumbnail from '../../components/thumbnail';
import {
  DetailContainer, Left, Right, Similar,
} from '../details/styles';

const SeriesDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [serie, setSerie] = useState<any>( null );
  const [episodes, setEpisodes] = useState<any>( null );
  const [country, setCountry] = useState<string>( '' );
  const [loading, setLoading] = useState<boolean>( true );
  const [error, setError] = useState<boolean>( false );

  const detail = async () => {
    try {
      const res = await getSeriesDetails( id );
      setSerie( res );
      const countryName = await getCountryName( res.origin_country[0] );
      setCountry( countryName );
      setLoading( false );
    } catch ( err ) {
      setError( true );
      setLoading( false );
      throw new Error( `Failed to fetch: ${error}` );
    }
  };

  const episodeList = async ( id: any ) => {
    try {
      const res = await getSeriesEpisodes( id );
      setEpisodes( res );
    } catch ( err ) {
      throw new Error( `Failed to fetch: ${error}` );
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

  if ( loading ) {
    return (
      <Loader />
    );
  }

  if ( error ) {
    return (
      <LoadError />
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
            drag: 'free',
            rewind: true,
            width: '100%',
            gap: '2em',
            autoWidth: true,
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
      <Footer />
    </>
  );
};

export default SeriesDetailPage;
