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
  border: black;
  background-color: red;
  position: absolute;
`

const DropReflection = styled('div')`
  width: .7vh;
  height: .4vh;
  border-radius: 30% 50% 50% 30%;
  background-color: white;
  opacity: .6;
  position: absolute;
  top: .60vh;
  left: .80vh;
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
