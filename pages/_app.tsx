import { useState, useEffect } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Normalize } from "styled-normalize"
import { Toggle } from "../components/Toggle"
import { darkTheme, lightTheme } from "../theme"

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
      <Normalize />
      <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
        <Component {...pageProps} />
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
