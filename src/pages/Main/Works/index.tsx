import React from 'react'
import { Container, Content } from './styles'
import picture from "../../../assets/images/picture.jpg"
import Button1 from '../../../components/Button1'
import { ReactComponent as ArrowIcon } from '../../../assets/icons/arrow-right-up.svg'
import { ReactComponent as ChartEasy } from '../../../assets/icons/chart-easy.svg'

function Works() {
  return (
    <Container id='trabalhos'>
      <Content href=''>
        <div className="img">
          <img src="https://carlosdanielroiz.vercel.app/static/media/tornexus-2.06a533127a93de16ec1a.png" alt="" />
        </div>
        <div className="content">
          <ArrowIcon className='arrow' />
          <div className="capacity">
            <ChartEasy />
            <span>Simples</span>
          </div>
          <h3>Tornexus</h3>
        </div>
      </Content>

    
    </Container>
  )
}

export default Works