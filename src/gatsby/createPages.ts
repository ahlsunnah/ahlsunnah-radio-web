import {GatsbyCreatePages} from '../types/gatsby-node'

const createDawaPages: GatsbyCreatePages = async ({
  graphql,
  actions: {createPage, createRedirect},
}): Promise<void> => {
  // create your pages here
}

export default createDawaPages
