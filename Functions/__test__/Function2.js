describe('Function2.test.js', () => {
  it('test Function2.test.js', () => {
    
    function Function2 ( number ){

      if (number%1<1){
       const result = " не целое"ж
      }
      else{
        const result ="целое"
      }
      return result
    }
  
    console.info('info', { res: Function2(5) })


  })
})