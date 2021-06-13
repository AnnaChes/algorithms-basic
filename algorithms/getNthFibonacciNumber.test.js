describe('Algoritms', () => {
  it('getNthFibonacciNumber func', () => {
    const getNthFibonacciNumber = (n, arr = [0, 1]) => {
      if (arr[n] === undefined) {
        const cur = arr.length
        const elem = arr[cur - 2] + arr[cur - 1]
        arr = [...arr, elem]

        return getNthFibonacciNumber(n, arr)
      }

      return arr[n]
    }

    let output = new Array(11)
      .fill(true)
      .map((item, index) => index)
      .map(item => getNthFibonacciNumber(item))

    // console.info('[]', { output })
    const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(output).toEqual(expected)
  })

  it('getNthFibonacciNumber2 func', () => {
    const getNthFibonacciNumber = (n, res = 1, nM1 = 1, nM2 = 0, arr = []) => {
      if (arr.length < n) {
        const resNext = nM1 + nM2
        const nM1Next = resNext
        const nM2Next = nM1
        const arrNext = [...arr, resNext]

        return getNthFibonacciNumber(n, resNext, nM1Next, nM2Next, arrNext)
      }

      return res
    }

    let output = new Array(10)
      .fill(true)
      .map((item, index) => index)
      .map(item => getNthFibonacciNumber(item))
    // console.info('[]', { output })
    const expected = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(output).toEqual(expected)
  })
})
