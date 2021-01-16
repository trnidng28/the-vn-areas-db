import { withApollo } from '~/lib/apollo'
import Layout from '~/components/Layout'
import { HeadingLevel, Heading } from 'baseui/heading'
import { StyledLink } from 'baseui/link'
import { Paragraph3 } from 'baseui/typography'

const Api = () => {
  return (
    <Layout>
      <HeadingLevel>
        <Heading>
          Supported API
        </Heading>
        <HeadingLevel>
          <Heading styleLevel={5}>
            <StyledLink href='/api/areas?parentId=' target='_blank'>
              /api/areas
            </StyledLink>
          </Heading>
          <Paragraph3>
            Get all areas
          </Paragraph3>
        </HeadingLevel>
        <HeadingLevel>
          <Heading styleLevel={5}>
            <StyledLink href='/api/areas/1' target='_blank'>
              /api/areas/:id
            </StyledLink>
          </Heading>
          <Paragraph3>
            Get specific area with each nested sub-areas + parent-area
          </Paragraph3>
        </HeadingLevel>
        <HeadingLevel>
          <Heading styleLevel={5}>
            <StyledLink href='/api/areas/search/ha?unit=municipality' target='_blank'>
              /api/areas/search/:name
            </StyledLink>
          </Heading>
          <Paragraph3>
            Find all areas by name
          </Paragraph3>
        </HeadingLevel>
      </HeadingLevel>
    </Layout>
  )
}

export default withApollo(Api)