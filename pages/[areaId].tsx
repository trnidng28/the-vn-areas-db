import Layout from '~/components/Layout'
import { useQuery } from '@apollo/client'
import { GET_AREA, AreaData, AreaVars } from '~/gql/queries'
import { withApollo } from '~/lib/apollo'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import AreaGrid from '~/components/AreaGrid'
import { StyledSpinnerNext } from 'baseui/spinner'
import { Breadcrumbs } from 'baseui/breadcrumbs'
import { StyledLink } from 'baseui/link'
import Link from 'next/link'
import { useI18n } from '~/lib/I18n'

function Area() {
  const { messages } = useI18n()

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
        return a.nameAscii > b.nameAscii ? 1 : -1
      })
  }, [data])

  const parenAreaBreadcrumbs = useMemo(() => {
    if (!data) return []

    const breadcrumbs = []
    let area = data.area.parentArea
    while(!!area) {
      breadcrumbs.unshift(
        <Link key={area.id} href={'/' + area.id}>
          <StyledLink>{messages.renderAreaName(area)}</StyledLink>
        </Link>
      )
      // @ts-ignore
      area = area.parentArea
    }
    return breadcrumbs
  }, [data])

  return (
    <Layout>
      {loading && <StyledSpinnerNext />}
      {data && (
        <>
          <Breadcrumbs>
            <Link href='/'>
              <StyledLink>{'Việt Nam'}</StyledLink>
            </Link>
            {parenAreaBreadcrumbs}
            <span>{messages.renderAreaName(data.area)}</span>
          </Breadcrumbs>
          <AreaGrid areas={sortedSubAreasData} />
        </>
      )}
      {error && <div>Error: {error.message}</div>}
    </Layout>
  )
}

export default withApollo(Area)
