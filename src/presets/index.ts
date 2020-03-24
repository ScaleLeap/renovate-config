import { RenovateConfig } from 'renovate/dist/config/common'

import base from './base'
import _default from './default'
import devDependencies from './dev-dependencies'
import minorDependencies from './minor-dependencies'
import typescriptEslint from './typescript-eslint'

export default {
  base,
  default: _default,
  devDependencies,
  minorDependencies,
  typescriptEslint,
} as Record<string, RenovateConfig>
