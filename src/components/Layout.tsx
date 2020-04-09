import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { SiteMetadataQuery } from 'generated/types/gatsby'
import { css } from '@emotion/core'
import { Header } from './Header'

import Drip from '../components/Drip';

const wrapper = css`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
  z-index: -1;
`
const drop = css`
  z-index: 0;
`
const onTop = css`
  z-index: 1;
`

interface LayoutProps {
  readonly children?: React.ReactNode | readonly React.ReactNode[]
}

export const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery<SiteMetadataQuery>(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <main>
      <Helmet
        titleTemplate={`%s - ${data.site.siteMetadata.title}`}
        defaultTitle={data.site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content: data.site.siteMetadata.description,
          },
          {
            name: 'keywords',
            content: 'gatsby, gatsbyjs, sample, demo, typescript',
          },
        ]}
      />
      <Header title={data.site.siteMetadata.title} />
      <Drip />
      <div css={wrapper}>{children}</div>
    </main>
  )
}
