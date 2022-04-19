import { GlobalCSS } from '@src/styles/global';
import { theme } from '@src/styles/theme';
import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="description" content="Porfolio Website of @ryuash" />
        <meta name="og:description" property="og:description" content="Porfolio Website of @ryuash" />
        <meta name="og:title" property="og:title" content="Ryuash" />
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" /> */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        {/* <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" /> */}
        {/* <link rel="manifest" href="/icons/site.webmanifest" /> */}
        <meta name="twitter:card" content="summary" />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:image" content="/icons/favicon-32x32.png" />
        <title>Ryuash</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <GlobalCSS />
    </React.Fragment>
  )
}

export default MyApp
