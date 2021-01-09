import Layout from "../components/Layout"
import Link from "next/link"
import { useQuery } from "@apollo/client"
import { GET_AREAS, AreasData } from '~/gql/queries'

interface AreaProps {
  area: AreasData['areas'][number]
}

const Area: React.FunctionComponent<AreaProps> = ({ area }) => (
  <Link href="/p/[id]" as={`/p/${area.id}`}>
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
          {data.areas.map((area) => (
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

export default Areas
