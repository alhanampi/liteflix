/* eslint-disable react/jsx-props-no-spreading */

import type { AppProps } from 'next/app';
import GlobalStyle from '@/styles/globals';
import '../../public/fonts/bebas/fonts.css';
import { LiteFlixProvider } from '@/context';

export default function App( { Component, pageProps }: AppProps ) {
  return (
    <LiteFlixProvider>
      <GlobalStyle />
      <Component { ...pageProps } />
    </LiteFlixProvider>

  );
}
