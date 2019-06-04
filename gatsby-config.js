require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    author: '@abumalick',
    canonicalUrl: 'https://radio.ahlsunnah.com',
    companyName: 'Ahlsunnah',
    siteTitle: 'Ahlsunnah Radio',
    siteDescription:
      'Ahlsunnah Radio is an app for listening to islamic stations. It contains a few stations in Arabic, English, French and Turkish languages.',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['node_modules'],
      },
    },
    'gatsby-transformer-yaml',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ahlsunnah Radio',
        short_name: 'Ahlsunnah Radio',
        start_url: '/',
        background_color: '#6200ee',
        theme_color: '#6200ee',
        display: 'minimal-ui',
        icon: 'src/images/ahlsunnah-radio.png',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}
