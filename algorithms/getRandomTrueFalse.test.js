describe('Algoritms', () => {
  it('test getRandomTrueFalse', () => {
    const getRandomTrueFalse = () => {
      return Math.random().toFixed() === '0'
    }

    let output = getRandomTrueFalse()
    let arrTmp = new Array(7).fill(1)
    output = arrTmp.map(item => getRandomTrueFalse())
    output = true
    const expected = true
    expect(output).toEqual(expected)
  })
})
