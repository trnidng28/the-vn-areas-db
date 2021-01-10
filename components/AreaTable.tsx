import { TableBuilder, TableBuilderColumn } from 'baseui/table-semantic'
import Link from "next/link"
import { StyledLink } from 'baseui/link'

const AreaNameCell = ({ id, name }) => (
  <Link href={'/' + id} passHref>
    <StyledLink>{name}</StyledLink>
  </Link>
)

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
        {({ id, name }) => <AreaNameCell id={id} name={name} />}
      </TableBuilderColumn>
      <TableBuilderColumn header='Unit'>
        {row => row.unit}
      </TableBuilderColumn>
    </TableBuilder>
  )
}