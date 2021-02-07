describe('Algoritms', () => {
  it('test getReverseSt', () => {
    function getReverseStr(str) {
      let reverseArr = []
      const arr = str.split('')
      for (let p = arr.length - 1; p !== -1; p = p - 1) {
        reverseArr = [...reverseArr, arr[p]]
      }
      const res = reverseArr.join('')
      return res
    }

    const input = 'Mother cleaned a window frame'
    let output = getReverseStr(input)
    const expected = 'emarf wodniw a denaelc rehtoM'
    expect(output).toEqual(expected)
  })
})
