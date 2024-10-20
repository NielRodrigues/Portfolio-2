import React, { ReactNode } from 'react'
import { Container } from './styles'


interface Button1Props {
  text: string;
  link: string;
  target?: '_blank' | '_self'; // Define os tipos apropriados para o target
}


function LinkMenu({ text, link, target }: Button1Props) {
  return (
    <Container href={link} target={target}>
      <span>{text}</span>
    </Container>
  )
}

export default LinkMenu