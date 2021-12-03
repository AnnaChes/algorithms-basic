describe('LongestSubstringWithoutRepeatingCharacters.test', () => {
  it('test LongestSubstringWithoutRepeatingCharacters.test', () => {
    s1 = 'abcabcbb' // 3"abc"
    s2 = 'pwwkew' // 3"wke"
    s3 = '' // 0
    s4 = 'bbbbb' //  1"b"

    const LongestSubstringWithoutRepeatingCharacters = s => {
      let arrWithStr = []
      const arrStr = s.split('')
      arrStr.forEach((itemA, indexA) => {
        arrStr.forEach((itemB, indexB) => {
          let newArr = []
          let det = 0
          let str = arrStr.slice(indexA, indexB + 1)
          str.forEach(itemC => {
            if (newArr.includes(itemC) === false) {
              newArr = [...newArr, itemC]
            } else {
              det = 1
            }
          })
          if (det === 0) {
            arrWithStr = [...arrWithStr, str.join('')]
          }
        })
        arrWithStr.sort(function (a, b) {
          return b.length - a.length
        })
      })
      if (arrWithStr[0] === undefined) {
        return 0
      } else {
        return arrWithStr[0].length
      }
    }

    console.info('', { res: LongestSubstringWithoutRepeatingCharacters(s1) })
    console.info('', { res: LongestSubstringWithoutRepeatingCharacters(s2) })
    console.info('', { res: LongestSubstringWithoutRepeatingCharacters(s3) })
    console.info('', { res: LongestSubstringWithoutRepeatingCharacters(s4) })
  })
})
