import '../styles/globals.css'
import ContextProvider from '../context/Context'
import '../styles/Calendar.css';


function MyApp({ Component, pageProps }) {
  return (
  <ContextProvider>
    <Component {...pageProps} />
  </ContextProvider>
  )
}

export default MyApp
