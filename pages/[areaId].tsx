import Layout from '~/components/Layout'
import { useQuery } from '@apollo/client'
import { GET_AREA, AreaData, AreaVars } from '~/gql/queries'
import Link from 'next/link'
import { withApollo } from '~/lib/apollo'
import { useRouter } from 'next/router'

function Area() {
  const { areaId } = useRouter().query
  const { loading, error, data } = useQuery<AreaData, AreaVars>(GET_AREA, {
    variables: {
      areaId: Number(areaId)
    }
  })

  if (loading) {
    console.log('loading')
    return <div>Loading ...</div>
  }
  if (error) {
    console.log('error')
    return <div>Error: {error.message}</div>
  }

  console.log(`response`, data)

  const title = data.area.name

  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <ul>
          {data.area.subAreas.map(area =>
            <li key={area.id}>
              <Link href={'/' + area.id}>
                <a>{area.name}</a>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </Layout>
  )
}

export default withApollo(Area)
