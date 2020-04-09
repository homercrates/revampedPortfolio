import React from 'react'
import {Link } from 'gatsby'
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

export const ProjectLink = (props) => {
  return (
  <div>
    
    <h2>{props.title}</h2>
    <p>{props.info}</p>
    
  </div>
  )
}

export const LittleBits = () => (
    <div>
      <h1 css={style.boldLook}>Little Bits of <span css={style.accentColor}>Code</span></h1>
      <Link to="/tags/code-snippet"><span css={style.accentColor}>List</span> of all the code snippets</Link>
    </div>
)

const LayoutLittleBits = () => (
    <Layout>
      <LittleBits />
      <ProjectLink title='tootle' info='info stuff paragraph' />
      <ProjectLink title='tattle' />
      <Dice text="Roll the dice. Get result."/>
    </Layout>
)
export default LayoutLittleBits;
