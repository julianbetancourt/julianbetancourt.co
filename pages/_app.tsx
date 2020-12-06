import Head from "next/head"
import { useState, useEffect } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Normalize } from "styled-normalize"

import { Toggle } from "../components/Toggle"
import { darkTheme, lightTheme } from "../theme"

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(p) => p.theme.body};
    color: ${(p) => p.theme.text1};
    font-family: "Source Code Pro", "Space Mono", monospace;

  }
  a {
    color: inherit;
  }
`

export default function App({ Component, pageProps }) {
  const [currentTheme, setCurrentTheme] = useState(null)
  const themeToggler = () => {
    currentTheme === "light"
      ? setCurrentTheme("dark")
      : setCurrentTheme("light")
  }

  useEffect(() => {
    if (window && window.localStorage.getItem("theme")) {
      setCurrentTheme(window.localStorage.getItem("theme"))
    } else {
      setCurrentTheme("dark")
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", currentTheme)
  }, [currentTheme])

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;500&family=Space+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Normalize />
      <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
        <Component {...pageProps} />
        <GlobalStyle />
        {currentTheme && (
          <Toggle
            className="toggle"
            onClick={() => {
              themeToggler()
            }}
            on={Boolean(currentTheme === "dark")}
          />
        )}
      </ThemeProvider>
    </>
  )
}
