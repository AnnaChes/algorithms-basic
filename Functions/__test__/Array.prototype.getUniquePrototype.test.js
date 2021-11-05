describe('Array.prototype.getUniquePrototype.test', () => {
  it('test Array.prototype.getUniquePrototype.test', () => {
    const arr0 = [5, 5, 5, 1, 2, 2, 3] // [1, 2, 3, 5]

    const getUniquePrototype = arr => {
      let res = []
      arr.forEach(item => {
        if (res.includes(item) !== true) {
          res = [...res, item]
        }
      })
      return res.sort(function (a, b) {
        return a - b
      })
    }

    Array.prototype.getUniquePrototype = function () {
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

    const res11 = arr0.getUniquePrototype()

    console.info('info', { res: res11 })
  })
})
