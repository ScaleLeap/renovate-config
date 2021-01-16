import { writeFileSync } from 'fs'
import path from 'path'

import package_ from '../package.json'
import presets from './presets'

const packageRenovateConfig = package_['renovate-config'] as Record<string, unknown>

Object.keys(presets)
  .sort()
  .forEach((key) => {
    packageRenovateConfig[key] = presets[key]
  })

writeFileSync(path.join(__dirname, '../package.json'), JSON.stringify(package_, undefined, 2), {
  encoding: 'utf8',
})
