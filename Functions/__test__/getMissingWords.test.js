describe('getMissingWords.test', () => {
  it('test getMissingWords.test', () => {

    const s =  'I am using HackerRank to improve programming'
    const t = 'am HackerRank to improve'
    
    const  getMissingWords = ( str1,str2 ) => {
      const strArr1 = str1.split(" ")
      const strArr2 = str2.split(" ")
      let arrRes = []
      strArr1.forEach((itemA) => { 
        let sum = 0
        strArr2.forEach((itemB) => { 
          if ( itemA === itemB ){
            sum = sum + 1
          }
        })
        if ( sum === 0 ){
          arrRes = [...arrRes,itemA]
        }
     })
      return arrRes
    }
  
    console.info('info', { res: getMissingWords ( s,t ) })


  })
})