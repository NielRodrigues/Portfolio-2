import CursorMask from '../../components/CursorMask'
import Header from '../../components/Header'
import { Container, WhatsAppButton } from './styles'
import Top from './Top'
import { ReactComponent as WppIcon } from '../../assets/icons/whatsapp.svg'
import About from './About'

export default function Main() {

  return (
    <Container>
      <CursorMask />
      <Header />
      <Top />
      <About />

      <WhatsAppButton href='https://wa.me/5538999603639' target='_blank'>
        <WppIcon />
      </WhatsAppButton>      
    </Container>
  )
}