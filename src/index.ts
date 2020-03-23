import { writeFileSync } from 'fs'
import { join } from 'path'
import presets from './presets'
import pkg from '../package.json'

const pkgRenovateConfig = pkg['renovate-config'] as Record<string, unknown>

Object.keys(presets)
  .sort()
  .forEach(key => (pkgRenovateConfig[key] = presets[key]))

writeFileSync(join(__dirname, '../package.json'), JSON.stringify(pkg, null, 2), { encoding: 'utf8' })
