import 'normalize.css'
import 'styles/global.scss'
import React from 'react'
// import {graphql, useStaticQuery} from 'gatsby'
import theme from 'styles/theme'
import {ThemeProvider} from 'emotion-theming'
// import Header from './header'

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
  // const {site}: ILayoutQuery = useStaticQuery(graphql`
  //   query LayoutQuery {
  //     site {
  //       siteMetadata {
  //         canonicalUrl
  //         companyName
  //         siteTitle
  //       }
  //     }
  //   }
  // `)
  // const {canonicalUrl, companyName, siteTitle} = site.siteMetadata
  return (
    <ThemeProvider theme={theme}>
      <>
        {/* <Header siteTitle={siteTitle} /> */}
        <main>{children}</main>
        {/* <footer>
          © {new Date().getFullYear()} Copyright{' '}
          <a href={canonicalUrl}>{companyName}</a> - All rights reserved
        </footer> */}
      </>
    </ThemeProvider>
  )
}

export default Layout
