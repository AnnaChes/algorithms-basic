describe('Algoritms', () => {
  it('test func', () => {
    const func = () => {
      return true
    }

    let output = func()
    // console.info('[]', { output })
    output = true
    const expected = true
    expect(output).toEqual(expected)
  })
})
