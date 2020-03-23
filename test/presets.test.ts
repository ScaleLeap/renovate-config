import { validateConfig } from 'renovate/dist/config/validation'
import presets from '../src/presets'
import { createScope } from '../src/scope-factory'
import pkg from '../package.json'

const presetNames = Object.keys(presets)
const pkgRenovateConfig = pkg['renovate-config'] as Record<string, unknown>
const presetPrefix = createScope('foo').split(':')[0]

describe.each(presetNames)('Preset %s', (presetName) => {
  const preset = presets[presetName]

  it('should validate', async () => {
    expect.assertions(2)

    const validationResult = await validateConfig(preset)

    expect(validationResult.errors).toHaveLength(0)
    expect(validationResult.warnings).toHaveLength(0)
  })

  it('should be defined in package.json', () => {
    expect.assertions(1)

    expect(pkgRenovateConfig[presetName]).toEqual(preset)
  })

  it('should extend existing presets', () => {
    expect.assertions(1)

    const extend = preset.extends || []

    // finds defined presets from our scope
    const scopedPresets = extend.filter((p) => p.startsWith(presetPrefix)).map((p) => p.substr(presetPrefix.length + 1))

    // then finds actual presets that we have available
    const foundPresets = scopedPresets.filter((p) => !!presets[p])

    expect(scopedPresets).toEqual(foundPresets)
  })
})
