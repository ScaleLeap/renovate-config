import { createPreset } from '../preset-factory'
import { createScope } from '../scope-factory'

/**
 * Default Renovate preset.
 */

export default createPreset({
  extends: [createScope('base'), createScope('devDependencies'), createScope('minorDependencies')],
})
