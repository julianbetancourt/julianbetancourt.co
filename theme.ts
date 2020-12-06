import { DefaultTheme, DarkTheme, LightTheme } from "styled-components"

const colors = {
  grey: {
    500: "#252829",
  },
}

export const darkTheme: DarkTheme = {
  body: "#252829",
  border: "#fff",
  text1: "#81919c",
  text2: "#fff",
  title: {
    color1: "#c8ac48",
    color2: "#df6b3c",
    color3: "#5399d7",
    color4: "#fff",
  },
  toggle: {
    onBody: "#fff",
    onDot: "#81919c",
    offBody: "#fff",
    offDot: "#81919c",
  },
  colors,
}

export const lightTheme: LightTheme = {
  body: "#fff",
  border: "#252829",
  text1: "#81919c",
  text2: "#81919c",
  title: {
    color1: "#df6b3c",
    color2: "#df6b3c",
    color3: "#df6b3c",
    color4: "#5399d7",
  },
  toggle: {
    onBody: "#81919c",
    onDot: "#fff",
    offBody: "#81919c",
    offDot: "#fff",
  },
  colors,
}

// export const theme: DefaultTheme = {
//   dark,
//   light,
// }
