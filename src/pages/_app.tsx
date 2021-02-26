import type {AppProps /*, AppContext */} from 'next/app'
import GlobalStyle from '../../styles/globalStyle'

function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
