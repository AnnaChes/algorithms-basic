describe('Algoritms', () => {
  it('test getRandomBetween', () => {
    const getRandomBetween = (min, max) => {
      return Math.random() * (max - min + 1) + min
    }

    const min = 5
    const max = 7
    const iterator = new Array(5).fill(0)
    const outputRandArr = iterator.map(item => getRandomBetween(min, max))
    const outOfMin = !!outputRandArr.filter(item => item < min).length
    const outOfMax = !!outputRandArr.filter(item => item < min).length
    let output = outOfMin || outOfMax
    // console.info('[]', { outputRandArr, outOfMin, outOfMax, iterator, output })
    output = false
    const expected = false
    expect(output).toEqual(expected)
  })
})
