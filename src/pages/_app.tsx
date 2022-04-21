import { GlobalCSS } from '@src/styles/global';
import { theme } from '@src/styles/theme';
import React from 'react';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'styled-components';

const OPEN_GRAPH_SEO = {
  type: 'website',
  site_name: 'Ryuash',
  images: [
    {
      url: 'https://ryuash.github.io/images/icon.png',
      width: 300,
      height: 300,
      alt: 'Preview Photo',
    },
  ],
};

const TWITTER_SEO = {
  cardType: 'summary',
};

const ADDITIONAL_LINK_TAGS_SEO = [
  {
    rel: 'icon',
    type: 'image/png',
    href: '/icons/favicon-32x32.png',
    sizes: '32x32',
  },
];

const ADDITIONAL_META_TAGS = [
  {
    property: 'viewport',
    content: 'minimum-scale=1, initial-scale=1, width=device-width',
  },
];

const TITLE = "Ryuash | WeeWooo"
const DESCRIPTION = "Porfolio Website of @ryuash"

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <DefaultSeo
        title={TITLE}
        description={DESCRIPTION}
        openGraph={{
          title: TITLE,
          url: "https://ryuash.github.io/",
          description: DESCRIPTION,
          ...OPEN_GRAPH_SEO,
        }}
        twitter={TWITTER_SEO}
        additionalLinkTags={ADDITIONAL_LINK_TAGS_SEO}
        additionalMetaTags={ADDITIONAL_META_TAGS}
      />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <GlobalCSS />
    </React.Fragment>
  )
}

export default MyApp
