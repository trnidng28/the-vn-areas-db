import Layout from "../components/Layout"
import { useQuery } from "@apollo/client"
import { GET_AREAS, AreasData, AreasVars } from '~/gql/queries'
import { withApollo } from '~/lib/apollo'
import { useMemo } from "react"
import { getAscii } from '~/utils'
import AreaTable from '~/components/AreaTable'

type AreaType = AreasData['areas'][number]

const MUNICIPALITIES = ['Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ']
const isMunicipality = (area: AreaType) => area.unit === 'municipality'

const Areas = () => {
  const { loading, error, data } = useQuery<AreasData, AreasVars>(GET_AREAS, { variables: { keyword: '' } })

  const sortedAreasData = useMemo(() => {
    if (!data) return []
    return [...data.areas]
      .sort((a,b) => {
        if (isMunicipality(a) && isMunicipality(b)) return MUNICIPALITIES.indexOf(a.name) - MUNICIPALITIES.indexOf(b.name)
        if (isMunicipality(a)) return -1
        if (isMunicipality(b)) return 1

        return getAscii(a.name) > getAscii(b.name) ? 1 : -1
      })
      .map(({ id, code, name, unit }, index) => ({ index: index + 1, id, code, name, unit }))
  }, [data])

  return (
    <Layout>
      <AreaTable
        loading={loading}
        data={sortedAreasData}
      />
      {error && <div>Error: {error.message}</div>}
    </Layout>
  )
}

export default withApollo(Areas)
