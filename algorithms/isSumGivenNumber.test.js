describe('Algoritms', () => {
  it('test isSumGivenNumber', () => {
    const isSumGivenNumber = (arr, num) => {
      let res = 'false'
      arr.forEach(itemA => {
        arr.forEach(itemB => {
          if (itemA + itemB === num) {
            res = 'true'
          }
        })
      })
      return res
    }

    const arr = [1, 3, 2, 4, 6, 5, 8, 10, 9]
    const arrNum = [0, 7, 10, 52]
    let output = arrNum.map(num => isSumGivenNumber(arr, num))

    // console.info('[]', { output })

    const expected = ['false', 'true', 'true', 'false']
    expect(output).toEqual(expected)
  })
})
