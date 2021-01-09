import { AppProps } from 'next/app'
import { withApollo } from '~/lib/apollo'

export default function App({ Component, pageProps }: AppProps) {
  const Page = withApollo(Component)

  return <Page {...pageProps} />
}