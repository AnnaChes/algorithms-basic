describe('Test for isPrime', () => {
  it('test isPrime', () => {
    function isPrime3(number) {
      let NumOfDivisors = 0
      for (let counter = 1; counter < number + 1; counter++) {
        if (number % counter === 0) {
          NumOfDivisors = NumOfDivisors + 1
        }
      }
      if (NumOfDivisors === 2) {
        const result = 'prime number'
        return result
      } else {
        const result = 'not prime number'
        return result
      }
    }

    function isPrime4(number) {
      let NumOfDivisors = 0
      for (let counter = 1; counter < 12; counter++) {
        if (number % counter === 0 && counter !== number) {
          NumOfDivisors = NumOfDivisors + 1
        }
      }
      if (NumOfDivisors === 1) {
        const result = 'prime number'
        return result
      } else {
        const result = 'not prime number'
        return result
      }
    }

    const sample = [1, 3, 0, 2, 4, 100, 6, 5, 8, 10, 9]
    const expected = [
      'not prime number',
      'prime number',
      'not prime number',
      'prime number',
      'not prime number',
      'not prime number',
      'not prime number',
      'prime number',
      'not prime number',
      'not prime number',
      'not prime number',
    ]

    let output = sample.map(item => isPrime3(item))
    expect(output).toEqual(expected)

    output = sample.map(item => isPrime4(item))
    expect(output).toEqual(expected)
  })
})
