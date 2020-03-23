import { createPreset } from '../preset-factory'

/**
 * Auto-merge all minor dependency changes.
 */

export default createPreset({
  packageRules: [
    {
      updateTypes: ['minor', 'patch', 'pin', 'digest'],
      automerge: true,
    },
  ],
})
