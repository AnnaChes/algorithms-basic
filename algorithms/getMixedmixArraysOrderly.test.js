describe('Algoritms', () => {
  it('test getMixedmixArraysOrderly', () => {
    const getMixedmixArraysOrderly = (inA, inB) => {
      let res = []
      inA.forEach((item, index) => {
        res = [...res, item, inB[index]]
      })
      return res
    }

    const inA = [1, 2, 3]
    const inB = ['a', 'b', 'c']

    let output = getMixedmixArraysOrderly(inA, inB)
    // console.info('[]', { output })
    const expected = [1, 'a', 2, 'b', 3, 'c']
    expect(output).toEqual(expected)
  })
})
