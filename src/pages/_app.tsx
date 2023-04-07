import "@/styles/globals";
import GlobalStyle from "@/styles/globals";
import type { AppProps } from "next/app";
import '../../public/fonts/bebas/fonts.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
