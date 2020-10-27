import Document, {
  Html,
  Main,
  Head,
  NextScript,
  DocumentContext,
} from 'next/document';
// import Head from 'next/head';

class MyDocument extends Document {
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx);

  //   return { ...initialProps };
  // }
  render() {
    return (
      <Html>
        <Head>
          <title>CHINTAI ADMIN</title>
          {/* <link rel="icon" href="/favicon.ico" /> */}
          {/* <script src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`} /> */}
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
