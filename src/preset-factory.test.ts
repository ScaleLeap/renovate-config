import { createPreset } from './preset-factory'

describe(`${createPreset.name}`, () => {
  it('should return a config', () => {
    expect.assertions(1)

    expect(createPreset({})).toStrictEqual({})
  })
})
