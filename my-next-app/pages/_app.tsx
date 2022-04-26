// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/GlobalStyles'

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default MyApp
