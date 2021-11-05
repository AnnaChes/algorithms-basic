describe('getArrObjAverageProp.test', () => {
  it('test getArrObjAverageProp.test', () => {



    
    const vasya = { name: 'Вася', age: 25 }
    const petya = { name: 'Петя', age: 30 }
    const masha = { name: 'Маша', age: 28 }
    
    const arrIn0 = [vasya, petya, masha]
    const prop0 = 'age'
      // (25 + 30 + 29) / 3 = 28

    
    functions getArrObjAverageProp(arrIn, prop ) {
      let sum = 0
       arrIns
      const res = sum / arrIn.length
      const result1 = Math.round(res)
      console.info('info', { res:  sum,res, result1 })
      return result1
    
    }
    
    function getArrObjAverageProp2(arrIn, prop ) {
      return res = Math.round( arrIn.map((item) => {return item[prop]}).reduce((prev, item) => {return prev + item},0) / arrIn.length )
    }
     
  
  
    console.info('info', { res: getArrObjAverageProp2(arrIn0, prop0 ) })


  })
})