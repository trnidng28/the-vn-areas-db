import Header from './Header'
import { Block } from 'baseui/block'
import { useStyletron } from 'baseui'

const Layout = props => {
  const [css, theme] = useStyletron()
  const { scale600, scale800 } = theme.sizing
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
