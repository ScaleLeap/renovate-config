import { createPreset } from '../preset-factory'

/**
 * Auto-merge all minor dependency changes.
 */

export default createPreset({
  packageRules: [
    {
      matchUpdateTypes: ['minor', 'patch', 'pin', 'digest'],
      automerge: true,
    },
  ],
})
