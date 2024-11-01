import CursorMask from '../../components/CursorMask'
import Header from '../../components/Header'
import { Container, WhatsAppButton } from './styles'
import Top from './Top'
import { ReactComponent as WppIcon } from '../../assets/icons/whatsapp.svg'
import About from './About'
import Works from './Works'
import Stacks from './Stacks'
import Experiences from './Experiences'
import Training from './Training'
import Contact from './Contact'
import Footer from './Footer'

export default function Main() {

  return (
    <Container>
      <CursorMask />
      <Header />
      <Top />
      <About />
      <Works />
      <Stacks />
      <Experiences />
      <Training />
      <Contact />
      <Footer/>

      <WhatsAppButton href='https://wa.me/5538999603639' target='_blank'>
        <WppIcon />
      </WhatsAppButton>      
    </Container>
  )
}
