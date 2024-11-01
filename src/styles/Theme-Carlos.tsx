import React, { ReactNode } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'


export const theme: DefaultTheme = {
  colors: {
    primary: '#FD6649',
    primaryVariant: '#FF9068',

    yellow: '#f6c61b',
    red: '#f6601b',

    text: '#FFFFFF',

    background1: '#121214',
    background2: '#0f0f10',
    background3: '#101012',

    white: '#FFFFFF',
    black: '#000000',

    gray100: '#B6B8BF',
    gray200: '#9B9CA0',
    gray300: '#86878B',
    gray400: '#737477',
    gray600: '#57585B',
    gray800: '#202024',
    gray900: '#1e1e1e',
  },
}

interface ThemeProps {
  children: ReactNode
}

export function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
