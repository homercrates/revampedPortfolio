import React from 'react'
import { Layout } from '../components/Layout'


export const Contact = () => (
    <div>
      <h2>Contact</h2>
      <p>Contact me here.</p>    
    </div>
)

const LayoutContact = () => (
    <Layout>
      <Contact />
    </Layout>
)
export default LayoutContact;