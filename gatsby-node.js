// https://www.gatsbyjs.org/docs/node-apis/

// Load ts files in gatsby.node
require('source-map-support').install()
require('ts-node').register()

exports.onCreateWebpackConfig = ({actions, getConfig}) => {
  const config = getConfig()
  // Make 'src' as a root folder for imports
  config.resolve.modules = ['src', 'node_modules']

  actions.replaceWebpackConfig(config)
}

exports.createPages = require('./src/gatsby/createPages.ts').default
