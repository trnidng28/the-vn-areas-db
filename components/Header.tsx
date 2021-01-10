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
        className={css({
          order: 0
        })}
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
        className={css({
          justifyContent: 'flex-start !important',
          order: 2,
          marginTop: theme.sizing.scale500 + ' !important',
          width: '100%',
          paddingLeft: '0 !important',
          [theme.mediaQuery.medium]: {
            order: 1,
            marginTop: '0 !important',
            width: 'unset',
          }
        })}
      >
        <NavigationItem
          className={css({
            width: '100%',
            minWidth: `calc(${theme.sizing.scale800} * 10)`,
            [theme.mediaQuery.medium]: {
              maxWidth: `calc(${theme.sizing.scale800} * 10)`
            }
          })}
        >
          <Search />
        </NavigationItem>
      </NavigationList>
      <NavigationList
        $align={ALIGN.right}
        className={css({
          order: 1,
          marginLeft: 'auto !important',
          [theme.mediaQuery.medium]: {
            order: 2,
          }
        })}
      >
        <NavigationItem
          className={css({
            paddingRight: theme.sizing.scale800
          })}
        >
          <Button>Download</Button>
        </NavigationItem>
      </NavigationList>
    </HeaderNavigation>
  );
}