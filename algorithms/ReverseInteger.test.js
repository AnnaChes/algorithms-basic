describe('ReverseInteger.test', () => {
  it('test ReverseInteger.test', () => {
    const x1 = 123//321
    const x2 = -123//-321
    const x3 = 120//21

   const ReverseInteger = (x) => {
     let res
     const arr = String(x).split('')
     if (arr[0] !== '-'){
       if (arr[arr.length - 1] === '0'){
         res = arr.splice(0, arr.length - 1).reverse().join('')
       }
       else{
        res = arr.reverse().join('')
       }
     }
     else{
      res = arr.splice(1).reverse()
      res = ['-',...res]
      res = res.join('')
     }     
     return Number(res)                                                                                                                                                                                                                        
   }

    console.info('', { res: ReverseInteger(x1) })
    console.info('', { res: ReverseInteger(x2) })
    console.info('', { res: ReverseInteger(x3) })

  })
})
