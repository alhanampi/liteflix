/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/extensions */
import type { AppProps } from 'next/app';
import GlobalStyle from '@/styles/globals';
import '../../public/fonts/bebas/fonts.css';

export default function App( { Component, pageProps }: AppProps ) {
  return (
    <>
      <GlobalStyle />
      <Component { ...pageProps } />
    </>
  );
}
