describe('IntegertoRoman.test', () => {
  it('test IntegertoRoman.test 2022-01-27 Anna', () => {
    const IntegertoRoman = num => {
      let res = []

      const thousands = Math.floor(num / 1000)
      const fiveHundreds = Math.floor((num - thousands * 1000) / 500)
      const hundreds = Math.floor(
        (num - thousands * 1000 - fiveHundreds * 500) / 100
      )
      const fifties = Math.floor(
        (num - thousands * 1000 - fiveHundreds * 500 - hundreds * 100) / 50
      )
      const dozens = Math.floor(
        (num -
          thousands * 1000 -
          fiveHundreds * 500 -
          hundreds * 100 -
          fifties * 50) /
          10
      )
      const fives = Math.floor(
        (num -
          thousands * 1000 -
          fiveHundreds * 500 -
          hundreds * 100 -
          fifties * 50 -
          dozens * 10) /
          5
      )
      const units = Math.floor(
        num -
          thousands * 1000 -
          fiveHundreds * 500 -
          hundreds * 100 -
          fifties * 50 -
          dozens * 10 -
          fives * 5
      )

      let i = thousands
      while (i > 0) {
        res = [...res, 'M']
        i = i - 1
      }
      if (fiveHundreds * 500 + hundreds * 100 === 900) {
        res = [...res, 'CM']
      } else {
        i = fiveHundreds
        while (i > 0) {
          res = [...res, 'D']
          i = i - 1
        }

        if (hundreds * 100 === 400) {
          res = [...res, 'CD']
        } else {
          i = hundreds
          while (i > 0) {
            res = [...res, 'C']
            i = i - 1
          }
        }
      }

      if (fifties * 50 + dozens * 10 === 90) {
        res = [...res, 'XC']
      } else {
        i = fifties
        while (i > 0) {
          res = [...res, 'L']
          i = i - 1
        }
        if (dozens * 10 === 40) {
          res = [...res, 'XL']
        } else {
          i = dozens
          while (i > 0) {
            res = [...res, 'X']
            i = i - 1
          }
        }
      }

      if (units + fives * 5 === 9) {
        res = [...res, 'IX']
      } else {
        i = fives
        while (i > 0) {
          res = [...res, 'V']
          i = i - 1
        }
        if (units === 4) {
          res = [...res, 'IV']
        } else {
          i = units
          while (i > 0) {
            res = [...res, 'I']
            i = i - 1
          }
        }
      }
      return res.join('')
    }

    const inputArr = [3, 58, 1994]

    const outputed = inputArr.map(item => IntegertoRoman(item))

    const expected = ['III', 'LVIII', 'MCMXCIV']

    console.info('', { outputed, expected })
    expect(outputed).toEqual(expected)
  })
})
