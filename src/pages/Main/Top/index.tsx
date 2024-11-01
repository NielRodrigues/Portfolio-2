import React from 'react'
import { Container } from './styles'

import typescriptLogo from "../../../assets/images/typescript.png"
import reactjs from "../../../assets/images/reactjs.png"
import reactnative from "../../../assets/images/reactnative.png"
import nodejs from "../../../assets/images/nodejs.png"
import nestjs from "../../../assets/images/nestjs.png"
import nextjs from "../../../assets/images/nextjs.png"
import python from "../../../assets/images/python.png"
import Stack from './Stack'
import Button1 from '../../../components/Button1'

import { ReactComponent as ArrowDownIcon } from '../../../assets/icons/arrow-down.svg'
import ParticlesBackground from '../../../components/Particle'
import Floating from '../../../components/Floating'

function Top() {
  return (
    <Container>
      
      <ParticlesBackground />
      <Floating />
      
      <h4>print(“Hello World”)</h4>
      <h1>Transformando ideias em <span>soluções digitais</span></h1>
      <h3>Me chamo Carlos Daniel, sou um desenvolvedor de software especializado em criar soluções personalizadas para negócios e projetos. Com uma paixão por tecnologia e inovação, estou sempre buscando formas de tornar o mundo digital mais eficiente e acessível.</h3>

      <div className="line" style={{ marginBottom: '12px'}}>
        <Stack src={typescriptLogo} text='TypeScript' />
        <Stack src={reactjs} text='ReactJS' />
        <Stack src={reactnative} text='React Native' />
        <Stack src={nodejs} text='NodeJS' />
        <Stack src={nestjs} text='NestJS' />
        <Stack src={nextjs} text='NextJS' />
        <Stack src={python} text='Python' />
      </div>

      <Button1 link='#projetos' text='Confira meu portfólio' icon={<ArrowDownIcon />} />
    </Container>
  )
}

export default Top