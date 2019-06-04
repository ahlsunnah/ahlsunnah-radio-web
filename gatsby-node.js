const fetch = require('node-fetch')
const crypto = require(`crypto`)

// Load ts files in gatsby.node
require('source-map-support').install()
require('ts-node').register()

const API = process.env.GATSBY_API

exports.onCreateWebpackConfig = ({actions, getConfig}) => {
  const config = getConfig()
  // Make 'src' as a root folder for imports
  config.resolve.modules = ['src', 'node_modules']

  actions.replaceWebpackConfig(config)
}

// exports.createPages = require('./src/gatsby/createPages.ts').default

exports.sourceNodes = async ({actions, createNodeId}) => {
  const {createNode} = actions
  const stations = await fetch(`${API}/stations`).then((res) => res.json())

  stations.forEach((station) => {
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(station))
      .digest(`hex`)

    const node = {
      ...station,
      apiId: station.id,
      id: createNodeId(station.id),
      parent: null,
      children: [],
      internal: {
        type: 'Station',
        contentDigest,
      },
    }
    createNode(node)
  })
  return
}
