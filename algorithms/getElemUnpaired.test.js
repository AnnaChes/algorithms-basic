describe('Algoritms', () => {
  it('test getElemUnpaired, attempt II', () => {
    const getElemUnpaired = arr => {
      return arr.filter((itemA, indexA) => {
        let indicator = true
        arr.forEach((itemB, indexB) => {
          if (itemA === itemB && indexA !== indexB) {
            indicator = false
          }
        })
        return indicator
      })
    }

    const testArr = [
      [2, 3, 4, 5, 4, 3, 2],
      [2, 3, 5, 5, 4, 3, 2],
      [0, 3, 4, 2, 4, 3, 2],
    ]

    let output = testArr.map(item => getElemUnpaired(item)[0])
    const expected = [5, 4, 0]
    expect(output).toEqual(expected)
  })
})
