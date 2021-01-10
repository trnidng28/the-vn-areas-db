import { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider as StyletronProvider } from 'styletron-react'
import { styletron } from '~/lib/styletron'
import { BaseProvider, LightTheme } from 'baseui'
import '../style.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <StyletronProvider value={styletron}>
        <BaseProvider theme={LightTheme}>
          <Component {...pageProps} />
        </BaseProvider>
      </StyletronProvider>
    </>
  )
}