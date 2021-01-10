import { gql } from '@apollo/client'
import { NexusGenFieldTypes, NexusGenArgTypes } from '~/nexus-schema/nexus-typegen'

export interface AreasData {
  areas: NexusGenFieldTypes['Area'][]
}

export type AreasVars = NexusGenArgTypes['Query']['areas']

export const GET_AREAS = gql`
  query Areas($keyword: String) {
    areas(keyword: $keyword) {
      id
      code
      name
      unit
    }
  }
`

export interface AreaData {
  area: NexusGenFieldTypes['Area']
}

export type AreaVars = NexusGenArgTypes['Query']['area']

export const GET_AREA = gql`
  query Area($areaId: Int!) {
    area(areaId: $areaId) {
      id
      code
      name
      unit
      subAreas {
        id
        code
        name
        unit
      }
    }
  }
`