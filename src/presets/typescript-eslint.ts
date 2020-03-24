import { createPreset } from '../preset-factory'
import { SCHEDULE } from '../constants'

/**
 * @typescript-eslint/* family is updated very often, but we don't always need the latest features
 * and thus we only want to update once a month.
 */

export default createPreset({
  packageRules: [
    {
      packagePatterns: ['^@typescript-eslint/'],
      schedule: [SCHEDULE.MONTHLY],
    },
  ],
})
