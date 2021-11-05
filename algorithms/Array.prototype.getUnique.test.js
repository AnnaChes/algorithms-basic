describe('Algoritms', () => {
  it('test func', () => {
    Array.prototype.getUnique = function () {
      let res = []
      this.forEach(item => {
        if (res.includes(item) !== true) {
          res = [...res, item]
        }
      })
      return res.sort(function (a, b) {
        return a - b
      })
    }

    const arr0 = [1, 2, 2, 2, 4, 8, 99, 8]

    let output = arr0.getUnique()
    const expected = [1, 2, 4, 8, 99]
    expect(output).toEqual(expected)
  })
})
