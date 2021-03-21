describe('Algoritms', () => {
  it('test getLargestSumAnyTwoElems', () => {
    const getLargestSumAnyTwoElems = arr => {
      let res = 0
      arr.forEach(itemA => {
        arr.forEach(itemB => {
          if (itemB !== itemA && itemA + itemB > res) {
            res = itemA + itemB
          }
        })
      })
      return res
    }

    const arr = [
      [1, 3, 2, 6, 5, 8, 10, 9, 4],
      [100, 0, 44, 32],
      [0, 0, 1, 0],
    ]
    let output = arr.map(item => getLargestSumAnyTwoElems(item))
    // console.info('[]', { output })
    const expected = [19, 144, 1]
    expect(output).toEqual(expected)
  })
})
