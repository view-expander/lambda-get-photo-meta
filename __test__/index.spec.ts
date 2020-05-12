import { handler } from '../src'

describe('handler()', () => {
  it('returns dummy response', async () => {
    expect.assertions(1)

    return expect(handler()).resolves.toEqual({
      statusCode: 200,
      body: JSON.stringify({}),
    })
  })
})
