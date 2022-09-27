import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {ThemeProvider} from 'next-themes'
config.autoAddCss = false
function MyApp({ Component, pageProps }) {
  return (
  // <ThemeProvider>
    <Component {...pageProps} />
  // </ThemeProvider>
  )
}

export default MyApp
