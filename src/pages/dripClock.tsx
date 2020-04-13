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
    <p>more things</p>
    {console.log('loadede drip clock')}
    {alert('jry')}
  </div>
)

const LayoutDripClock = () => (
    <Layout>
        <DripClock />
        {console.log('loaded drip clock')}
    </Layout>
)
export default LayoutDripClock;