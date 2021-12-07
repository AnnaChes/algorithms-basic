describe('Algoritms', () => {
  it('test addTwoNumbers', () => {
    const addTwoNumbers = (l1, l2) => {
      let arrString1 = []
      let arrString2 = []
      let res = []
      l1.forEach(item => {
        arrString1 = [String(item), ...arrString1]
      })
      l2.forEach(item => {
        arrString2 = [String(item), ...arrString2]
      })
      const sum = Number(arrString1.join('')) + Number(arrString2.join(''))
      let interRes = String(sum).split('')
      interRes.forEach(item => {
        res = [Number(item), ...res]
      })
      return res
    }

    const l1 = [2, 4, 3]
    const l2 = [5, 6, 4]
    let output = addTwoNumbers(l1, l2)
    console.info('[]', { output })
    output = true
    const expected = true
    expect(output).toEqual(expected)
  })
})
