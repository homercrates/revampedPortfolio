import React from 'react'
import styled from '@emotion/styled'

const Body = styled('div')`
  margin: 0;
  width: .5vh;
  height: .1vh;
`

const Container = styled('span')`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`

const Drip = (props) => {
  return (
    <Body>
      <Container>drop</Container>
    </Body>
  )
}
export default Drip;
