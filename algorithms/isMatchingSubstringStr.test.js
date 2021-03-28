describe('Algoritms', () => {
  it('test isMatchingSubstringStr', () => {
    const isMatchingSubstringStr = (str, subStr) => {
      return str.includes(subStr)
    }

    const strs = [
      { str: 'шалаш', subStr: 'аш' },
      { str: 'шалаш', subStr: 'баш' },
    ]

    let output = strs.map(item => isMatchingSubstringStr(item.str, item.subStr))
    // console.info('[]', { output })
    const expected = [true, false]
    expect(output).toEqual(expected)
  })
})
