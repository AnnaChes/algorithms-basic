describe('Function2.test.js', () => {
  it('test Function2.test.js', () => {

   function Function2( number ){
     if (number % 1 < 1 && number % 1 !== 0){
       const result = "не целое"
      return result
     }
     else {
       const result = "целое"
       return result
     }
     
   }

    function Function3( number ){
      const SmallNumber = Math.floor(number)
      if ( SmallNumber != number){
        const result = "не целое"
        return result
      }
      else{
        const result = "целое"
        return result
      }
    }
  
     
    
  
    console.info('info', { res: Function2(3) })
    console.info('info', { res: Function3(11) })

  })
})