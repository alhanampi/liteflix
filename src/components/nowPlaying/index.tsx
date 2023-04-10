/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { FC, useEffect, useState } from 'react';
import { BiPlay } from 'react-icons/bi';
import { VscAdd } from 'react-icons/vsc';
import { useRouter } from 'next/router';
import { getNowPlaying } from '@/services/movieService';
import { NowPlayingContainer, ButtonContainer } from './styles';
import Button from '../button';

const NowPlaying: FC = () => {
  const router = useRouter();
  const [nowPlaying, setNowPlaying] = useState<any>( [] );

  useEffect( () => {
    getNowPlaying()
      .then( ( res ) => {
        setNowPlaying( res );
      } )
      .catch( ( err ) => {
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
    <NowPlayingContainer>
      <img
        src={ `https://image.tmdb.org/t/p/original${nowPlaying.backdrop_path}` }
        alt="poster"
      />
      <h2>{nowPlaying.original_title}</h2>
      <p>
        Original de
        {' '}
        <span> LITEFLIX</span>
      </p>
      <ButtonContainer>
        <Button
          text="Reproducir"
          icon={ <BiPlay /> }
          onClick={ () => navigate( nowPlaying.id ) }
          variation
        />
        <Button
          text="Mi Lista"
          icon={ <VscAdd /> }
          variation={ false }
        />
      </ButtonContainer>
    </NowPlayingContainer>
  );
};

export default NowPlaying;
