import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import { StyledLink } from 'baseui/link'
import Link from 'next/link'
import { useMemo, Fragment } from 'react'
import { HeadingLevel, Heading } from 'baseui/heading'

const UNITS = {
  municipality: 'Municipality', // 'Thành phố Trung ương',
  province: 'Province', // 'Tỉnh',
  municipal_city: 'Municipal City', // 'Thành phố trực thuộc Trung ương',
  provincial_city: 'Provincial City', // 'Thành phố',
  urban_district: 'Urban District', // 'Quận',
  town: 'Town', // 'Thị xã',
  district: 'District', // 'Huyện',
  ward: 'Ward', // 'Phường',
  township: 'Township', // 'Thị trấn',
  commune: 'Commune', // 'Xã'
}

const AreaItem = ({ id, name, unit }: Area) => {
  return (
    <Link href={'/' + id} passHref>
      <StyledLink>
        {Number(name)
          ? `${UNITS[unit]} ${name}`
          : name
        }
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