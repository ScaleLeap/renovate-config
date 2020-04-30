import { createPreset } from '../preset-factory'
import { SCHEDULE } from '../constants'

export default createPreset({
  extends: ['config:base'],
  labels: ['renovatebot'],
  schedule: [SCHEDULE.WEEKDAYS],
  semanticCommits: true,
  timezone: 'Etc/UTC',
  postUpdateOptions: ['npmDedupe'],
})
