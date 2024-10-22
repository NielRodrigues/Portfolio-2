import React, { ReactNode } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'


export const theme: DefaultTheme = {
  colors: {
    primary: '#FD6649',
    primaryVariant: '#FF9068',

    yellow: '#f6c61b',
    red: '#f6601b',

    text: '#F3F3F3',

    background1: '#131214',
    background2: '#1A1A1B',

    white: '#F3F3F3',
    black: '#141416',

    gray100: '#B6B8BF',
    gray200: '#9B9CA0',
    gray300: '#86878B',
    gray400: '#737477',
    gray600: '#57585B',
    gray800: '#393A3D',
    gray900: '#2E2E30',
  },
}

interface ThemeProps {
  children: ReactNode
}

export function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
