describe('Algoritms', () => {
  it('test getArrObjSortedByPropc', () => {
    function getArrObjSortedByProp(arrIn, prop) {
      const res = arrIn
        .sort(function (a, b) {
          return a[prop] - b[prop]
        })
        .map(item => {
          return item.name
        })
      return res
    }

    const vasya = { name: 'Маша', age: 25 }
    const petya = { name: 'Петя', age: 30 }
    const masha = { name: 'Вася', age: 28 }
    const arrIn = [vasya, petya, masha]
    const prop = 'age'

    let output = getArrObjSortedByProp(arrIn, prop)
    const expected = ['Маша', 'Вася', 'Петя']
    expect(output).toEqual(expected)
  })

  it('test getArrObjSortedByProp with index', () => {
    const getArrObjSortedByProp = (arrIn, prop) => {
      let arrProp1 = []
      let arrProp2 = []
      let res = []
      arrIn.forEach(item => {
        const itemProp = item[prop]
        arrProp1 = [...arrProp1, itemProp]
        arrProp2 = [...arrProp2, itemProp]
      })

      const arrProp1Sort = arrProp1.sort(function (a, b) {
        return a - b
      })

      arrProp1Sort.forEach(item => {
        const index = arrProp2.indexOf(item)
        const arrInIndexName = arrIn[index].name
        res = [...res, arrInIndexName]
      })
      return res
    }

    const vasya = { name: 'Маша', age: 25 }
    const petya = { name: 'Петя', age: 30 }
    const masha = { name: 'Вася', age: 28 }
    const arrIn = [vasya, petya, masha]
    const prop = 'age'

    let output = getArrObjSortedByProp(arrIn, prop)
    const expected = ['Маша', 'Вася', 'Петя']
    expect(output).toEqual(expected)
  })
})
