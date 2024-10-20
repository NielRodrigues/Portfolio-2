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
          <LinkMenu text='Trabalhos' link='#trabalhos' />
          <LinkMenu text='Tecnologia' link='#' />
          <LinkMenu text='Experiências' link='#' />
          <LinkMenu text='Formações' link='#' />
        </div>
        <div className="line"></div>

        <Button2 text='Contato' link='#' icon={<MailIcon />} />
      </div>
      
    </Container>
  )
}

export default Header