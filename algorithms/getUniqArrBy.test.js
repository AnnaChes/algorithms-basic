describe('Test for getUniqArrBy', () => {
  test('Test for getUniqArrBy', () => {
    const arr = [
      { class: 'second', fare: 'a', weight: 12 },
      { class: 'second', fare: 'b', weight: 10 },
      { class: 'first', fare: 'a', weight: 15 },
      { class: 'first', fare: 'a', weight: 17 },
      { class: 'second', fare: 'a', weight: 12 },
      { class: 'first', fare: 'c', weight: 30 },
      { class: 'second', fare: 'b', weight: 22 },
    ]

    const getUniqArrBy = (props = [], arrInp = [{}]) => {
      const obj = {}
      let result = []
      arrInp.forEach((item, index) => {
        let key = ''
        props.forEach(prop => (key += item[prop]))
        obj[key] = index
      })
      const keys = Object.keys(obj)
      keys.forEach(key => (result = [...result, arrInp[obj[key]]]))
      return result
    }

    const uniq = getUniqArrBy(['class', 'fare'], arr)

    const output = getUniqArrBy(['class', 'fare'], arr)
    const expected = [
      { class: 'second', fare: 'a', weight: 12 },
      { class: 'second', fare: 'b', weight: 22 },
      { class: 'first', fare: 'a', weight: 17 },
      { class: 'first', fare: 'c', weight: 30 },
    ]
    expect(output).toEqual(expected)
  })
})
