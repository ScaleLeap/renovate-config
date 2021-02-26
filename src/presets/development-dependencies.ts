import { createPreset } from '../preset-factory'

/**
 * Auto-merge all development dependencies.
 */

export default createPreset({
  packageRules: [
    {
      matchDepTypes: ['devDependencies'],
      automerge: true,
    },
  ],
})
