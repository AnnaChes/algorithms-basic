describe('Algoritms', () => {
  it('test LongestPalindromicSubstring.test', () => {
    const s1 = 'babad' //"bab" "aba"
    const s2 = 'cbbd' //"bb"
    const s3 = 'a' // a
    const s4 = 'ac' // a

    const LongestPalindromicSubstring = s => {
      let arr = []
      let strArr = s.split('')
      strArr.forEach((itemA, indexA) => {
        strArr.forEach((itemB, indexB) => {
          let str = strArr.slice(indexA, indexB + 1)
          if (str.join('') === str.reverse().join('')) {
            arr = [...arr, str.join('')]
          }
        })
      })
      arr.sort(function (a, b) {
        return b.length - a.length
      })
      return arr[0]
    }

    console.info('', { res: LongestPalindromicSubstring(s1) })
    console.info('', { res: LongestPalindromicSubstring(s2) })
    console.info('', { res: LongestPalindromicSubstring(s3) })
    console.info('', { res: LongestPalindromicSubstring(s4) })
  })
})
