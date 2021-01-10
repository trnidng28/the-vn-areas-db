import { AppNavBar } from 'baseui/app-nav-bar'
import { StyledLink } from 'baseui/link'
import { useStyletron } from 'baseui'
import Link from 'next/link'

const Title = () => {
  const [css] = useStyletron()
  return (
    <Link href='/' passHref>
      <StyledLink
        className={css({
          textDecoration: 'none !important'
        })}
      >
        VietNam's areas DB
      </StyledLink>
    </Link>
  )
}

export default function Header() {
  const title = <Title />

  return (
    <AppNavBar title={title} />
  );
}