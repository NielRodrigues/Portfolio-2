import React from 'react'
import { Container } from './styles'
import logoIF from "../../../assets/images/if.png"
import logoDevSamurai from "../../../assets/images/devsamurai.png"
import Title from '../../../components/Title'


function Training() {

  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

 
  const trainings = [
    {
      position: "Curso Front End Master",
      school: "Dev Samurai",
      img: logoDevSamurai,
      start: new Date("02/12/2023"), // MM/DD/AAAA - Mês / Dia / Ano
      end: new Date("07/16/2023"), // MM/DD/AAAA
      model: "",
      location: "Curso Online · 60h",
      description: "Nesse curso da Dev Samurai pude ampliar os meu conhecimentos no Desenvolvimento Web. Desenvolvendo aplicações de ponta a ponta, desde o website (frontend) integrandos com Banco de Dados via API no server (backend). Nesse curso pude aprender ainda mais sobre HTML5, CSS3, JavaScript, TypeScript, ReactJS, NodeJS e PotgreSQL.",
    },
    {
      position: "Instituto Federal do Triângulo Mineiro",
      school: "Curso Técnico de Informática integrado ao Ensino Médio",
      img: logoIF,
      start: new Date("01/01/2018"), // MM/DD/AAAA - Mês / Dia / Ano
      end: new Date("12/31/2020"), // MM/DD/AAAA
      model: "",
      location: "Paracatu, Minas Gerais",
      description: "Nessa escola federal, além de estudar por todo o meu ensino médio, foi lá que tive meu primeiro contato com o mundo da programação. Lá, aprendi toda a lógica por trás da programação e também conheci minha primeira linguagem de programação, o C++.",
    },
  ]

  const diffInMonths = (start, end) => {
    const startDate = start;
    const endDate = end;
  
    const year = endDate.getFullYear() - startDate.getFullYear();
    const month = endDate.getMonth() + 1 - startDate.getMonth();

    let calc = year * 12 + month

    if (calc >= 12) {
      const years = Math.floor(calc / 12);
      const months = calc % 12;
      return `${years} ${years > 1 ? 'anos' : 'ano'}${months > 0 ? ` e ${months} ${months > 1 ? 'meses' : 'mês'}` : ''}`
    }
  
    return `${calc} ${calc > 1 ? 'meses' : 'mês'}`;
  };

  return (
    <Container id='formacoes'>
      <Title text='Formações' />

      <div className="content">
        {
          trainings.map(item => (
            <div className="experience" key={`${item.school}-${item.position}`}>
              <img src={item.img} alt={item.school} />
              <div className="text">
                <h1>{item.position}</h1>
                <h4>{item.school}</h4>
                <h4>{months[item.start.getMonth()]} de {item.start.getFullYear()} - {item.end ? `${months[item.end.getMonth()]} de ${item.end.getFullYear()}` : 'o momento'} · ({item.end ? `${diffInMonths(item.start, item.end)}` : `${diffInMonths(item.start, new Date())}`})</h4>
                <h4>{item.location}</h4>
                <h3>{item.description}</h3>  
              </div>
            </div>
          ))
        }
      </div>
    </Container>
  )
}

export default Training