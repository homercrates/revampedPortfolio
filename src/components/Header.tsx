import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

const style = {
  container: css`
    background: #3e3e3e;
    margin-bottom: 1.45rem;
  `,
  wrapper: css`
    display: grid;
    grid-template-columns: auto 10rem;
    grid-template-rows: auto;
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
  `,
  title: css`
    margin: 0;
    /*display: inline-block;*/
  `,
  ul: css`
    list-style-type: none;
  `,
}

const TitleLink = styled(Link)`
  color: #fff;

  &:active,
  &:hover {
    color: #e2e2e2;
  }
`

interface HeaderProps {
  readonly title: string
}

export const Header = ({ title }: HeaderProps) => (
  <div css={style.container}>
    <div css={style.wrapper}>
      <ul css={style.ul}>
        <li>
          <h1 css={style.title}>
            <TitleLink to="/">{title}</TitleLink>
          </h1>
        </li>
        <li><TitleLink to="/about">About</TitleLink></li>
        <li><TitleLink to="/littleBits">Little bits</TitleLink></li>
        <li><TitleLink to="/contact">Contact</TitleLink></li>
      </ul>
    </div>
  </div>
)
