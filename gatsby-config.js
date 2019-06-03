module.exports = {
  siteMetadata: {
    author: '@abumalick',
    canonicalUrl: 'https://www.production.url',
    companyName: 'My company name',
    siteTitle: 'Gatsby Typescript Material Rebass Starter',
    siteDescription:
      'Kick off your next project with this starter that help you get started with some of the best tools used in frontend development',
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
        name: 'Gatsby typescript starter',
        short_name: 'Gatsby typescript starter',
        start_url: '/',
        background_color: '#6200ee',
        theme_color: '#6200ee',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
