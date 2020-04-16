import React from 'react'
import { Layout } from '../components/Layout'

import { css } from '@emotion/core'

const some = css`
  color: purple;
  background-color: black;
`

export const DripClock = () => (
  <div>
    <p css={some}>Drip Clock</p>
    <p>heu</p>
  </div>
)

const LayoutDripClock = () => (
    <Layout>
        <DripClock />
    </Layout>
)
export default LayoutDripClock;