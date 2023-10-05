import { Color3 } from '@babylonjs/core'

export function hex2color3(hex: string): Color3 {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  const r = result ? parseInt(result[1], 16) : 0
  const g = result ? parseInt(result[2], 16) : 0
  const b = result ? parseInt(result[3], 16) : 0
  return new Color3(r, g, b)
}
