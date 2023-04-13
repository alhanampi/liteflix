import React from 'react';
import { Circles } from 'react-loader-spinner';
import { Spinner } from './styles';
import Header from '../header';
import Footer from '../footer';

const Loader = () => (
  <>
    <Header mainPage={ false } />
    <Spinner>
      <Circles color="rgb(100, 238, 188)" />
    </Spinner>
    <Footer />
  </>
);

export default Loader;
