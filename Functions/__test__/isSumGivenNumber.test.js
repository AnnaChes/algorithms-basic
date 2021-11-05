describe('isSumGivenNumber.test', () => {
  it('test isSumGivenNumber.test', () => {

    const arr0 = [1, 3, 2, 4, 6, 5, 8, 10, 9]
    const num0 = 10
    const num1 = 52  

    const isSumGivenNumber = (arr, num) => {
      let res = false
      arr.forEach((itemA) => {
        arr.forEach((itemB) => {
          if ( (itemA + itemB) === num ){
            res = true
          }
        })
      })
      return res
    }
  
    console.info('info', { res: isSumGivenNumber (arr0, num1) })


  })
})