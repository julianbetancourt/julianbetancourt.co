import "./prism-theme.css"
import "@fontsource/poppins"
import "@fontsource/poppins/300.css"
import "@fontsource/poppins/500.css"
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Julian Betancourt's Blog. Focused on React and Javascript"
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          property="og:description"
          content="Julian Betancourt's Blog. Focused on React and Javascript"
        />
        <meta property="og:type" content="website" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3GKQZHTHLQ"
        ></script>

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
