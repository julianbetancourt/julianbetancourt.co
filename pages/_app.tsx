import "./prism-theme.css"
import Head from "next/head"
import { useState, useEffect } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Normalize } from "styled-normalize"

import { Toggle } from "../components/Toggle"
import { darkTheme, lightTheme } from "../theme"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background: ${(p) => p.theme.body};
    color: ${(p) => p.theme.text1};
    font-family: 'Poppins', sans-serif;

  }
  a {
    color: ${(p) => p.theme.textLink};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  p {
    font-weight: 300;
    line-height: 1.6;
    margin-bottom: 32px;
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
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap"
          rel="stylesheet"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3GKQZHTHLQ');
        `,
          }}
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
