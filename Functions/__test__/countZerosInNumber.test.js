describe('countZerosInNumber.test', () => {
  it('test countZerosInNumber.test', () => {

    const arr1 = [0, 1, 3, 2, 4, 6, 5, 8, 10, 9] //2
    const arr2 = [0, 1000] //4
    const arr3 = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] //12

    const countZerosInNumber = (arr) => {
      let sum = 0
      arr.forEach((item) => {
        if ( item === 0 ){
          sum = sum + 1 
        }
        if ( item % 10 === 0 && item < 100 && item !== 0 ){
          sum = sum + 1
        }
        if ( item % 10 === 0 && item >= 100 ){
          for ( let a = 1; a > 0 ; a++ ){
            const pow = Math.pow( 10, a )
            if ( pow === item ){
              sum = sum + a
              break
            }
          }
        }
      })
      return sum
    }
  
    console.info('info', { res: countZerosInNumber (arr1) })
    console.info('info', { res: countZerosInNumber (arr2) })
    console.info('info', { res: countZerosInNumber (arr3) })
  })
})