import React, { FC, useContext } from 'react';
import Header from '@/components/header';
import NowPlaying from '@/components/nowPlaying';
import Popular from '@/components/popular';
import AddMovieModal from '@/components/addMovie';
import MyMovies from '@/components/myMovies';
import CarouselSeries from '@/components/carouselSeries';
import CarouselPopular from '@/components/carouselPopular';
import CarouselLatest from '@/components/carouselLatest';
import Footer from '@/components/footer';
import { LiteFlixContext, LiteFlixProvider } from '../context';
import Backdrop from '@/components/backdrop';

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
      {showModal && (
      <>
        <AddMovieModal />
        <Backdrop />
      </>
      )}
      {myMoviesExist && <MyMovies />}
      <CarouselSeries />
      <CarouselPopular />
      <CarouselLatest />
      <Footer />
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
