import { createPreset } from '../preset-factory'
import { SCHEDULE } from '../constants'

/**
 * Certain type libraries are very noisy and get a lot of minor updates.
 */

export default createPreset({
  packageRules: [
    {
      packageNames: ['@types/node'],
      schedule: [SCHEDULE.MONTHLY],
    },
  ],
})
