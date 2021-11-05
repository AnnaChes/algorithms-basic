describe('getNthFibonacciNumber.test', () => {
  it('test getNthFibonacciNumber.test', () => {
    //Number  0 1  2  3  4
    //Result  0 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

    // a = getNthFibonacciNumber(1) // 1
    // b = getNthFibonacciNumber(3) // 2
    // c = getNthFibonacciNumber(5) // 5
    // d = getNthFibonacciNumber(10) // 55

    const getNthFibonacciNumber0 = (
      n,
      res = 1,
      nM1 = 1,
      nM2 = 0,
      arr = [nM2, nM1]
    ) => {
      if (arr[n] === undefined) {
        const elem = arr[nM2] + arr[nM1]
        arr = [...arr, elem]
        nM1 = nM1 + 1
        nM2 = nM2 + 1
        res = arr[n]
        return getNthFibonacciNumber(n, res, nM1, nM2, arr)
      }

      return res
    }
    const getNthFibonacciNumber = (n, arr = [0, 1]) => {
      if (arr[n] === undefined) {
        const cur = arr.length
        const elem = arr[cur - 2] + arr[cur - 1]
        arr = [...arr, elem]

        return getNthFibonacciNumber(n, arr)
      }

      return arr[n]
    }

    console.info('info', { res: getNthFibonacciNumber(1) })
    console.info('info', { res: getNthFibonacciNumber(2) })
    console.info('info', { res: getNthFibonacciNumber(3) })
    console.info('info', { res: getNthFibonacciNumber(4) })
    console.info('info', { res: getNthFibonacciNumber(5) })
    console.info('info', { res: getNthFibonacciNumber(6) })
    console.info('info', { res: getNthFibonacciNumber(7) })
    console.info('info', { res: getNthFibonacciNumber(8) })
  })
})
