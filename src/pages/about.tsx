import React from 'react'
import { Layout } from '../components/Layout'


export const About = () => (
    <div>
      <h2>About</h2>
      <p>This is about.</p>
    </div>
)

const LayoutAbout = () => (
    <Layout>
      <About />
    </Layout>
)
export default LayoutAbout;