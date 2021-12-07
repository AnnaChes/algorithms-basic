describe('Algoritms', () => {
  it('test remDupCharsFromStr', () => {
    const remDupCharsFromStr = str => {
      let res = []
      const strArr = str.split('')
      strArr.forEach(item => {
        if (res.includes(item) === false) {
          res = [...res, item]
        }
      })
      return res.join('')
    }

    const str = 'reverse words in a sentence'
    let output = remDupCharsFromStr(str)
    // console.info('[]', { output })
    const expected = 'revs wodinatc'
    expect(output).toEqual(expected)
  })
})
