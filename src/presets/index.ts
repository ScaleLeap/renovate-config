// eslint-disable-next-line import/no-extraneous-dependencies
import { RenovateConfig } from 'renovate/dist/config/common'

import base from './base'
import _default from './default'
import devDependencies from './development-dependencies'
import minorDependencies from './minor-dependencies'
import monthly from './monthly'
import types from './types'

export default {
  base,
  default: _default,
  devDependencies,
  minorDependencies,
  monthly,
  types,
} as Record<string, RenovateConfig>
