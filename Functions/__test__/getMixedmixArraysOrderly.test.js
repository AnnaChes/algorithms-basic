describe('getMixedmixArraysOrderly.test', () => {
  it('test getMixedmixArraysOrderly.test', () => {
    const inA = [1, 2, 3]
    const inB = ['a', 'b', 'c']
    //getMixedArraysOrderly(incomeA, incomeB) // [1, 'a', 2, 'b', 3, 'c'

    const getMixedmixArraysOrderly = (incomeA, incomeB) => {
      let res = []
      incomeA.forEach((item, index) => {
        res = [...res, item, incomeB[index]]
      })
      return res
    }

    const getMixedmixArraysOrderly = (incomeA, incomeB) => {
      let res = []
      incomeA.forEach((item, index) => {
        res = [...res, item, incomeB[index]]
      })
      return res
    }
    console.info('info', { res: getMixedmixArraysOrderly(inA, inB) })
  })
})
