import 'normalize.css'
import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Header from './header'

interface IProps {
  children: React.ReactNode
}

interface ILayoutQuery {
  site: {
    siteMetadata: {
      companyName: string
      canonicalUrl: string
      siteTitle: string
    }
  }
}

const Layout = ({children}: IProps): JSX.Element => {
  const {site}: ILayoutQuery = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          canonicalUrl
          companyName
          siteTitle
        }
      }
    }
  `)
  const {canonicalUrl, companyName, siteTitle} = site.siteMetadata
  return (
    <>
      <Header siteTitle={siteTitle} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} Copyright{' '}
        <a href={canonicalUrl}>{companyName}</a> - All rights reserved
      </footer>
    </>
  )
}

export default Layout
