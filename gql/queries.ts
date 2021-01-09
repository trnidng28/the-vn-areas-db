import { gql } from '@apollo/client'
import { NexusGenFieldTypes } from '~/nexus-schema/nexus-typegen'

export interface AreasData {
  areas: NexusGenFieldTypes['Query']['areas']
}

export const GET_AREAS = gql`
  query Areas {
    areas {
      id
      code
      name
      unit
    }
  }
`