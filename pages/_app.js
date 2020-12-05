
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'



const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Normalize />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}