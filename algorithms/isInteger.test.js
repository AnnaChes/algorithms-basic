describe('Algoritms', () => {
  test('test isInteger', () => {
    function isInteger2(number) {
      if (number % 1 !== 0) {
        const result = 'not integer'
        return result
      } else {
        const result = 'integer'
        return result
      }
    }

    function isInteger3(number) {
      const SmallNumber = Math.floor(number)
      if (SmallNumber != number) {
        const result = 'not integer'
        return result
      } else {
        const result = 'integer'
        return result
      }
    }

    const input = [3, 11, 3.4, 11.7]
    const expected = ['integer', 'integer', 'not integer', 'not integer']

    let output = input.map(item => isInteger2(item))
    expect(output).toEqual(expected)

    output = input.map(item => isInteger3(item))
    expect(output).toEqual(expected)
  })
})
