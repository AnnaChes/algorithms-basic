describe('LetterCombinationsofaPhoneNumber.test', () => {
    it('test LetterCombinationsofaPhoneNumber.test', () => {
        
      const digits1 = "23"// ["ad","ae","af","bd","be","bf","cd","ce","cf"]
      const digits2 = ""//[]
      const digits3 = "2"//["a","b","c"]
 

      const LetterCombinationsofaPhoneNumber = (digits) => {
        const digitArr = digits.split('')
        let res = []
        const phone = {'2': ['a', 'b', 'c'], '3': ['d', 'e', 'f'], '4': ['g', 'h', 'i'],
         '5': ['j', 'k', 'l'], '6': ['m', 'n', 'o'], '7': ['p', 'q', 'r', 's'],
          '8': ['t', 'u', 'v'], '9': ['w', 'x', 'y', 'z'] }
            
          digitArr.forEach((item, index) => {
            if (index !== digitArr.length - 1){
              phone[item].forEach((item1, index1) => {
                phone[digitArr[index + 1]].forEach((item2, index2) => {
                   const subStr = item1 + item2
                   res = [...res, subStr]
                })
              })
            }
            if(digitArr.length === 1){
              res = [...res, ...phone[digitArr[0]]]
            }
          })
        return res
      }

      console.info('', { res: LetterCombinationsofaPhoneNumber(digits1) })
      console.info('', { res: LetterCombinationsofaPhoneNumber(digits2) })
      console.info('', { res: LetterCombinationsofaPhoneNumber(digits3) })
       // const output = getQueryParamValue(str1, key1)
        //const expected = "7"
        //expect(output).toEqual(expected)
    })
  })
  