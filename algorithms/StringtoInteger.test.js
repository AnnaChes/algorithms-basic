describe('StringtoInteger.test', () => {
  it('test StringtoInteger.test', () => {
   
    const s1 = "42"//42
    const s2 = "   -42"//-42
    const s3 = "4193 with words"//4193

    const StringtoInteger = (str) =>{
      let res = []
      const arr = str.split('')
      arr.forEach(item => {
        if (item !== ' ' && isNaN(Number(item)) !== true || item === '-' || item === '+'){
            res = [...res, item]
        }
      })
      return Number(res.join(''))

    }
  

    console.info('', { res: StringtoInteger(s1) })
    console.info('', { res: StringtoInteger(s2) })
    console.info('', { res: StringtoInteger(s3) })



  })
})
