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

export const Contact = () => (
    <div>
      <h1 css={style.boldLook}>Con<span css={style.accentColor}>t</span>ac<span css={style.accentColor}>t</span></h1>
      <p>Contact me here.</p>    
    </div>
)

const LayoutContact = () => (
    <Layout>
      <Contact />
    </Layout>
)
export default LayoutContact;