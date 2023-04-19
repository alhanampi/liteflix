import { FC, useEffect, useState } from 'react';
import { BsPlay } from 'react-icons/bs';
import { VscAdd } from 'react-icons/vsc';
import { useRouter } from 'next/router';
import { getNowPlaying } from '@/services/movieService';
import { NowPlayingContainer, ButtonContainer } from './styles';
import Button from '../button';

const NowPlaying: FC = () => {
  const router = useRouter();
  const [nowPlaying, setNowPlaying] = useState<any>( [] );

  useEffect( () => {
    const getPlaying = async () => {
      try {
        const res = await getNowPlaying();
        setNowPlaying( res );
      } catch ( err ) {
        throw new Error( `Failed to fetch: ${err}` );
      }
    };

    getPlaying();
  }, [] );

  const navigate = ( id: number ): void => {
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
        &nbsp;
        <span> LITEFLIX</span>
      </p>
      <ButtonContainer>
        <Button
          text="Reproducir"
          icon={ <BsPlay /> }
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
