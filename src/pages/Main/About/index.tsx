import React from 'react'
import { Button, Card, Container } from './styles'
import picture from "../../../assets/images/picture.jpg"
import Button1 from '../../../components/Button1'
import { ReactComponent as CurriculumIcon } from '../../../assets/icons/curriculum.svg'

function About() {
  return (
    <Container id='sobre'>
      <Card>
        <div className="content">
          <h1>Um pouco sobre mim<span>...</span></h1>
          <div className="line-card">
            <img src={picture} alt="" />
            <div className="text">
              <h3>
                Meu nome é Carlos Daniel, sou um jovem estudante de programação, apaixonado por desenvolvimento de software e pela resolução de problemas. Meu primeiro contato com a programação foi no ensino médio, no IFTM, onde aprendi Algoritmos e a linguagem C++. Atualmente, meu foco de estudo está no Desenvolvimento de Aplicações Web e Mobile, além de áreas como análise de dados, automação web, <i>machine learning</i> e Inteligência Artificial.
                E prentendo começar a cursar a faculdade de Análise e Desenvolvimento de Sistemas (ADS).
                <br/><br/>
                Como hobby, gosto de criar conteúdo para a internet, trabalhar com web design e estudar inglês, no qual possuo nível intermediário.
                <br/><br/>
                Sou um profissional proativo, sempre buscando me capacitar em diversas áreas, adquirindo novas habilidades e conhecimentos para aprimorar a qualidade dos meus serviços. Se tiver interesse em colaborar comigo, entre em contato! Abaixo, você pode baixar meu currículo, ver alguns dos meus projetos e conferir as tecnologias que domino ou estou aprendendo.
              </h3>

              <Button>
                <CurriculumIcon />
                <span>Baixar Currículo</span>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </Container>
  )
}

export default About