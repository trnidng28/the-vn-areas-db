export const getAscii = (string: string) => typeof string.normalize !== 'undefined'
  ? string.replace(/Đ/g, 'D')
    .replace(/đ/g, 'd')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
  : string
