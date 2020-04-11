import React from 'react'
import styled from '@emotion/styled'
import { css, jsx, keyframes } from '@emotion/core'

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
const Drop = styled('div')`
  width: 1.5vh;
  height: 1.5vh;
  transform: rotate(-45deg);
  border-radius: 50% 0 50% 70%;
  background-color: red;
  position: absolute;
`

const DropReflection = styled('div')`
  width: .3vh;
  height: .5vh;
  border-radius: 50 30% 30% 50%%;
  background-color: white;
  position: absolute;
  top: .55vh;
  left: .95vh;
`

const AnimDrip = keyframes`
  from, 20%, to {
    transform: translate3d(-.9vh,-5vh,0);
  }

  40% {
    transform: translate3d(-.7vh, 0, 0);
  }

  60% {
    transform: translate3d(-.6vh, 35vh, 0);
  }

  80% {
    transform: translate3d(-.5vh, 70vh, 0);
  } 

  93% {
    transform: translate3d(-.6vh, 80vh, 0); 
  }
 
  100% {
    transform: translate3d(0, 100vh, 0)
  }

`

const Drip = (props) => {
  return (
    <Body>
      <Container>
        <div
            css={css`animation: ${AnimDrip} 60s ease infinite;`}
        >
          <Drop />
          <DropReflection />
        </div>
      </Container>
    </Body>
  )
}
export default Drip;
