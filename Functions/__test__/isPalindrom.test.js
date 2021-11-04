describe('isPalindrom.test', () => {
  it('test isPalindrom.test', () => {



    
  
    
    function isPalindrom (candidate) {

      let result
      const arr = candidate.split("").join("")
      const reverse = candidate.split("").reverse().join("")
      if ( arr === reverse ){
        result = 'true'
      }
      else{
        result = 'false'
      }
      return result
    }
    
      const isPalindrom2 = ( (candidate) => { 
        return candidate === candidate.split("").reverse().join("")
      })
     
    
  
    console.info('info', { res: isPalindrom2('шалаш') })
    console.info('info', { res: isPalindrom2('гараж') })

  })
})