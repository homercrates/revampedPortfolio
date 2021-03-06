import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/Layout'
import { css } from '@emotion/core'
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const style = {
  grey: css`
    color: #3e3e3e;
  `,
  accentColor: css`
    color: #6f42c1;
  `,
  boldLook: css`
    font-weight: 800;
  `,
}

export const IndexPage = () => (
  <>
    <h1 css={style.boldLook}><span css={style.accentColor}>Dev</span>eloper</h1>
    <p>here is some stuff.</p>
    <p>here is a little more</p>
    <ul><li>here</li><li>some</li><li>stuff</li></ul>
    <h1 css={style.boldLook}>
      <Link to="/all/" css={style.grey}><FaGithub /></Link>
      <Link to="/all/" css={style.grey}><FaLinkedin /></Link>
    </h1>
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
