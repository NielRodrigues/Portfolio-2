import React from 'react'
import { Container } from './styles'
import logoAL from "../../../assets/images/AL.svg"
import Title from '../../../components/Title'


function Experiences() {

  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

 
  const experiencies = [
    {
      position: "Web Design Júnior",
      company: "Academia Lendár[IA]",
      img: logoAL,
      start: new Date("10/08/2024"), // MM/DD/AAAA - Mês / Dia / Ano
      end: "", // MM/DD/AAAA
      model: "Remoto",
      location: "Florianópolis, Santa Catarina",
      description: "Na Academia Lendári[IA], sou responsável pela criação de designs para a web usando ferramentas como Figma e Canva. Também desenvolvo designs para posts no Instagram e páginas web, utilizando WordPress e Elementor.",
    },
    {
      position: "Desenvolvedor Frontend Júnior",
      company: "Visi'Or",
      img: require("../../../assets/images/visior.png"),
      start: new Date("06/02/2024"), // MM/DD/AAAA - Mês / Dia / Ano
      end: new Date("10/01/2024"), // MM/DD/AAAA
      model: "Remoto",
      location: "Florianópolis, Santa Catarina",
      description: "Na Visi'Or, fui responsável pelo desenvolvimento de páginas web com Elementor, integrando animações para aprimorar a experiência do usuário por meio de GSAP e Framer Motion com JavaScript.",
    }
  ]

  const diffInMonths = (start, end) => {
    const startDate = start;
    const endDate = end;
  
    const yearsDiff = endDate.getFullYear() - startDate.getFullYear();
    const monthsDiff = endDate.getMonth() + 1  - startDate.getMonth();

    let calc = yearsDiff * 12 + monthsDiff

    if (calc >= 12) {
      const years = Math.floor(calc / 12);
      const months = calc % 12;
      return `${years} ${years > 1 ? 'anos' : 'ano'}${months > 0 ? ` e ${months} ${months > 1 ? 'meses' : 'mês'}` : ''}`
    }
  
    return `${calc} ${calc > 1 ? 'meses' : 'mês'}`;
  };

  return (
    <Container id='experiencias'>
      <Title text='Experiências' />

      <div className="content">
        {
          experiencies.map(item => (
            <div className="experience" key={`${item.company}-${item.position}`}>
              <img src={item.img} alt={item.company} />
              <div className="text">
                <h1>{item.position}</h1>
                <h4>{item.company}</h4>
                <h4>{months[item.start.getMonth()]} de {item.start.getFullYear()} - {item.end ? `${months[item.end.getMonth()]} de ${item.end.getFullYear()}` : 'o momento'} · ({item.end ? `${diffInMonths(item.start, item.end)}` : `${diffInMonths(item.start, new Date())}`})</h4>
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