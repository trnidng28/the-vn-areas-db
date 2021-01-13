export default {
  units: {
    municipality: "Municipality",
    province: "Province",
    municipal_city: "Municipal City",
    provincial_city: "Provincial City",
    urban_district: "Urban District",
    town: "Town",
    district: "District",
    ward: "Ward",
    township: "Township",
    commune: "Commune"
  },
  renderAreaName: (area: Area) => {
    const { name, unit } = area
    if (!Number(name)) return name

    let prefix
    switch (unit) {
      case 'municipality':
      case 'municipal_city':
      case 'provincial_city':
        prefix = "City"
        break
      case 'province':
        prefix = "Province"
        break
      case 'urban_district':
      case 'district':
        prefix = "District"
        break
      case 'town':
        prefix = "Town"
        break
      case 'ward':
        prefix = "Ward"
        break
      case 'township':
        prefix = "Township"
        break
      case 'commune':
        prefix = "Commune"
        break
    }

    return prefix + ' ' + name
  }
}