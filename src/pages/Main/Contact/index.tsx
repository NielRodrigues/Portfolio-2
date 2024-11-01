import React from 'react'
import { Button, Card, Container, Content, InputField } from './styles'
import picture from "../../../assets/images/picture.jpg"
import Button1 from '../../../components/Button1'
import { ReactComponent as MailIcon } from '../../../assets/icons/mail.svg'
import { ReactComponent as TelIcon } from '../../../assets/icons/call.svg'
import { ReactComponent as UserIcon } from '../../../assets/icons/user.svg'
import { ReactComponent as MessageIcon } from '../../../assets/icons/message.svg'
import Title from '../../../components/Title'
import InputMask from 'react-input-mask';

function Contact() {
  return (
    <Container id='contato'>
      <Card>
        <div className="content">
          <Title text='Entrar em contato' />

          <Content>
            <div className="infos">
              A
            </div>
            <form action="">
              <InputField>
                <label htmlFor="name">Nome</label>
                <div className="field">
                  <UserIcon />
                  <input type="text" id='name' name='name' placeholder='Nome'/>
                </div>
              </InputField>

              <InputField>
                <label htmlFor="email">E-mail</label>
                <div className="field">
                  <MailIcon />
                  <input type="email" id='email' name='email' placeholder='E-mail'/>
                </div>
              </InputField>

              <InputField>
                <label htmlFor="tel">Telefone (WhatsApp)</label>
                <div className="field">
                  <TelIcon />
                  <InputMask mask="(99) 9 9999-9999" type="text" id='tel' name='tel' placeholder='(00) 0 0000-0000'/>
                </div>
              </InputField>

              <InputField>
                <label htmlFor="message">Mensagem</label>
                <div className="textarea">
                  <MessageIcon />
                  <textarea placeholder='Mensagem' name='message' id='message' />
                </div>
              </InputField>
              
              <Button>
                <span>Enviar</span>
              </Button>
            </form>
          </Content>
        </div>
      </Card>
    </Container>
  )
}

export default Contact