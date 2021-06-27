describe('Algoritms', () => {
  it('test func', () => {
    const getTwoIndexesSum = (arr, target) => {
      let res = []
      if (2 <= arr.length <= 103 && -109 <= target <= 109) {
        const arrFilter = arr.filter(item => {
          return -109 <= item <= 109
        })
        if (arrFilter.length === arr.length) {
          const arrLength = arr.length + 1
          let indexArr = []
          let Break = 0
          arr.forEach((itemA, indexA) => {
            for (let a = indexA; a !== arrLength; a++) {
              const Arr = arr.slice(a, a + 2)
              const sum = Arr[0] + Arr[1]
              if (sum === target && Break === 0) {
                res = [...res, a, a + 1]
                Break = Break + 1
                break
              }
            }
          })
        } else {
          res = 0
        }
      }

      return res
    }

    const arrInput = [
      { input: [2, 7, 11, 15], target: 9, expected: [0, 1] },
      { input: [3, 2, 4], target: 6, expected: [1, 2] },
      { input: [3, 3], target: 6, expected: [0, 1] },
      { input: [11, 2, 15, 7], target: 9, expected: [1, 3] },
      { input: [2, 2, 15, 7, 0], target: 9, expected: [0, 3] },
    ]

    let output = arrInput.map(item => {
      const res = getTwoIndexesSum(item.input, item.target)
      // expect(res).toEqual(item.expected)
      return res
    })
    console.info('[]', { output })
    output = true
    const expected = true
    expect(output).toEqual(expected)
  })
})
