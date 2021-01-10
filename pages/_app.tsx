import { AppProps } from 'next/app'
import { Provider as StyletronProvider } from 'styletron-react'
import { styletron } from '~/lib/styletron'
import { BaseProvider, LightTheme } from 'baseui'
import '../style.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        <Component {...pageProps} />
      </BaseProvider>
    </StyletronProvider>
  )
}