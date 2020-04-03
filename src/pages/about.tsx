import React from 'react'
import { Layout } from '../components/Layout'
import { css } from '@emotion/core'


const style = {
  accentColor: css`
    color: #6f42c1;
  `,
  boldLook: css`
    font-weight: 800;
  `,
}

export const About = () => (
    <div>
      <h1 css={style.boldLook}>Stephen <span css={style.accentColor}>Williams</span></h1>
      <p>San Jose, CA</p>
      <br />
      <p>Currently reading: Automate the Boring Stuff with Python <br />
        Currently working in: React JS + Gatsby + TypeScript</p>
      <br />
      <p>I am looking for a place where I can continue to grow my skills. <br />
        My strengths are in creativity, as I attended the Los Angeles County High School for the Arts</p> 
      <p>I am writing in: CSS, GraphQL, HTML, JS, JSX, MD, MDX, MySQL, ReactJS.</p>
    </div>
)

const LayoutAbout = () => (
    <Layout>
      <About />
    </Layout>
)
export default LayoutAbout;