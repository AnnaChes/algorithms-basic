describe('getUniqArrBy.test', () => {
  it('test getUniqArrBy.test', () => {



    const arr = [
      { class: 'second', fare: 'a', weight: 4 },
      { class: 'second', fare: 'b', weight: 2 },
      { class: 'first', fare: 'a', weight: 1 },
      { class: 'first', fare: 'a', weight: 10 },
      { class: 'second', fare: 'a', weight: 8 },
      { class: 'first', fare: 'c', weight: 5 },
      { class: 'first', fare: 'c', weight: 6 },
      { class: 'first', fare: 'a', weight: 10 },
    ]
  
    function getUniqArrBy(paramert, arr) {
      var result = []
  
      const objKey = arr.map(item0 => {
        var plus = ''
        paramert.forEach(item1 => {
          plus = plus + item0[item1]
        })
        return plus
      })
  
      var not_unique = []
  
      objKey.forEach((item1, index0) => {
        objKey.forEach((item2, index1) => {
          if (item1 === item2 && index0 !== index1) {
            not_unique.push(index1)
          }
        })
      })
  
      objKey.forEach((item3, index2) => {
        var opredelitor = 0
        not_unique.forEach(item4 => {
          if (item3 === objKey[item4]) {
            opredelitor = opredelitor + 1
          }
        })
        if (opredelitor === 0) {
          result.push(arr[index2])
        }
      })
  
      not_unique.forEach(item5 => {
        var opredelitor1 = 0
        not_unique.forEach(item6 => {
          if (
            objKey[item5] === objKey[item6] &&
            opredelitor1 !== 0 &&
            item5 !== item6
          ) {
            not_unique.splice(item5, 1)
  
            not_unique.splice(item6, 1)
          }
  
          if (
            objKey[item5] === objKey[item6] &&
            opredelitor1 === 0 &&
            item5 !== item6
          ) {
            result.push(arr[item5])
            opredelitor1 = opredelitor1 + 1
            not_unique.splice(item5, 1)
            not_unique.splice(item6, 1)
          }
        })
      })
  
      return result
    }
  
    console.info('info', { res: getUniqArrBy(['class', 'fare'], arr) })


  })
})