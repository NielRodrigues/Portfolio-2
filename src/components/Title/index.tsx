import React from 'react'
import { Container } from './style'

function Title({ text }: { text:string }) {
  return (
    <Container>
      <h1>{text}</h1>
      <div className="line" />
    </Container>
  )
}

export default Title