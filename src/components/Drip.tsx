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
width: 1vh;
height: 1vh;
transform: rotate(-45deg);
border-radius: 50% 50% 50% 70%;
background-color: white;
position: absolute;
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
/*
  0% {top: -20%;}
  20% {top: 0%;}
  80% {top: 85%;}
  100% {top: +100%;}
*/

const Bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
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
