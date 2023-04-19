import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { Helmet } from 'react-helmet';

class MyDocument extends Document {
  // Load styles before rendering
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage( {
        // eslint-disable-next-line react/jsx-filename-extension, react/jsx-props-no-spreading
        enhanceApp: ( App ) => ( props ) => sheet.collectStyles( <App { ...props } /> ),
      } );

      const initialProps = await Document.getInitialProps( ctx );
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="icon" href="images/logo.ico" />
          <Helmet>
            <meta httpEquiv="Content-Security-Policy" content="default-src 'self';" />
            <meta name="referrer" content="same-origin" />
            <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
            <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
            <meta httpEquiv="Cache-Control" content="no-cache" />
          </Helmet>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
