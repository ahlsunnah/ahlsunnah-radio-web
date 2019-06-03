import React from 'react'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import {Link} from 'gatsby'

const NotFoundPage = (): JSX.Element => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>This page doesn&#39;t exist.</p>
    <p>
      You should go back to the <Link to="/">homepage</Link>
    </p>
  </Layout>
)

export default NotFoundPage
