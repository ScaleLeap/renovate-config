import { createPreset } from '../preset-factory'

export default createPreset({
  extends: ['config:base', 'schedule:weekdays'],
  labels: ['renovatebot'],
  semanticCommits: true,
})
