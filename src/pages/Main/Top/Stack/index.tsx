import React from 'react'
import { Container } from './styles'




function Stack({src, text}: {src: string, text: string}) {
  return (
    <Container>
      <img src={src} alt={`Logo ${text}`} />
      <h4>{text}</h4>
    </Container>
  )
}

export default Stack