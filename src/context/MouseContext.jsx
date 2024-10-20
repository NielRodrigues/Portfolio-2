import React, { createContext, useState } from 'react'
import PropTypes from "prop-types"

export const MouseContext = createContext()

function MouseProvider({ children }) {

  const [click, setClick] = useState(false)

  return (
    <MouseContext.Provider
        value={{
            click, setClick
        }}
    >
        {children}
    </MouseContext.Provider>
  )
}

MouseProvider.propTypes = {
    children: PropTypes.element.isRequired,
}

export default MouseProvider