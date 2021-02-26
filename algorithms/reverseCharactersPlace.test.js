describe('Algoritms', () => {
  it('test reverseCharactersPlace', () => {
    const reverseCharactersPlace = str => {
      return str
        .split(' ')
        .map(item => {
          const res = item.split('').reverse().join('')
          return res
        })
        .join(' ')
    }

    const str = 'I am the good boy'
    let output = reverseCharactersPlace(str)
    // console.info('[]', { output })
    const expected = 'I ma eht doog yob'
    expect(output).toEqual(expected)
  })
})
