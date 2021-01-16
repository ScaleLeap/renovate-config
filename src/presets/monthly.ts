import { SCHEDULE } from '../constants'
import { createPreset } from '../preset-factory'

/**
 * Some packages are updated very often, but we don't always need the latest features
 * and thus we only want to update once a month.
 */

export default createPreset({
  packageRules: [
    {
      packagePatterns: ['^@typescript-eslint/', 'jest', '^aws-sdk$', '^aws-cdk', '^@aws-cdk/'],
      schedule: [SCHEDULE.MONTHLY],
    },
  ],
})
