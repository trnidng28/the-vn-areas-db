import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from 'baseui/header-navigation'
import { StyledLink } from 'baseui/link'
import { useStyletron } from 'baseui'
import Link from 'next/link'
import Search from './Search'

export default function Header() {
  const [css, theme] = useStyletron()

  return (
    <HeaderNavigation>
      <NavigationList $align={ALIGN.left}>
        <NavigationItem>
        <Link href='/' passHref>
          <StyledLink
            className={css({
              textDecoration: 'none !important'
            })}
          >
            VietNam's areas DB
          </StyledLink>
        </Link>
        </NavigationItem>
      </NavigationList>
      <NavigationList $align={ALIGN.center} />
      <NavigationList $align={ALIGN.right}>
        <NavigationItem
          className={css({
            width: `calc(${theme.sizing.scale800} * 10)`,
            paddingRight: theme.sizing.scale800
          })}
        >
          <Search />
        </NavigationItem>
      </NavigationList>
    </HeaderNavigation>
  );
}