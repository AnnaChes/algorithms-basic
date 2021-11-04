describe('getSubSumsArr.test', () => {
  it('test getSubSumsArr.test', () => {

    const arrIn0 = [ 1, 2, 3, 4, 5 ]

    const getSubSumsArr = (arrIn) => {
      let arr = []
      arrIn.reduce((prev, item) => { 
        arr = [...arr, prev + item] 
        return prev + item},0) 
        return arr
      }
    
    console.info('info', { res: getSubSumsArr( arrIn0 ) })


  })
})