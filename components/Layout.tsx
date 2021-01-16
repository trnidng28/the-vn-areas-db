import Header from './Header'
import { Block } from 'baseui/block'
import { useStyletron } from 'baseui'
import Head from 'next/head'

const Layout = props => {
  const [_, theme] = useStyletron()
  const { scale800 } = theme.sizing
  return (
    <>
      <Head>
        <title>The Viet Nam's Areas DB</title>
      </Head>
      <Header />
      <Block
        padding={[scale800]}
      >
        {props.children}
      </Block>
    </>
  )
}

export default Layout
