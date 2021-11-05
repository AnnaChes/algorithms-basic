describe('Algoritms', () => {
  it('test getIntegerDivisorArr', () => {
    const getIntegerDivisorArr = x => {
      let res = []
      for (let a = 2; a < x; a++) {
        if (x % a === 0) {
          res = [...res, a]
        }
      }
      return res
    }

    const testArr = [6, 14, 28]

    let output = testArr.map(item => getIntegerDivisorArr(item))
    const expected = [
      [2, 3],
      [2, 7],
      [2, 4, 7, 14],
    ]
    expect(output).toEqual(expected)
  })
})
