describe('getCalculatorExtensible.test', () => {
  it('test getCalculatorExtensible.test', () => {
    //Array.prototype.

    /* let calc = new Calculator()
    calc.calculate("3 + 7"); // 10
      Method to add methods:
  const powerCalc = new Calculator();
  let res = powerCalc.method("*", 5, 6) // 30
  res = powerCalc.method("/", 15, 3) // 5
  res = powerCalc.method("**", 3, 3) // 27
  res = powerCalc.method("^", 16, 2) // 4
  */

    function getCalculator() {
      this.method = function (mathAct, num1, num2) {
        if (mathAct === '*') {
          return num1 * num2
        } else if (mathAct === '/') {
          return num1 / num2
        } else if (mathAct === '+') {
          return num1 + num2
        } else if (mathAct === '-') {
          return num1 - num2
        } else if (mathAct === '**') {
          return num1 ** num2
        }
      }
    }

    const powerCalc = new getCalculator()
    let res1 = powerCalc.method('*', 5, 6) // 30
    let res2 = powerCalc.method('/', 15, 3) // 5
    let res3 = powerCalc.method('**', 3, 3) // 27
    let res4 = powerCalc.method('+', 5, 6) // 11
    let res5 = powerCalc.method('-', 9, 6) // 3

    console.info('info', { res: res1 })
    console.info('info', { res: res2 })
    console.info('info', { res: res3 })
    console.info('info', { res: res4 })
    console.info('info', { res: res5 })
  })
})
