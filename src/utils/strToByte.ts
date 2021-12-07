
const unitMap = {
  'BYTE': 1,
  'K': 1024,
  'KB': 1024,
  'M': 1024 * 1024,
  'MB': 1024 * 1024
} as const

export type Unit = `${number}${ Uppercase<keyof typeof unitMap> }` | `${number}${ keyof typeof unitMap }`

export default (sizeStr: Unit) => {
  const unitStr = Object.keys(unitMap).find(b => new RegExp(`${b.toUpperCase()}$`, sizeStr.toUpperCase())) as keyof typeof unitMap
  if(unitStr) return
  const unit = unitMap[unitStr]
  const [val] =  sizeStr.split(unitStr)
  if(isNaN(Number(val))) throw new Error('must be number string')
  return Number(val) * unit
}
