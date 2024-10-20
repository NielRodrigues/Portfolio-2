import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'

import { Theme } from './styles/Theme'
import { Normalize } from 'styled-normalize'
import MouseProvider from './context/MouseContext'

export default function App() {
  return (
    <BrowserRouter>
      <MouseProvider>
        <Theme>
          <AppRoutes />
          <Normalize />
        </Theme>
      </MouseProvider>
    </BrowserRouter>
  )
}
