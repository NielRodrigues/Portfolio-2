import React from 'react'
import { Container } from './styles'
import { ReactComponent as BrainIcon } from '../../assets/icons/brain.svg'
import { ReactComponent as MailIcon } from '../../assets/icons/mail.svg'
import LinkMenu from '../LinkMenu'
import Button2 from '../Button2'

function Header() {
  return (
    <Container>
      <div className="logo">
        <BrainIcon />
        <span>Carlos Daniel</span>
      </div>

      <div className="menu">
        <div className="links">
          <LinkMenu text='Sobre' link='#sobre' />
          <LinkMenu text='Projetos' link='#projetos' />
          <LinkMenu text='Tecnologias' link='#tecnologias' />
          <LinkMenu text='Experiências' link='#experiencias' />
          <LinkMenu text='Formações' link='#formacoes' />
        </div>
        <div className="line"></div>

        <Button2 text='Contato' link='#contato' icon={<MailIcon />} />
      </div>
      
    </Container>
  )
}

export default Header