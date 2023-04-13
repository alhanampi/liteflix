import React from 'react';
import Header from '../header';
import { NotFound } from './styles';
import Footer from '../footer';

const LoadError = () => (
  <>
    <Header mainPage={ false } />
    <NotFound>
      <h3>Ups! Volvé atrás e intentalo nuevamente</h3>
      <img src="/images/no-image.png" alt="serie not found!" />
    </NotFound>
    <Footer />
  </>
);

export default LoadError;
