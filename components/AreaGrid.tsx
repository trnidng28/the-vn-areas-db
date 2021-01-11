import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import { StyledLink } from 'baseui/link'
import Link from 'next/link'

const UNITS = {
  municipality: 'City', // 'Thành phố Trung ương',
  province: 'Province', // 'Tỉnh',
  municipal_city: 'City', // 'Thành phố trực thuộc Trung ương',
  provincial_city: 'City', // 'Thành phố',
  urban_district: 'District', // 'Quận',
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
  return (
    <FlexGrid
      flexGridColumnCount={[1, 2, 4, 8]}
      flexGridColumnGap='scale800'
      flexGridRowGap='scale800'
    >
      {areas.map(area => (
        <FlexGridItem key={area.id}>
          <AreaItem {...area} />
        </FlexGridItem>
      ))}
    </FlexGrid>
  )
}