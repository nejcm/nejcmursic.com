const path = require('path');
const config = require('./config/website');
const {createProxyMiddleware} = require('http-proxy-middleware');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = config.siteUrl,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

const linkIcon = `<svg aria-hidden="true" width="20" height="20" version="1.1" viewBox="0 0 512 512">
  <g>
    <path
      fill-rule="evenodd"
      d="M287.4,373.1H284c-18.7,0.1-37.3-3.5-54.6-10.6c-3.2-1.3-6.9-0.6-9.3,1.9l-64.4,64.5c-20,20-52.4,20-72.4,0
      c-20-20-20-52.4,0-72.4l109-108.9c20-20,52.4-20,72.4,0c13.5,12.7,34.5,12.7,48,0c5.8-5.8,9.3-13.5,9.9-21.7
      c0.6-9.8-3-19.3-9.9-26.3c-6.1-6.1-12.8-11.5-20.1-16.1c-19.2-12.3-41.6-18.9-64.4-18.9c-31.7-0.1-62.1,12.5-84.5,35L34.9,308.2
      C12.6,330.6,0.1,360.9,0,392.5c0,66,53.4,119.5,119.4,119.5c31.6,0.1,62-12.4,84.4-34.8l89.6-89.6c1.6-1.6,2.5-3.8,2.5-6.1
      C295.9,376.9,292.1,373.1,287.4,373.1z"
    />
    <path
      fill-rule="evenodd"
      d="M477.1,35c-46.7-46.7-122.3-46.7-169,0l-89.5,89.4c-2.5,2.5-3.2,6.2-1.8,9.4c1.4,3.2,4.5,5.3,8,5.2h3.2
      c18.7,0,37.2,3.6,54.5,10.7c3.2,1.3,6.9,0.6,9.3-1.9l64.3-64.2c20-20,52.4-20,72.4,0c20,20,20,52.4,0,72.4l-80,80l-0.7,0.8
      l-28,27.8c-20,20-52.4,20-72.4,0c-13.5-12.7-34.5-12.7-48,0c-5.8,5.8-9.3,13.6-9.9,21.8c-0.6,9.8,3,19.3,9.9,26.3
      c9.9,9.9,21.4,18,34.1,23.9c1.8,0.9,3.6,1.5,5.4,2.3c1.8,0.8,3.7,1.4,5.5,2c1.8,0.7,3.7,1.3,5.5,1.8l5,1.4
      c3.4,0.9,6.8,1.5,10.3,2.1c4.2,0.6,8.5,1,12.7,1.2h6h0.5l5.1-0.6c1.9-0.1,3.8-0.5,6.1-0.5h2.9l5.9-0.9l2.7-0.5l4.9-1h0.9
      c21-5.3,40.1-16.1,55.4-31.4L477.1,204C523.7,157.3,523.7,81.7,477.1,35z"
    />
  </g>
</svg>`;

module.exports = {
  developMiddleware: (app) => {
    app.use(
      '/.netlify/functions/',
      createProxyMiddleware({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      }),
    );
  },
  siteMetadata: {
    siteUrl,
    title: config.siteTitle,
    description: config.siteDescription,
    keywords: config.keywords,
    canonicalUrl: siteUrl,
    image: config.siteLogo,
    author: {
      name: config.author,
      summary: config.minibio,
      minibio: config.minibio,
    },
    organization: {
      name: config.organization,
      url: siteUrl,
      logo: config.siteLogo,
    },
    social: {
      twitter: '',
      fbAppID: '',
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-code-titles`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: linkIcon,
              className: `header-link`,
              maintainCase: false,
              removeAccents: true,
              isIconAfterHeader: false,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: config.googleTagManager,
        includeInDevelopment: false,
        defaultDataLayer: {},
      },
    },
    `gatsby-plugin-feed`,
    'gatsby-plugin-catch-links',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: '#096464',
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: `${config.pathPrefix}blog`,
        lang: config.lang,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{userAgent: '*'}],
          },
          'branch-deploy': {
            policy: [{userAgent: '*', disallow: ['/']}],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{userAgent: '*', disallow: ['/']}],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    'gatsby-plugin-sitemap',
    `gatsby-plugin-typescript`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
