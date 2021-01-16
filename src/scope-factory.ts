import package_ from '../package.json'

const presetPrefix = package_.name.split('/')[0]

export function createScope(name: string): string {
  return `${presetPrefix}:${name}`
}
