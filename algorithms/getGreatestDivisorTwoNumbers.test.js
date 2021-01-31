describe('Test for getGreatestDivisorTwoNumbers', () => {
  it('test getGreatestDivisorTwoNumbers', () => {
    function getGreatestDivisorTwoNumbers(number1, number2) {
      let divisor
      if (number1 > number2) {
        for (let v = 0; v < number2 || v === number2; v++) {
          if (number1 % v === 0 && number2 % v === 0) {
            divisor = v
          }
        }
      } else {
        for (let v = 0; v < number1 || v === number1; v++) {
          if (number1 % v === 0 && number2 % v === 0) {
            divisor = v
          }
        }
      }
      return divisor
    }

    function getGreatestDivisorTwoNumbers2(number1, number2) {
      let divisor

      function iter(numberA, numberB) {
        let divisorAB = 1
        for (let v = 0; v <= numberB; v++) {
          if (numberA % v === 0 && numberB % v === 0) {
            divisorAB = v
          }
        }
        return divisorAB
      }

      divisor =
        number1 > number2 ? iter(number1, number2) : iter(number2, number1)
      return divisor
    }

    const number1 = 54 // 27 // 8
    const number2 = 45 // 18 // 4

    const output = getGreatestDivisorTwoNumbers2(number1, number2)
    const expected = 9
    expect(output).toEqual(expected)
  })
})
