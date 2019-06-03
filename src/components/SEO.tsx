import React from 'react'
import Helmet from 'react-helmet'
import {useStaticQuery, graphql} from 'gatsby'

interface IProps {
  description?: string
  keywords?: string[]
  lang?: string
  meta?: Array<
    | {
        property: string
        content: string
      }
    | {
        name: string
        content: string
      }
  >
  title?: string
}

interface ISEOQuery {
  site: {
    siteMetadata: {
      siteTitle: string
      siteDescription: string
      author: string
    }
  }
}

const SEO = ({
  description,
  keywords = [],
  lang = 'en',
  meta = [],
  title,
}: IProps): JSX.Element => {
  const {site}: ISEOQuery = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitle
            siteDescription
            author
          }
        }
      }
    `,
  )
  const {author, siteDescription, siteTitle} = site.siteMetadata
  const metaDescription = description || siteDescription
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title ? `${title} | ${siteTitle}` : siteTitle}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: 'keywords',
                content: keywords.join(', '),
              }
            : [],
        )
        .concat(meta)}
    />
  )
}

export default SEO
