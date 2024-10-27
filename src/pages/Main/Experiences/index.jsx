import React from 'react'
import { Container } from './styles'
import logoAL from "../../../assets/images/AL.svg"


function Experiences() {

  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

 
  const experiencies = [
    {
      position: "Web Design Júnior",
      company: "Academia Lendár[IA]",
      img: logoAL,
      start: new Date("10/08/2024"), // MM/DD/AAAA - Mês / Dia / Ano
      end: "", // MM/DD/AAAA
      model: "Remota",
      location: "Florianópolis, Santa Catarina",
      description: "Na Academia Lendári[IA] eu sou resonsável por criar Designs para web utilizando ferramentas como Figma e Canvas. Criação de Designs para posts no Instagram, páginas webs utilizando WordPress e Elementor.",
    },
    {
      position: "Desenvolvedor Frontend Júnior",
      company: "Visi'Or",
      img: require("../../../assets/images/visior.png"),
      start: new Date("06/02/2024"), // MM/DD/AAAA - Mês / Dia / Ano
      end: new Date("10/01/2024"), // MM/DD/AAAA
      model: "Remota",
      location: "Florianópolis, Santa Catarina",
      description: "Na Visi'Or, sou responsável pelo desenvolvimento de páginas web utilizando Elementor, integrando animações para aprimorar a experiência do usuário por meio de GSAP e framer-motion com JavaScript.",
    }
  ]

  const diffInMonths = (start, end) => {
    const startDate = start;
    const endDate = end;
  
    const yearsDiff = endDate.getFullYear() - startDate.getFullYear();
    const monthsDiff = endDate.getMonth() - startDate.getMonth();
  
    return yearsDiff * 12 + monthsDiff;
  };

  return (
    <Container id='experiencias'>
      <h1>Experiências<span>...</span></h1>

      <div className="content">
        {
          experiencies.map(item => (
            <div className="experience" key={`${item.company}-${item.position}`}>
              <img src={item.img} alt={item.company} />
              <div className="text">
                <h1>{item.position}</h1>
                <h4>{item.company}</h4>
                <h4>{months[item.start.getMonth()]} de {item.start.getFullYear()} - {item.end ? `${months[item.end.getMonth()]} de ${item.end.getFullYear()}` : 'o momento'} · ({item.end ? `${diffInMonths(item.start, item.end)} meses` : `${diffInMonths(item.start, new Date())} meses`})</h4>
                <h4>{item.location} · {item.model}</h4>
                <h3>{item.description}</h3>  
              </div>
            </div>
          ))
        }
      </div>
    </Container>
  )
}

export default Experiences