describe('Algoritms', () => {
  it('test getArrShuffled v2', () => {
    const getRandomBetween = (min, max) => {
      return Math.random() * (max - min + 1) + min
    }
    const getArrShuffled = arrIn => {
      const arr = arrIn
        .map(itemA => {
          const random = getRandomBetween(0, arrIn.length)
          const item = itemA
          const obj = { random, item }
          return obj
        })
        .sort(function (a, b) {
          return a.random - b.random
        })
      const res = arr.map(itemB => {
        return itemB.item
      })
      return res
    }

    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let output = getArrShuffled(arr)
    console.info('[2]', { output })
    output = true
    const expected = true
    expect(output).toEqual(expected)
  })

  it('test getArrShuffled', () => {
    const getRandomBetween = (min, max) => {
      return Math.random() * (max - min + 1) + min
    }
    const getArrShuffled = arrIn => {
      let arr = []
      let res = []
      arrIn.forEach(itemA => {
        const random = getRandomBetween(0, arrIn.length)
        const item = itemA
        const obj = { random, item }
        arr = [...arr, obj]
      })
      const arrSort = arr.sort(function (a, b) {
        return a.random - b.random
      })
      arrSort.forEach(itemB => {
        res = [...res, itemB.item]
      })
      return res
    }

    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let output = getArrShuffled(arr)
    console.info('[1]', { output })
    output = true
    const expected = true
    expect(output).toEqual(expected)
  })
})
