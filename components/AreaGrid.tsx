import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import { StyledLink } from 'baseui/link'
import Link from 'next/link'
import { useMemo, Fragment } from 'react'
import { HeadingLevel, Heading } from 'baseui/heading'
import { UNITS } from '~/constants'
import { useI18n } from '~/lib/I18n'

const AreaItem = (area: Area) => {
  const { messages } = useI18n()

  return (
    <Link href={'/' + area.id} passHref>
      <StyledLink>
        {messages.renderAreaName(area)}
      </StyledLink>
    </Link>
  )
}

interface Props {
  areas: Area[]
}

export default function AreaGrid({ areas }: Props) {
  const grouped = useMemo(() => areas.reduce((result: { [key: string]: Area[] }, area) => {
    const { unit } = area
    result[unit] = [...(result[unit] || []), area]
    return result
  }, {}), [areas])

  return (
    <HeadingLevel>
      {Object.keys(grouped).map(unit => (
        <Fragment key={unit}>
          <Heading>
            {UNITS[unit]}
          </Heading>
          <FlexGrid
            flexGridColumnCount={[1, 2, 4, 8]}
            flexGridColumnGap='scale800'
            flexGridRowGap='scale800'
          >
            {grouped[unit].map(area => (
              <FlexGridItem key={area.id}>
                <AreaItem {...area} />
              </FlexGridItem>
            ))}
          </FlexGrid>
        </Fragment>
      ))}
    </HeadingLevel>
  )
}