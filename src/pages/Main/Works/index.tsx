import React from 'react'
import { Container, Content } from './styles'
import picture from "../../../assets/images/picture.jpg"
import Button1 from '../../../components/Button1'
import { ReactComponent as ArrowIcon } from '../../../assets/icons/arrow-right-up.svg'
import { ReactComponent as ChartEasy } from '../../../assets/icons/chart-easy.svg'
import { ReactComponent as ChartModerate } from '../../../assets/icons/chart-moderate.svg'
import { ReactComponent as ChartDificult } from '../../../assets/icons/chart-dificult.svg'
import react from '../../../assets/images/reactjs.png'
import node from '../../../assets/images/nodejs.png'
import postgres from '../../../assets/images/postgresql.png'
import python from '../../../assets/images/python.png'
import nextjs from '../../../assets/images/nextjs.png'
import nestjs from '../../../assets/images/nestjs.png'
import Title from '../../../components/Title'

function Works() {
  return (
    <Container id='projetos'>
      <Content href=''>
        <div className="on-going">
          <span>EM ANDAMENTO</span>
        </div>
        <div className="img">
          <img src="https://linda-hoang.com/wp-content/uploads/2014/10/img-placeholder-dark.jpg" alt="" />
        </div>
        <div className="content">
          <ArrowIcon className='arrow' />
          <div className="capacity">
            <ChartEasy />
            <span>Simples</span>
          </div>
          <h3>Tornexus</h3>

          <div className="line">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolor ipsum facilis voluptas sequi sunt quae accusamus. Deleniti tenetur vel quisquam necessitatibus modi ut, veniam consequuntur commodi, aut debitis blanditiis?</p>
            <div className="stacks">
            <div className="stack">
              <img src={python} alt="" />
            </div>
          </div>
          </div>
        </div>
      </Content>

      <Content href=''>
        <div className="img">
          <img src="https://linda-hoang.com/wp-content/uploads/2014/10/img-placeholder-dark.jpg" alt="" />
        </div>
        <div className="content">
          <ArrowIcon className='arrow' />
          <div className="capacity">
            <ChartModerate />
            <span>Moderado</span>
          </div>
          <h3>Tornexus</h3>

          <div className="line">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo consectetur reprehenderit sit tenetur culpa nemo exercitationem officiis provident aspernatur tempora, maiores cum ullam officia beatae sint esse perspiciatis aut consequatur?</p>
            <div className="stacks">
              <div className="stack">
                <img src={react} alt="" />
              </div>
              <div className="stack">
                <img src={node} alt="" />
              </div>
              <div className="stack">
                <img src={postgres} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Content>

      <Content href=''>
        <div className="img">
          <img src="https://linda-hoang.com/wp-content/uploads/2014/10/img-placeholder-dark.jpg" alt="" />
        </div>
        <div className="content">
          <ArrowIcon className='arrow' />
          <div className="capacity">
            <ChartDificult />
            <span>Difícil</span>
          </div>
          <h3>Tornexus</h3>

          <div className="line">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates reiciendis doloribus mollitia odio ducimus aperiam saepe earum sapiente iste aspernatur totam, quisquam et rem molestiae excepturi minima facilis ex!</p>
            <div className="stacks">
              <div className="stack">
                <img src={nextjs} alt="" />
              </div>
              <div className="stack">
                <img src={nestjs} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Content>

      <Content href=''>
        <div className="img">
          <img src="https://linda-hoang.com/wp-content/uploads/2014/10/img-placeholder-dark.jpg" alt="" />
        </div>
        <div className="content">
          <ArrowIcon className='arrow' />
          <div className="capacity">
            <ChartEasy />
            <span>Simples</span>
          </div>
          <h3>Tornexus</h3>

          <div className="line">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error totam doloribus provident magni nam quaerat molestias reprehenderit explicabo magnam asperiores iusto necessitatibus aliquam sapiente distinctio quam, libero nemo, voluptates maiores.</p>
            <div className="stacks">
              <div className="stack">
                <img src={python} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Content>

      <Content href=''>
        <div className="img">
          <img src="https://linda-hoang.com/wp-content/uploads/2014/10/img-placeholder-dark.jpg" alt="" />
        </div>
        <div className="content">
          <ArrowIcon className='arrow' />
          <div className="capacity">
            <ChartModerate />
            <span>Moderado</span>
          </div>
          <h3>Tornexus</h3>

          <div className="line">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quasi deserunt, animi provident commodi repudiandae aspernatur quod, eum eaque quidem odio quae, saepe distinctio optio ratione ipsam ipsa expedita molestias?</p>
            <div className="stacks">
              <div className="stack">
                <img src={react} alt="" />
              </div>
              <div className="stack">
                <img src={node} alt="" />
              </div>
              <div className="stack">
                <img src={postgres} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Content>

      <Content href=''>
        <div className="img">
          <img src="https://linda-hoang.com/wp-content/uploads/2014/10/img-placeholder-dark.jpg" alt="" />
        </div>
        <div className="content">
          <ArrowIcon className='arrow' />
          <div className="capacity">
            <ChartDificult />
            <span>Difícil</span>
          </div>
          <h3>Tornexus</h3>

          <div className="line">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates reiciendis doloribus mollitia odio ducimus aperiam saepe earum sapiente iste aspernatur totam, quisquam et rem molestiae excepturi minima facilis ex!</p>
            <div className="stacks">
              <div className="stack">
                <img src={nextjs} alt="" />
              </div>
              <div className="stack">
                <img src={nestjs} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  )
}

export default Works