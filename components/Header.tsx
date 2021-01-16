import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from 'baseui/header-navigation'
import { StyledLink } from 'baseui/link'
import { Button } from 'baseui/button'
import { H4 } from 'baseui/typography'
import { useStyletron } from 'baseui'
import Link from 'next/link'
import Search from './Search'
import { Block } from 'baseui/block'

export default function Header() {
  const [css, theme] = useStyletron()

  return (
    <HeaderNavigation
      overrides={{
        Root: {
          style: {
            flexWrap: 'wrap'
          }
        }
      }}
    >
      <NavigationList
        $align={ALIGN.left}
      >
        <NavigationItem>
          <H4 margin={0} as='h1'>
            <Link href='/' passHref>
              <StyledLink
                className={css({
                  textDecoration: 'none !important'
                })}
              >
                <Block as='span' display={['unset', 'none', 'unset']}>
                  Viet Nam's areas
                </Block>
                <Block as='span' display={['none', 'unset', 'none']}>
                  VN's areas
                </Block>
              </StyledLink>
            </Link>
          </H4>
        </NavigationItem>
      </NavigationList>
      <NavigationList
        $align={ALIGN.center}
      >
        <NavigationItem
          className={css({
            marginLeft: 'auto'
          })}
        >
          <Link href='/docs/api' passHref>
            <StyledLink>API</StyledLink>
          </Link>
        </NavigationItem>
      </NavigationList>
      <NavigationList
        $align={ALIGN.right}
        className={css({
          width: '100%',
          marginTop: theme.sizing.scale300,
          [theme.mediaQuery.medium]: {
            marginTop: 0,
            width: 'unset'
          }
        })}
      >
        <NavigationItem
          className={css({
            width: '100%',
            paddingRight: theme.sizing.scale800,
            minWidth: `calc(${theme.sizing.scale800} * 10)`,
            [theme.mediaQuery.medium]: {
              maxWidth: `calc(${theme.sizing.scale800} * 10)`
            }
          })}
        >
          <Search />
        </NavigationItem>
      </NavigationList>
    </HeaderNavigation>
  );
}