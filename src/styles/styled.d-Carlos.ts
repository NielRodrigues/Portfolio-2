import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius?: string

    colors: {
      primary: string
      primaryVariant: string

      yellow: string
      red: string
      text: string

      background1: string
      background2: string
      background3: string

      white: string
      black: string

      gray100: string
      gray200: string
      gray300: string
      gray400: string
      gray600: string
      gray800: string
      gray900: string
    }
  }
}
