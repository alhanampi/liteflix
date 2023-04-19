import type { AppProps } from 'next/app';
import '../../public/fonts/bebas/fonts.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { NoSsr, ThemeProvider } from '@material-ui/core';
import { LiteFlixProvider } from '@/context';
import GlobalStyle from '@/styles/globals';

const emptyTheme = {};

export default function App( { Component, pageProps }: AppProps ) {
  return (
    <LiteFlixProvider>
      <CssBaseline />
      <NoSsr>
        <ThemeProvider theme={ emptyTheme }>
          <GlobalStyle />
          <Component { ...pageProps } />
        </ThemeProvider>
      </NoSsr>
    </LiteFlixProvider>
  );
}
