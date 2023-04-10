import React, { FC, useContext } from 'react';
import Header from '@/components/header';
import NowPlaying from '@/components/nowPlaying';
import Popular from '@/components/popular';
import AddMovieModal from '@/components/addMovie';
import { LiteFlixContext, LiteFlixProvider } from '../context';
import MyMovies from '@/components/myMovies';
import CarouselSeries from '@/components/carouselSeries';
import CarouselPopular from '@/components/carouselPopular';

interface IIndexProps {
  showModal: boolean;
}

const Index: FC<IIndexProps> = ( { showModal } ) => {
  const movies = typeof window !== 'undefined' && localStorage.getItem( 'movies' );
  const myMoviesExist = Boolean( movies );
  return (

    <>
      <Header mainPage />
      <NowPlaying />
      <Popular />
      {showModal && <AddMovieModal />}
      {myMoviesExist && <MyMovies />}
      <CarouselSeries />
      <CarouselPopular />
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
