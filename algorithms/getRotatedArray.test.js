describe('Algoritms', () => {
  it('test getRotatedArray', () => {
    const getRotatedArray = (arr, times) => {
      let times2 = times
      if (times > arr.length) {
        if (times % arr.length === 0) {
          times2 = arr.length
        } else {
          times2 = times % arr.length
        }
      }

      const arr1 = arr.slice(0, times2)
      const arr2 = arr.slice(times2)
      const arrRes = [...arr2, ...arr1]
      return arrRes
    }

    const arr = [3, 8, 9, 7, 6]
    const arrTest = [
      { times: 0, expected: [3, 8, 9, 7, 6] },
      { times: 1, expected: [8, 9, 7, 6, 3] },
      { times: 2, expected: [9, 7, 6, 3, 8] },
      { times: 3, expected: [7, 6, 3, 8, 9] },
      { times: 4, expected: [6, 3, 8, 9, 7] },
      { times: 5, expected: [3, 8, 9, 7, 6] },
      { times: 6, expected: [8, 9, 7, 6, 3] },
      { times: 7, expected: [9, 7, 6, 3, 8] },
    ]

    let output = arrTest.map((item, i) => {
      const { times, expected } = item
      return getRotatedArray(arr, times)
    })

    // console.info('[]', { output })
    const expected = [
      [3, 8, 9, 7, 6],
      [8, 9, 7, 6, 3],
      [9, 7, 6, 3, 8],
      [7, 6, 3, 8, 9],
      [6, 3, 8, 9, 7],
      [3, 8, 9, 7, 6],
      [8, 9, 7, 6, 3],
      [9, 7, 6, 3, 8],
    ]
    expect(output).toEqual(expected)
  })
})
