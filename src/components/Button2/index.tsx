import React, { ReactNode } from 'react'
import { Container } from './styles'


interface Button2Props {
  text: string;
  link: string;
  target?: '_blank' | '_self'; // Define os tipos apropriados para o target
  icon?: ReactNode; // ReactNode permite JSX ou outros tipos renderizáveis
}


function Button2({ text, link, target, icon }: Button2Props) {
  return (
    <Container href={link} target={target}>
      <div className="bg">
        {icon || null}
        <span>{text}</span>
      </div>
    </Container>
  )
}

export default Button2