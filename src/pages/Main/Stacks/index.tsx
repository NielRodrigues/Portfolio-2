import React, { useState } from 'react'
import { Container } from './styles'
import Title from '../../../components/Title'


function Stacks() {

  const [selected, setSelected] = useState<string>("web")

  const stacks = [
    {
      img: require("../../../assets/images/html-css-js.png"),
      stack: "HTML5 CSS3 JavaScript",
      category: "web",
    },
    {
      img: require("../../../assets/images/typescript.png"),
      stack: "TypeScript",
      category: "web",
    },
    {
      img: require("../../../assets/images/reactjs.png"),
      stack: "ReactJS",
      category: "web",
    },
    {
      img: require("../../../assets/images/nextjs.png"),
      stack: "NextJS",
      category: "web",
    },
    {
      img: require("../../../assets/images/nodejs.png"),
      stack: "NodeJS",
      category: "web",
    },
    {
      img: require("../../../assets/images/nestjs.png"),
      stack: "NestJS",
      category: "web",
    },
    {
      img: require("../../../assets/images/expressjs.png"),
      stack: "ExpressJS",
      category: "web",
    },
    {
      img: require("../../../assets/images/postgresql.png"),
      stack: "PostgreSQL",
      category: "web",
    },

    {
      img: require("../../../assets/images/reactnative.png"),
      stack: "React Native",
      category: "mobile",
    },

    {
      img: require("../../../assets/images/python.png"),
      stack: "Python",
      category: "data-analisys",
    },
    {
      img: require("../../../assets/images/pandas.png"),
      stack: "Pandas",
      category: "data-analisys",
    },
    {
      img: require("../../../assets/images/pysimplegui.png"),
      stack: "PySimpleGUI",
      category: "data-analisys",
    },

    {
      img: require("../../../assets/images/git.png"),
      stack: "Git",
      category: "devops",
    },
    {
      img: require("../../../assets/images/github.png"),
      stack: "GitHub",
      category: "devops",
    },
    {
      img: require("../../../assets/images/aws.png"),
      stack: "AWS",
      category: "devops",
    },
  ]

  return (
    <Container id='tecnologias'>
      <Title text='Tecnologias' />

      <div className="content">
        <aside>
          <h4>Desenvolvedor de software com ampla experiência em desenvolvimento web e mobile, automação de sistemas, análise de dados e DevOps. Atualmente, estudo Machine Learning e IA para integrar soluções inteligentes aos projetos.</h4>

          <div className={selected === 'web' ? "option active" : "option"}
            onClick={() => setSelected("web")}
          >
            <div className="bar"/>
            <span>Desenvolvimento Web</span>
          </div>

          <div className={selected === 'mobile' ? "option active" : "option"}
            onClick={() => setSelected("mobile")}
          >
            <div className="bar"/>
            <span>Desenvolvimento Mobile</span>
          </div>

          <div className={selected === 'data-analisys' ? "option active" : "option"}
            onClick={() => setSelected("data-analisys")}
          >
            <div className="bar"/>
            <span>Análise de Dados & ML</span>
          </div>

          <div className={selected === 'devops' ? "option active" : "option"}
            onClick={() => setSelected("devops")}
          >
            <div className="bar"/>
            <span>DevOps</span>
          </div>
        </aside>

        <div className="stacks">
          {
            stacks.map(item => (
              item.category.toLocaleLowerCase() === selected.toLowerCase() ? (
                <div className="stack" key={item.stack} title={item.stack}>
                  <img src={item.img} alt={item.stack} />
                </div>
              ) : null
            ))
          }
        </div>
      </div>
    </Container>
  )
}

export default Stacks