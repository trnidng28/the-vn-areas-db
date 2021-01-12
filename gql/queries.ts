import { gql } from '@apollo/client'
import { NexusGenArgTypes } from '~/nexus-schema/nexus-typegen'

const AreaFragment = gql`
  fragment AreaData on Area {
    id
    code
    name
    unit
    nameAscii
  }
`

export interface AreasData {
  areas: Area[]
}

export type AreasVars = NexusGenArgTypes['Query']['areas']

export const GET_AREAS = gql`
  query Areas($keyword: String) {
    areas(keyword: $keyword) {
      ...AreaData
    }
  }
  ${AreaFragment}
`

export interface AreaData {
  area: Area
}

export type AreaVars = NexusGenArgTypes['Query']['area']

export const GET_AREA = gql`
  query Area($areaId: Int!) {
    area(areaId: $areaId) {
      ...AreaData
      subAreas {
        ...AreaData
      }
      parentArea {
        ...AreaData
        parentArea {
          ...AreaData
        }
      }
    }
  }
  ${AreaFragment}
`