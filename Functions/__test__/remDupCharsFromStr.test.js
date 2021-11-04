describe('remDupCharsFromStr.test', () => {
  it('test remDupCharsFromStr.test', () => {
    const str0 = 'reverse words in a sentence'

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

    strNew = remDupCharsFromStr(str0) // 'revs wodinatc'

    console.info('info', { res: strNew })
  })
})
