import React, { ReactNode } from 'react'
import { Container } from './styles'


interface Button1Props {
  text: string;
  link: string;
  target?: '_blank' | '_self'; // Define os tipos apropriados para o target
  icon?: ReactNode; // ReactNode permite JSX ou outros tipos renderizáveis
}


function Button1({ text, link, target, icon }: Button1Props) {
  return (
    <Container href={link} target={target}>
      <span>{text}</span>
      {icon || null}
    </Container>
  )
}

export default Button1