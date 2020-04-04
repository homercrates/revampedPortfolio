import React from 'react'
import { Layout } from '../components/Layout'
import { css } from '@emotion/core'

import { Dice } from '../components/Dice';

const style = {
  accentColor: css`
    color: #6f42c1;
  `,
  boldLook: css`
    font-weight: 800;
  `,
}

export const LittleBits = () => (
    <div>
      <h1 css={style.boldLook}>Little Bits of <span css={style.accentColor}>Code</span></h1>
      <p>little code snippets</p>
      <ul><li>a</li><li>b</li><li>c</li><li>d</li></ul>
    </div>
)

const LayoutLittleBits = () => (
    <Layout>
      <LittleBits />
      <Dice />
    </Layout>
)
export default LayoutLittleBits;