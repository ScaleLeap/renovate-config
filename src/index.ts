import { promises as fs } from 'fs'
import path from 'path'

import package_ from '../package.json'
import presets from './presets'

const packageRenovateConfig = package_['renovate-config'] as Record<string, unknown>

for (const key of Object.keys(presets).sort()) {
  packageRenovateConfig[key] = presets[key]
}

fs.writeFile(path.join(__dirname, '../package.json'), JSON.stringify(package_, undefined, 2), {
  encoding: 'utf8',
})
