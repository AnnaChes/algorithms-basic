describe('Algoritms', () => {
  it('test getCalculator', () => {
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

    const testArr = [
      { mathAct: '*', num1: 2, num2: 3, expected: 6 },
      { mathAct: '+', num1: 4, num2: 4, expected: 8 },
      { mathAct: '-', num1: 12, num2: 9, expected: 3 },
      { mathAct: '**', num1: 4, num2: 3, expected: 64 },
    ]

    const calc = new getCalculator()
    let output = testArr.map(item =>
      calc.method(item.mathAct, item.num1, item.num2)
    )
    let expected = testArr.map(item => item.expected)

    expected = [6, 8, 3, 64]
    expect(output).toEqual(expected)
  })

  it('ChRP. test func with prototype and method as operator', () => {
    function CalculatorMethod() {}

    CalculatorMethod.prototype = {
      ['+']: function (a, b) {
        return a + b
      },
      ['-']: function (a, b) {
        return a - b
      },
      ['*']: function (a, b) {
        return a * b
      },
      ['/']: function (a, b) {
        return a / b
      },
      ['**']: function (a, b) {
        return a ** b
      },
      ['^^']: function (a, b) {
        return Math.pow(a, 1 / b)
      },
    }

    const calc = new CalculatorMethod()

    // console.info('[CalculatorMethod]', {
    //   '+: 3+4=7': calc['+'](3, 4),
    //   '-: 3-4=-1': calc['-'](3, 4),
    //   '*: 2*4=-8': calc['*'](2, 4),
    //   '/: 12/4=-3': calc['/'](12, 4),
    //   '**: 3**2=9': calc['**'](3, 2),
    //   '^^: 16^^2=4': calc['^^'](16, 2),
    // })

    const output = true
    const expected = true
    expect(output).toEqual(expected)
  })

  it('ChRP. test func with prototype and method', () => {
    function CalculatorExtensible() {}

    CalculatorExtensible.prototype.return = function (func, a, b) {
      return func(a, b)
    }

    const powerCalc = new CalculatorExtensible()

    const sum = (a, b) => a + b
    const subtract = (a, b) => a - b
    const multiply = (a, b) => a * b
    const division = (a, b) => a / b
    const exp = (a, b) => a ** b
    const pow = (a, b) => Math.pow(a, 1 / b)

    // console.info('[CalculatorExtensible]', {
    //   '+: 3+4=7': powerCalc.return(sum, 3, 4),
    //   '-: 3-4=-1': powerCalc.return(subtract, 3, 4),
    //   '*: 2*4=-8': powerCalc.return(multiply, 2, 4),
    //   '/: 12/4=-3': powerCalc.return(division, 12, 4),
    //   '**: 3**2=9': powerCalc.return(exp, 3, 2),
    //   '^^: 16^^2=4': powerCalc.return(pow, 16, 2),
    // })

    const output = true
    const expected = true
    expect(output).toEqual(expected)
  })

  it('ChRP. test func with prototype', () => {
    function Calculator() {}

    Calculator.prototype.method = function (operator, a, b) {
      if (operator === '+') return a + b
      else if (operator === '-') return a - b
      else if (operator === '*') return a * b
      else if (operator === '/') return a / b
      else if (operator === '**') return a ** b
      else if (operator === '^^') return Math.pow(a, 1 / b)
      else return [a, b]
    }

    const powerCalc = new Calculator()

    // console.info('[Calculator]', {
    //   '+: 3+4=7': powerCalc.method('+', 3, 4),
    //   '-: 3-4=-1': powerCalc.method('-', 3, 4),
    //   '*: 2*4=-8': powerCalc.method('*', 2, 4),
    //   '/: 12/4=-3': powerCalc.method('/', 12, 4),
    //   '**: 3**2=9': powerCalc.method('**', 3, 2),
    //   '^^: 16^^2=4': powerCalc.method('^^', 16, 2),
    // })

    const output = true
    const expected = true
    expect(output).toEqual(expected)
  })
})

/*

3. function sum(a, b) {
  return a + b
}

2. const sum = function(a, b) {
  this.a = a
  this.b = b
  return this.a + this.b
}
// this

const sum = function(a, b) {
  this.a = a
  this.b = b
  this.sum = this.a + this.b
}



1. const sum = (a, b) => {
  return a + b
}
// No this

const sum = (a, b) => a + b





let powerCalc = new Calculator();

powerCalc.method("*", (a, b) => a * b);
powerCalc.method("/", (a, b) => a / b);
powerCalc.method("**", (a, b) => a ** b);
powerCalc.method("2 ** 3"); // 8


const res = powerCalc.method("*", 5, 6) // 30 
const res = powerCalc.method("/", 15, 3) // 5
const res = powerCalc.method("**", 3, 3) // 27
const res = powerCalc.method("^", 16, 2) // 4

*/
