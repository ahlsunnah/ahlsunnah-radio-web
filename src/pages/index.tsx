import React from 'react'
import Layout from 'components/Layout'
import SEO from 'components/SEO'

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `typescript`, `react`]} />
    <h1>Welcome in the homepage</h1>
  </Layout>
)

export default IndexPage
