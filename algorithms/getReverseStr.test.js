describe('Algoritms', () => {
  it('test getReverseStr', () => {
    function getReverseStr(str) {
      let ReverseArr = []
      const arr = str.split('')
      const reverse = arr.reverse()
      const res = reverse.join('')
      return res
    }

    const str = 'string'
    let output = getReverseStr(str)
    const expected = 'gnirts'
    expect(output).toEqual(expected)
  })
})
