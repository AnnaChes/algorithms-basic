describe('RomantoInteger.test', () => {
  it('test RomantoInteger.test', () => {
   
    const s1 = "III" //3 III = 3
    const s2 = "LVIII" //58 L = 50, V= 5, III = 3
    const s3 = "MCMXCIV" //1994 M = 1000, CM = 900, XC = 90 and IV = 4

    const RomantoInteger = (s) => {
      const arr = s.split('')
      let res = 0 
      arr.forEach((item, index) => {
          if (item === 'M' && (arr[index - 1] !== 'C' && arr[index - 1] !== 'D')){
            res = res + 1000
          }else{
            if (item === 'C' && (arr[index + 1] !== 'M' && arr[index + 1] !== 'D' && arr[index - 1] !== 'X')){
              res = res + 100
            }else{
               if (item === 'C' && arr[index + 1] === 'M'){
                 res = res + 900
               }else{
                 if(item === 'C' && arr[index + 1] === 'D'){
                   res = res + 400
                 }else{
                  if (item === 'D' && arr[index - 1] !== 'C'){
                    res = res + 500
                  }else{
                    if (item === 'L' && arr[index - 1] !== 'X'){
                      res = res + 50
                    }else{
                      if(item === 'L' && arr[index - 1] === 'X'){
                        res = res + 40
                      }else{
                        if ( item === 'X' && (arr[index + 1] !== 'L' && arr[index + 1] !== 'C' && arr[index - 1] !== 'I')){
                          res = res + 10
                        }else {
                          if (item === 'X' && arr[index + 1] === 'C'){
                            res = res + 90
                          }else{
                            if(item === 'V' && arr[index - 1] !== 'I'){
                              res = res + 5
                            }else{
                              if(item === 'V' && arr[index - 1] === 'I'){
                                res = res + 4
                              }else{
                                if(item === 'I' && (arr[index + 1] !== 'X' && arr[index + 1] !== 'V')){
                                  res = res + 1
                                }else{
                                  if(item === 'I' && arr[index + 1] === 'X'){
                                    res = res + 9
                                  }
                                }
                              }
                            }
                          }
                        }
                          }
                        }
                      }
                    }
                  }
                 }
               }
      })
      return res 
    }
  

    console.info('', { res: RomantoInteger(s1) })
    console.info('', { res: RomantoInteger(s2) })
    console.info('', { res: RomantoInteger(s3) })




  })
})
