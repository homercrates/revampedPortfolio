import React, { useState } from 'react'
import styled from '@emotion/styled'

const Wrapper = styled('div')`
  margin: 1rem 0;
  text-align: center;
`

const Button = styled('button')`
  padding: 1rem 2rem;
`

const Count = styled('span')`
  padding: 1rem 2rem;
`

export const Dice = () => {
  const [dice, setDice] = useState(0)
  return (
    <Wrapper>
      <Button onClick={() => setDice(Math.floor(Math.random() * 6) + 1)}>Roll</Button>
      <Count>{dice}</Count>
    </Wrapper>
  )
}
