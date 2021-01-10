import Layout from "../components/Layout"
import Link from "next/link"
import { useQuery } from "@apollo/client"
import { GET_AREAS, AreasData } from '~/gql/queries'
import { withApollo } from '~/lib/apollo'
import { useMemo } from "react"
import { getAscii } from '~/utils'

type AreaType = AreasData['areas'][number]

const MUNICIPALITIES = ['Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ']
const isMunicipality = (area: AreaType) => area.unit === 'municipality'

interface AreaProps {
  area: AreaType
}

const Area: React.FunctionComponent<AreaProps> = ({ area }) => (
  <Link href={'/' + area.id.toString()}>
    <a>
      <h2>{area.code}</h2>
      <small>By {area.name}</small>
      <p>{area.unit}</p>
      <style jsx>{`
        a {
          text-decoration: none;
          color: inherit;
          padding: 2rem;
          display: block;
        }
      `}</style>
    </a>
  </Link>
)

const Areas = () => {
  const { loading, error, data } = useQuery<AreasData>(GET_AREAS)

  const sortedAreas = useMemo(() => {
    if (!data) return []
    return [...data.areas].sort((a,b) => {
      if (isMunicipality(a) && isMunicipality(b)) return MUNICIPALITIES.indexOf(a.name) - MUNICIPALITIES.indexOf(b.name)
      if (isMunicipality(a)) return -1
      if (isMunicipality(b)) return 1

      return getAscii(a.name) > getAscii(b.name) ? 1 : -1
    })
  }, [data])
  if (loading) {
    return <div>Loading ...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <Layout>
      <div className="page">
        <h1>Areas</h1>
        <main>
          {sortedAreas.map((area) => (
            <div key={area.id} className="post">
              <Area area={area} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default withApollo(Areas)
