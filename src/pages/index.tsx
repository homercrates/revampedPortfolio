import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/Layout'

export const IndexPage = () => (
  <>
    <h2>Developer</h2>
    <p>here is some stuff.</p>
    <p>here is a little more</p>
    <ul><li>here</li><li>some</li><li>stuff</li></ul>

    <p>
      <Link to="/another-page/">Go to another page</Link>
    </p>
    <p>
      <Link to="/all/">See content generated from Markdown files</Link>
    </p>
    <p>
      <Link to="/littleBits/">Little bits of code.</Link>
    </p>
  </>
)

const LayoutIndexPage = () => (
  <Layout>
    <IndexPage />
  </Layout>
)

export default LayoutIndexPage
