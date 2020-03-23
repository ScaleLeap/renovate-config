import { createScope } from './scope-factory'

describe(createScope.name, () => {
  it('should return a valid scope name', () => {
    expect.assertions(1)

    expect(createScope('foo')).toEqual('@scaleleap:foo')
  })
})
