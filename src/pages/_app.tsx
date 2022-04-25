/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import '../styles.css';
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react/function-component-definition
export default function App({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
