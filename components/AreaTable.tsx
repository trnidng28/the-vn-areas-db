import { TableBuilder, TableBuilderColumn } from 'baseui/table-semantic'
import Link from "next/link"
import { StyledLink } from 'baseui/link'
import { useStyletron } from 'baseui'

const UNITS = {
  municipality: 'city', // 'Thành phố Trung ương',
  province: 'province', // 'Tỉnh',
  municipal_city: 'city', // 'Thành phố trực thuộc Trung ương',
  provincial_city: 'city', // 'Thành phố',
  urban_district: 'district', // 'Quận',
  town: 'town', // 'Thị xã',
  district: 'district', // 'Huyện',
  ward: 'ward', // 'Phường',
  township: 'township', // 'Thị trấn',
  commune: 'commune', // 'Xã'
}

const AreaNameCell = ({ id, name, unit }) => {
  const [css] = useStyletron()
  return (
    <Link href={'/' + id} passHref>
      <StyledLink className={css({
        textTransform: 'capitalize'
      })}>
        {Number(name)
          ? `${UNITS[unit]} ${name}`
          : `${name} ${UNITS[unit]}`
        }
      </StyledLink>
    </Link>
  )
}

export default function AreaTable({ loading, data }) {
  return (
    <TableBuilder
      isLoading={loading}
      data={data}
    >
      <TableBuilderColumn>
        {row => row.index}
      </TableBuilderColumn>
      <TableBuilderColumn header='Code'>
        {row => row.code}
      </TableBuilderColumn>
      <TableBuilderColumn header='Name'>
        {({ id, name, unit }) => <AreaNameCell id={id} name={name} unit={unit} />}
      </TableBuilderColumn>
      {/* <TableBuilderColumn header='Unit'>
        {row => row.unit}
      </TableBuilderColumn> */}
    </TableBuilder>
  )
}