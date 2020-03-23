import pkg from '../package.json'
const presetPrefix = pkg.name.split('/')[0]

export function createScope(name: string) {
  return `${presetPrefix}:${name}`
}
