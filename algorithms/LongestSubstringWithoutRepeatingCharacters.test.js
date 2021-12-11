describe('LongestSubstringWithoutRepeatingCharacters.test', () => {
  it('test LongestSubstringWithoutRepeatingCharacters.test', () => {
    const isArrUniq = arrSubStr => {
      let uniqArr = []
      arrSubStr.forEach(itemC => {
        if (uniqArr.includes(itemC) === false) {
          uniqArr = [...uniqArr, itemC]
        }
      })
      return arrSubStr.length === uniqArr.length
    }

    const LongestSubstringWithoutRepeatingCharacters = s => {
      let arrUniqStr = []
      const arrStr = s.split('')
      arrStr.forEach((itemA, indexA) => {
        arrStr.forEach((itemB, indexB) => {
          let arrSubStr = arrStr.slice(indexA, indexB + 1)
          if (arrSubStr.length) {
            if (isArrUniq(arrSubStr)) {
              arrUniqStr = [...arrUniqStr, arrSubStr.join('')]
            }
          }
        })
        arrUniqStr.sort(function (a, b) {
          return b.length - a.length
        })
      })
      if (arrUniqStr[0] === undefined) {
        return 0
      } else {
        return arrUniqStr[0].length
      }
    }

    const testArr = [
      { arg: 'abcc', expect: 3 }, // 3"abc"
      { arg: 'abcabcbb', expect: 3 }, // 3"abc"
      { arg: 'pwwkew', expect: 3 }, // 3"wke"
      { arg: '', expect: 0 }, // 0
      { arg: 'bbbbb', expect: 1 }, //  1"b"
      { arg: 'abcd', expect: 4 },
    ]

    testArr.forEach(item =>
      console.info('[41]', {
        res1: LongestSubstringWithoutRepeatingCharacters(item.arg),
        expect: item.expect,
        pass:
          LongestSubstringWithoutRepeatingCharacters(item.arg) === item.expect,
      })
    )
  })
})

// DRY Don't Repeat Yourself
