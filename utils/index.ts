export const getAscii = (string: string) => typeof string.normalize !== 'undefined'
  ? string.replace(/Đ/g, 'D')
    .replace(/đ/g, 'd')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
  : string

export const formatQuery = (query: Object) => {
  const result = {}

  for (const [key, value] of Object.entries(query)) {
    result[key] = value
      ? +value || value
      : null
  }

  return result
}