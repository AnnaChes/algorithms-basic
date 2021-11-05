describe('Algoritms', () => {
  it('test countZerosInNumber', () => {
    const countZerosInNumber = arr => {
      let sum = 0
      arr.forEach(item => {
        if (item === 0) {
          sum = sum + 1
        }
        if (item % 10 === 0 && item < 100 && item !== 0) {
          sum = sum + 1
        }
        if (item % 10 === 0 && item >= 100) {
          for (let a = 1; a > 0; a++) {
            const pow = Math.pow(10, a)
            if (pow === item) {
              sum = sum + a
              break
            }
          }
        }
      })
      return sum
    }

    const arr = [
      [0, 1, 3, 2, 4, 6, 5, 8, 10, 9],
      [0, 1000],
      [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    ]

    let output = arr.map(item => countZerosInNumber(item))
    // console.info('[]', { output })
    const expected = [2, 4, 12]
    expect(output).toEqual(expected)
  })
})
