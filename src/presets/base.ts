import { SCHEDULE } from '../constants'
import { createPreset } from '../preset-factory'

export default createPreset({
  extends: ['config:base', 'monorepo:pollyjs'],
  labels: ['renovatebot'],
  schedule: [SCHEDULE.WEEKDAYS],
  semanticCommits: 'enabled',
  semanticCommitType: 'chore',
  timezone: 'Etc/UTC',
})
