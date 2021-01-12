import { createPreset } from '../preset-factory'
import { SCHEDULE } from '../constants'

export default createPreset({
  extends: ['config:base', 'monorepo:pollyjs'],
  labels: ['renovatebot'],
  schedule: [SCHEDULE.WEEKDAYS],
  semanticCommits: 'enabled',
  timezone: 'Etc/UTC',
})
