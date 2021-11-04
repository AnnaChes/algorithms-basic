describe('getLargestSumAnyTwoElems.test', () => {
  it('test getLargestSumAnyTwoElems.test', () => {

    const arr0 = [1, 3, 2, 6, 5, 8, 10, 9, 4]// 19

    const getLargestSumAnyTwoElems = (arr) => {
      let res = 0
      arr.forEach((itemA) => {
        arr.forEach((itemB) => {
          if ( itemB !== itemA && (itemA + itemB) > res ){
            res =  itemA + itemB
          }
        })
      })
      return res
    }
  
    console.info('info', { res: getLargestSumAnyTwoElems (arr0) })


  })
})