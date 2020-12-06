import "styled-components"

declare module "styled-components" {
  interface Base {
    body: string
    border: string
    text1: string
    text2: string
    title: {
      color1: string
      color2: string
      color3: string
      color4: string
    }
    toggle: {
      onBody: string
      onDot: string
      offBody: string
      offDot: string
    }
    colors: {
      grey: {
        500: string
      }
    }
  }
  export interface DarkTheme extends Base {}
  export interface LightTheme extends Base {}

  export interface DefaultTheme extends Base {}
}
