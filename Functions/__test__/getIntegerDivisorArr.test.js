describe('getIntegerDivisorArr.test', () => {
  it('test  getIntegerDivisorArr.test', () => {
    //a = getIntegerDivisorArr(6)  [2, 3]
    // b = getIntegerDivisorArr(14)  [2, 7]
    //c = getIntegerDivisorArr(28)  [2, 4, 7, 14]

    const getIntegerDivisorArr = x => {
      let res = []
      for (let a = 2; a < x; a++) {
        if (x % a === 0) {
          res = [...res, a]
        }
      }
      return res
    }

    console.info('info', { res: getIntegerDivisorArr(6) })
    console.info('info', { res: getIntegerDivisorArr(14) })
    console.info('info', { res: getIntegerDivisorArr(28) })
  })
})
