import Header from './Header'
import { Block } from 'baseui/block'
import { useStyletron } from 'baseui'

const Layout = props => {
  const [_, theme] = useStyletron()
  const { scale800 } = theme.sizing
  return (
    <>
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
