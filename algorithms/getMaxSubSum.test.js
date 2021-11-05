describe('Algoritms', () => {
  it('test getMaxSubSum', () => {
    const getMaxSubSum = arr => {
      const arrLength = arr.length + 1
      let maxNumber = Math.min(...arr)
      arr.forEach((itemA, index) => {
        for (let a = index; a !== arrLength; a++) {
          const Arr = arr.slice(index, a + 1)
          let sum = 0
          Arr.forEach(itemB => {
            sum = sum + itemB
          })
          if (sum > maxNumber) {
            maxNumber = sum
          }
        }
      })
      return maxNumber
    }

    const arrExpected = [
      { arr: [-1, 2, 3, -9], expected: 5 },
      { arr: [2, -1, 2, 3, -9], expected: 6 },
      { arr: [-1, 2, 3, -9, 11], expected: 11 },
      { arr: [-1, 2, 5, 3, -9, 9], expected: 10 },
      { arr: [-2, -1, 1, 2], expected: 3 },
      { arr: [100, -9, 2, -3, 5], expected: 100 },
      { arr: [1, 2, 3], expected: 6 },
      { arr: [-1, -2, -3], expected: -1 },
    ]

    let output = arrExpected.map(item => getMaxSubSum(item.arr))

    // console.info('[]', { output })
    const expected = [5, 6, 11, 10, 3, 100, 6, -1]
    expect(output).toEqual(expected)
  })
})
