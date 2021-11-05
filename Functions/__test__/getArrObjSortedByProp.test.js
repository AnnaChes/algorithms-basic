describe('getArrObjSortedByProp.test', () => {
  it('test getArrObjSortedByProp.test', () => {

     const vasya = { name: 'Вася', age: 25 }
     const petya = { name: 'Петя', age: 30 }
     const masha = { name: 'Маша', age: 28 }

      const arr = [vasya, petya, masha]
      const prop0 = 'age'
    // [vasya, masha, petya] > [‘Вася’, ‘Маша’, ‘Петя’]

      function sortByAge(arrIn, prop){
        let arrProp1 =[]
        let arrProp2 =[]
        let res =[]
        arrIn.forEach((item) => {
          const itemProp = item.[prop]
          arrProp1 = [...arrProp1,itemProp]
          arrProp2 = [...arrProp2,itemProp] 
        })
       
        const arrProp1Sort = arrProp1.sort(function(a, b){return a - b})
        
        arrProp1Sort.forEach((item) => {
          const index = arrProp2.indexOf(item)
          const arrInIndexName =arrIn[index].name
          res = [...res,arrInIndexName]
        })
        return res
      } 
      console.info('info', { res: sortByAge(arr, prop0) })

      function sortByAge1(arrIn, prop){
        const res = arrIn.sort(function(a, b){return a[prop] - b[prop]}).map((item) => { return item.name})
        return res
      }
      console.info('info', { res: sortByAge1(arr, prop0) })

  })
})
