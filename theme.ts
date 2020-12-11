import { DefaultTheme, DarkTheme, LightTheme } from "styled-components"

const colors = {
  grey: {
    500: "#252829",
  },
  orange: {
    500: "#df6b3c",
  },
}

export const darkTheme: DarkTheme = {
  body: "#0e141b",
  border: "#fff",
  text1: "#fff",
  text2: "#fff",
  textLink: colors.orange[500],
  postPreview: "#b3e5ff1a",
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
  text1: "#0a0c10",
  text2: "hsl(222deg, 22%, 5%)",
  postPreview: "#e2f1ff",
  textLink: colors.orange[500],
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
