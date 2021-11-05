describe('getFirstNonRepeatingChar.test', () => {
  it('test getFirstNonRepeatingChar.test', () => {

    const str0 = 'reverse words in a sentence'
    // const char = getFirstNonRepeatingChar(str) 'v'

    const getFirstNonRepeatingChar = (str) => {
      let result 
      const arr = str.split("").reverse()
      arr.forEach((itemA) => { 
        let sum = 
        arr.forEach((itemB) => { 
          if ( itemA === itemB && arr.indexOf(itemA) !== arr.indexOf(itemB) ){ 
            sum = sum + 1 
            console.info('info', { res: sum })
          }  
          
        })
        const j = itemA
        if ( sum === 0 ){ 
          result =  itemA
        }
      })
      return result
    }

    const getFirstNonRepeatingChar2 = (str) => {
      const strSplit = str.split("")
      let res
      for ( iA = 0; ; iA++ ){
        let sumOfRepetitions = 0
        for ( iB = 0; ; iB++ ){
          if( strSplit[iA] === strSplit[iB] ){ 
              sumOfRepetitions = sumOfRepetitions + 1 
          }
          if ( sumOfRepetitions === 0 ){ 
           res = strSplit[iA]
            break;
           }
        }
      }
      return res
    }

     const k = str0.split("")

    
    console.info('info', { res: k })
    console.info('info', { res: getFirstNonRepeatingChar (str0) })
  })
})