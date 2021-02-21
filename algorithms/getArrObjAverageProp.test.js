describe('Algoritms', () => {
  it('test getArrObjAverageProp2 with .reduce(...)', () => {
    function getArrObjAverageProp2(arrIn, prop) {
      const res = Math.round(
        arrIn
          .map(item => {
            return item[prop]
          })
          .reduce((prev, item) => {
            return prev + item
          }, 0) / arrIn.length
      )
      return res
    }

    const vasya = { name: 'Вася', age: 25 }
    const petya = { name: 'Петя', age: 30 }
    const masha = { name: 'Маша', age: 28 }

    const arrIn = [vasya, petya, masha]
    const prop = 'age'

    let output = getArrObjAverageProp2(arrIn, prop)
    // console.info('[]', { output })
    const expected = 28
    expect(output).toEqual(expected)
  })

  it('test getArrObjAverageProp with .forEach(...)', () => {
    function getArrObjAverageProp(arrIn, prop) {
      let sum = 0
      // ? Why not arrIn.reduce(...)?
      arrIn.forEach(item => {
        const prop1 = item[prop]
        sum = sum + prop1
      })
      const res = sum / arrIn.length
      const result1 = Math.round(res)
      return result1
    }

    const vasya = { name: 'Вася', age: 25 }
    const petya = { name: 'Петя', age: 30 }
    const masha = { name: 'Маша', age: 28 }

    const arrIn = [vasya, petya, masha]
    const prop = 'age'

    let output = getArrObjAverageProp(arrIn, prop)
    // console.info('[]', { output })
    const expected = 28
    expect(output).toEqual(expected)
  })
})
