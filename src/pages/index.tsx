import React, { FC, useContext } from 'react';
import Header from '@/components/header';
import NowPlaying from '@/components/nowPlaying';
import Popular from '@/components/popular';
import AddMovieModal from '@/components/addMovie';
import { LiteFlixContext, LiteFlixProvider } from '../context';
import MyMovies from '@/components/myMovies';

interface IIndexProps {
  showModal: boolean;
}

const Index: FC<IIndexProps> = ( { showModal } ) => {
  const movies = typeof window !== 'undefined' && localStorage.getItem( 'movies' );
  const myMoviesExist = Boolean( movies );
  return (

    <>
      <Header />
      <NowPlaying />
      <Popular />
      {showModal && <AddMovieModal />}
      {myMoviesExist && <MyMovies />}
    </>
  );
};

const IndexWithProvider: FC = () => {
  const { showModal } = useContext( LiteFlixContext );

  return <Index showModal={ showModal } />;
};

const App: FC = () => (
  <LiteFlixProvider>
    <IndexWithProvider />
  </LiteFlixProvider>
);

export default App;
