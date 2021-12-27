describe('RegularExpressionMatching.test', () => {
  it('test RegularExpressionMatching.test', () => {
   
    const s1 = "aa"//false
    const p1 = "a"

    const s2 = "aa" //true
    const p2 = "a*"

    const s3 = "ab"//true
    const p3 = ".*"

    const RegularExpressionMatching = (s, p) => {
       if (p.includes('.') !== true && p.includes('*') !== true ){
           return s === p
       }
       else{
         if (s.length !== p.length){
           return false
         }
         else{
           const arrS = s.split('')
           const arrP = p.split('')

           if (arrS[0] !== '0' && arrP[0] === '*'){
             return false
           }
           else{
             let determinant = 0
            arrP.forEach((item, index) => {
                 if (item === '*' && arrS[index] === '0'){
                   determinant = determinant + 1
                 }else{
                    if (item === arrS[index]){
                    determinant = determinant + 1
                   }else{
                     if(item === '.'){
                      determinant = determinant + 1
                     }else{
                       if(item === '*'){
                         if (arrP[index-1] === arrS[index]){
                          determinant = determinant + 1
                         }else{
                           if(arrP[index-1] === '.'){
                            determinant = determinant + 1
                           }
                         }
                       }
                     }
                   }
                 } 
                })
            return determinant === arrS.length
         }
       }
     }
    }
    console.info('', { res: RegularExpressionMatching (s1, p1) })
    console.info('', { res: RegularExpressionMatching (s2, p2) })
    console.info('', { res: RegularExpressionMatching (s3, p3) })


  })
})
