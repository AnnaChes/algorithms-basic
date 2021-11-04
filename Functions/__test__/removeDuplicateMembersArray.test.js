describe('removeDuplicateMembersArray.test.js', () => {
  it('test removeDuplicateMembersArray.test.js', () => {
    const arr0 = [1, 2, 1, 'min', 'max', 'max', 'min']

    const removeDuplicateMembersArray = arr => {
      let res = []
      arr.forEach(item => {
        if (res.includes(item) === false) {
          res = [...res, item]
        }
      })
      return res
    }
    a = removeDuplicateMembersArray(arr0) // [1, 2, 'min', 'max']

    console.info('info', { res: a })
  })
})
