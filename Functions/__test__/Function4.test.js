const { number } = require("prop-types")

describe('Function4.test.js', () => {
  it('test Function4.test.js', () => {

   function Function4( number1, number2 ){
     
    let divisor
     if (number1 > number2){
      for (let v = 0; v < number2 || v === number2; v++){
    
        if ( number1 % v === 0 && number2 % v === 0){
         divisor = v
      }
      }
     }
  
     else{
      for (let v = 0; v < number1 || v === number1 ; v++){
        if ( number1 % v === 0 && number2 % v === 0){
         divisor = v
      }
      }
     }
     return divisor
    } 

    
     
    
  
    console.info('info', { res: Function4(12, 6) })
    console.info('info', { res: Function4(12, 256) })

  })
})