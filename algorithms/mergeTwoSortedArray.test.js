describe('Algoritms', () => {
  it('-- mergeTwoSortedArray', () => {
    function mergeTwoSortedArray(arrA, arrB) {
      let res = []
      const arrAB = [...arrA, ...arrB]
      res = arrAB.sort(function (a, b) {
        return a - b
      })
      return res
    }

    const arrA = [2, 3, 4, 11, 17]
    const arrB = [1, 4, 4, 15, 17, 19]
    const output = mergeTwoSortedArray(arrA, arrB)
    const expected = [1, 2, 3, 4, 4, 4, 11, 15, 17, 17, 19]
    expect(output).toEqual(expected)
  })
})
