import { createPreset } from './preset-factory'

describe(createPreset.name, () => {
  it('should return a config', () => {
    expect(createPreset({})).toEqual({})
  })
})
