import React, { useRef } from 'react'
import { Container } from './styles'
import img1 from "../../assets/images/notebook.png"
import img2 from "../../assets/images/ai.png"
import img3 from "../../assets/images/code.png"
import img4 from "../../assets/images/eletronico.png"
import img5 from "../../assets/images/stacks.png"
import img6 from "../../assets/images/coffee.png"
import img7 from "../../assets/images/computacao-em-nuvem.png"
import img8 from "../../assets/images/base-de-dados.png"
import img9 from "../../assets/images/http.png"

import gsap from 'gsap'

function Floating() {

  const plane1 = useRef(null)
  const plane2 = useRef(null)
  const plane3 = useRef(null)

  const speed = 0.05  
  let xForce = 0
  let yForce = 0
  let requestAnimationFrameId = null
  const easing = 0.08

  const manageMouseMovement = (e) => {
    const { movementX, movementY } = e
    xForce = movementX * speed
    yForce = movementY *  speed

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = requestAnimationFrame(animate)
    }
  } 

  const lerp = (start, end, amount) => start * (1 - amount) + end * amount

  const animate = () => {
    xForce =lerp(xForce, 0, easing)
    yForce =lerp(yForce, 0, easing)
    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}`})
    gsap.set(plane2.current, { x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}`})
    gsap.set(plane3.current, { x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}`})

    if (Math.abs(xForce) < 0.01) xForce = 0
    if (Math.abs(yForce) < 0.01) yForce = 0

    if (xForce > 0 || yForce >  0) {
      requestAnimationFrame(animate)
    } else {
      cancelAnimationFrame(requestAnimationFrameId)
      requestAnimationFrameId = null
    }

    
  }

  return (
    <Container onMouseMove={(e) => manageMouseMovement(e)}>
      <div ref={plane1} className="plane1">      
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
      </div>

      <div ref={plane2} className="plane2">
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
      </div>

      <div ref={plane3} className="plane3">
          <img src={img7} alt="" />
          <img src={img8} alt="" />
          <img src={img9} alt="" />
      </div>
    </Container>
  )
}

export default Floating