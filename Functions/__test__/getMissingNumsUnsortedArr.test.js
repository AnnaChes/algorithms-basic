describe(' getMissingNumsUnsortedArr.test', () => {
  it('test getMissingNumsUnsortedArr.test', () => {

    const arr0 = [1, 3, 2, 4, 6, 5, 8, 10, 9]
    const limit0 = 10
    const  getMissingNumsUnsortedArr = (arr, limit) => {
      let arrRes = []
      for (let iA = 1; iA !== limit+1 ;iA++){
        let sum = 0
        arr.forEach((item) => { 
          if ( iA === item ){
            sum = sum + 1
          }
      })
        if ( sum === 0 ){
          arrRes = [...arrRes,iA]
        }
      }
      return arrRes 
    }
  

    const  getMissingNumsUnsortedArr1 = (arr) => {
      let arrRes = []
      arr.forEach((itemA) => { 
        let sum = 0
        arr.forEach((itemB) => { 
          if ( itemA === itemB ){
            sum = sum + 1
          }
      })
        if ( sum === 0 ){
          arrRes = [...arrRes,iA]
        }
      }
      return arrRes 
    } 
    console.info('info', { res: getMissingNumsUnsortedArr1 (arr0) })


  })
})