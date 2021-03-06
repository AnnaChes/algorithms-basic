describe('Algoritms', () => {
  it('test isPalindrom simplified', () => {
    const isPalindrom2 = candidate => {
      return candidate === candidate.split('').reverse().join('')
    }

    const candidates = ['шалаш', 'гараж']
    let output = candidates.map(candidate => isPalindrom2(candidate))
    // console.info('[]', { output })
    const expected = [true, false]
    expect(output).toEqual(expected)
  })

  it('test isPalindrom', () => {
    function isPalindrom(candidate) {
      let result
      const arr = candidate.split('').join('')
      const reverse = candidate.split('').reverse().join('')
      // ? Why not shoter?
      if (arr === reverse) {
        result = 'true'
      } else {
        result = 'false'
      }
      return result
    }

    const candidates = ['шалаш', 'гараж']
    let output = candidates.map(candidate => isPalindrom(candidate))
    // console.info('[]', { output })
    const expected = ['true', 'false']
    expect(output).toEqual(expected)
  })
})
