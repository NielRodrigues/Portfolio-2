import React from 'react'
import { Button, Col, Container, Line } from './styles'
import { ReactComponent as BrainIcon } from '../../../assets/icons/brain.svg'
import { ReactComponent as InstagramIcon } from '../../../assets/icons/instagram.svg'
import { ReactComponent as LinkedinIcon } from '../../../assets/icons/linkedin.svg'
import { ReactComponent as GithubIcon } from '../../../assets/icons/github.svg'
import { ReactComponent as YoutubeIcon } from '../../../assets/icons/youtube.svg'
import { ReactComponent as WppIcon } from '../../../assets/icons/whatsapp.svg'


function Footer() {
  return (
    <Container id='sobre'>
      <Line>
        <Col>
          <h3>Entre em contato</h3>
          <Button href='#contato'>
            <span>Enviar e-mail</span>
          </Button>

          <Button className='wpp'>
            <WppIcon />
            <span>WhatsApp</span>
          </Button>
        </Col>
      </Line>

      <Line>
        <div className="logo">
          <BrainIcon />
          <span>Carlos Daniel</span>
        </div>

        <div className="social-media">
          <a href="" target='_blank' className="media">
            <GithubIcon />
          </a>

          <a href="" target='_blank' className="media">
            <LinkedinIcon />
          </a>

          <a href="" target='_blank' className="media">
            <InstagramIcon />
          </a>

          <a href="" target='_blank' className="media">
            <YoutubeIcon />
          </a>
        </div>
      </Line>
    </Container>
  )
}

export default Footer