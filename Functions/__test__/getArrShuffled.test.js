describe('getArrShuffled.test', () => {
  it('test getArrShuffled.test', () => {

    const arr = [1, 2, 3]

    const getRandomBetween1 = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }  

    const getRandomBetween = (min, max) => {
      return (Math.random() * (max - min + 1) ) + min;
    }  

    const getArrShuffled1 = (arrIn) => {
    let arrRes = [] 
    for ( let i = 0; i !== arrIn.length; i++ ) {
       const res = getRandomBetween( 0 , arrIn.length )
       arrRes = [...arrRes,arrIn[res]]
   }
   return arrRes
  }

    
    const getArrShuffled = (arrIn) => {
      const arr = arrIn.map((itemA) => { 
        const random = getRandomBetween( 0 , arrIn.length )
        const item = itemA 
        const obj = { random ,item }
        return obj
      }).sort(function(a, b){return a.random - b.random})
      const res = arr.map((itemB) => { 
        return itemB.item
      })
      return res
    }
  
    console.info('info', { res: getArrShuffled1 (arr) })
    console.info('info', { res: getArrShuffled (arr) })


  })
})