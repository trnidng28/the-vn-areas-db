interface AreaData {
  id: string
  code: string
  name: string
  unit: string
  nameAscii: string
}

interface Area extends AreaData {
  subAreas?: AreaData[]
  parentArea?: AreaData
}
