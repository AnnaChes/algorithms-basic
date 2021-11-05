describe('getNsCharsOfStrWithLastWord.test', () => {
  it('test getNsCharsOfStrWithLastWord.test', () => {
    const str0 =
      'How would you get first 52 character long string from a big message but dont cut the last word: word break problem'
    const num1 = 49
    const num2 = 3
    const num3 = 2
    // ‘How would you get first 52 character long string’

    const getNsCharsOfStrWithLastWord = (str, num) => {
      let res = 0
      const arr = str.split('').slice(0, num)
      const arrStr = str.split('')
      const lastChar = arr.length - 1

      if (arr[lastChar] === ' ') {
        res = arr.slice(0, lastChar).join('')
      } else if (arrStr[lastChar + 1] === ' ') {
        res = arr.join('')
      } else {
        let index
        for (let a = lastChar; arr[a] !== ' '; a = a - 1) {
          if (a === 0) {
            index = 1
            break
          }
          index = a
        }
        res = arr.slice(0, index - 1).join('')
      }
      return res
    }

    console.info('info', { res: getNsCharsOfStrWithLastWord(str0, num1) })
    // console.info('info', { res: getNsCharsOfStrWithLastWord(str0, num2) })
    // console.info('info', { res: getNsCharsOfStrWithLastWord(str0, num3) })
  })
})
