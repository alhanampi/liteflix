import React, { FC, useContext } from 'react';
import Header from '@/components/header';
import NowPlaying from '@/components/nowPlaying';
import Popular from '@/components/popular';
import AddMovieModal from '@/components/addMovie';
import { LiteFlixContext, LiteFlixProvider } from '../context';

interface IIndexProps {
  showModal: boolean;
}

const Index: FC<IIndexProps> = ( { showModal } ) => (
  <>
    <Header />
    <NowPlaying />
    <Popular />
    {showModal && <AddMovieModal />}
  </>
);

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
