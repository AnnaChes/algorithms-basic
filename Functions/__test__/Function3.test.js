describe('Function3.test.js', () => {
  it('test Function3.test.js', () => {

   function Function3( number ){
     let NumOfDivisors = 0
     for (let counter = 1; counter < number + 1; counter ++){

        if ( number % counter === 0 ){
        NumOfDivisors = NumOfDivisors + 1
        }  

     }
     if ( NumOfDivisors === 2){
       const result = "простое число"
       return result
     }
     else {
       const result = "составное число"
       return result
     }
  }

    function Function4( number ){
      let NumOfDivisors = 0
     for (let counter = 1; counter < 12; counter ++){

        if ( number % counter === 0 && counter !== number){
        NumOfDivisors = NumOfDivisors + 1
        }  

     }
     if ( NumOfDivisors === 1){
       const result = "простое число"
       return result
     }
     else {
       const result = "составное число"
       return result
     }
    }
  
     
    
  
    console.info('info', { res: Function3(12) })
    console.info('info', { res: Function4(12) })

  })
})