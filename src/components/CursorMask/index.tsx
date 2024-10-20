import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import MousePosition from '../../utils/MousePosition'
import "./style.css"
import { MouseContext } from '../../context/MouseContext'
import { theme } from '../../styles/Theme'

function CursorMask() {

  const { click } = useContext(MouseContext)
  const { x, y } = MousePosition()

  const size = click ? 72 : 16

  return (
    <motion.div
      className={click ? "mask-click" : "mask"}
      style={click ? {} : { backgroundColor: `${theme.colors.background1}80`}}
      animate={{
        top: `${y - size/2}px`,
        left: `${x - size/2}px`,
      }}
      transition={{ type: "tween", ease: "backOut"}}
     />
  )
}

export default CursorMask