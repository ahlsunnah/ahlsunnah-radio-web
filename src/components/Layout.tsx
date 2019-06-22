import 'normalize.css'
import 'styles/global.scss'
import React from 'react'
// import {graphql, useStaticQuery} from 'gatsby'
import theme from 'styles/theme'
import {css} from '@emotion/core'
import {Flex} from '@rebass/emotion'
import {ThemeProvider} from 'emotion-theming'
// import Header from './header'
import backgroundImage from 'images/background.jpg'

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
        <Flex
          as="main"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          py="1rem"
          css={css`
            min-height: 100vh;
            @media only screen and (min-width: 768px) {
              background-image: url("${backgroundImage}");
              background-size: cover;
              background-position: center;
            }

          `}
        >
          {children}
        </Flex>
        {/* <footer>
          © {new Date().getFullYear()} Copyright{' '}
          <a href={canonicalUrl}>{companyName}</a> - All rights reserved
        </footer> */}
      </>
    </ThemeProvider>
  )
}

export default Layout
