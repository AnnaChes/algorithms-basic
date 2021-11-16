describe('addTwoNumbers.test.js', () => {
  it('test addTwoNumbers.test.js', () => {
    /*Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 342 + 465 = 807.
    
    Input: l1 = [0], l2 = [0]
    Output: [0]
    
    Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    Output: [8,9,9,9,0,0,0,1]
    
   Math.trunc(x)
    const addTwoNumbers = (l1, l2) => {
      const arr = [l1, l2]
      let num1 = 0
      let num2 = 0
      arr.forEach(item, index => {
        for (a = item.length - 1; a > -1; a = a - 1){
          if (index === 0){
            num1 = num1 + (item[a] * Math.pow(10, a))
          } 
          else {
            num2 = num2 + (item[a] * Math.pow(10, a))
          }
        }
      })
      const numRes = num1 + num2
     
    }
  */

    const addTwoNumbers = (l1, l2) => {
      let arrString1 = []
      let arrString2 = []
      let res = []
      l1.forEach(item => {
        arrString1 = [String(item), ...arrString1]
      })
      l2.forEach(item => {
        arrString2 = [String(item), ...arrString2]
      })
      const sum = Number(arrString1.join('')) + Number(arrString2.join(''))
      let interRes = String(sum).split('')
      interRes.forEach(item => {
        res = [Number(item), ...res]
      })
      return res
    }
    console.info('info', { res: addTwoNumbers([2, 4, 3], [5, 6, 4]) })
  })
})
