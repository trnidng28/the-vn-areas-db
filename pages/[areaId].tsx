import Layout from '~/components/Layout'
import { useQuery } from '@apollo/client'
import { GET_AREA, AreaData, AreaVars } from '~/gql/queries'
import { withApollo } from '~/lib/apollo'
import { useRouter } from 'next/router'
import { getAscii } from '~/utils'
import { useMemo } from 'react'
import AreaTable from '~/components/AreaTable'
import { StyledSpinnerNext } from 'baseui/spinner'

function Area() {
  const { areaId } = useRouter().query
  const { loading, error, data } = useQuery<AreaData, AreaVars>(GET_AREA, {
    variables: {
      areaId: Number(areaId)
    }
  })

  const sortedSubAreasData = useMemo(() => {
    if (!data) return []
    return [...data.area.subAreas]
      .sort((a, b) => {
        if (Number(a.name) && Number(b.name)) return Number(a.name) - Number(b.name)
        return getAscii(a.name) > getAscii(b.name) ? 1 : -1
      })
      .map(({ id, code, name, unit }, index) => ({ index: index + 1, id, code, name, unit }))
  }, [data])

  return (
    <Layout>
      {loading && <StyledSpinnerNext />}
      {data && (
        <div>
          <h2>{data.area.name}</h2>
          <AreaTable
            loading={loading}
            data={sortedSubAreasData}
          />
          {error && <div>Error: {error.message}</div>}
        </div>
      )}
    </Layout>
  )
}

export default withApollo(Area)
