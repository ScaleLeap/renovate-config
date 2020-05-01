import { createPreset } from '../preset-factory'
import { SCHEDULE } from '../constants'

export default createPreset({
  extends: ['config:base', 'monorepo:pollyjs'],
  labels: ['renovatebot'],
  schedule: [SCHEDULE.WEEKDAYS],
  semanticCommits: true,
  timezone: 'Etc/UTC',
  postUpdateOptions: ['npmDedupe'],
})
