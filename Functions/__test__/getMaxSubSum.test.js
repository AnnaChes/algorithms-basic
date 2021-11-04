describe('getMaxSubSum.test', () => {
  it('test getMaxSubSum.test', () => {
    //getMaxSubSum([-1, 2, 3, -9]) = 5
    //getMaxSubSum([2, -1, 2, 3, -9]) = 6
    //getMaxSubSum([-1, 2, 3, -9, 11]) = 11
    //getMaxSubSum([-2, -1, 1, 2]) = 3
    //getMaxSubSum([100, -9, 2, -3, 5]) = 100
    //getMaxSubSum([1, 2, 3]) = 6
    //getMaxSubSum([-1, -2, -3]) = -1

    const arr0 = [-1, 2, 3, -9]
    const arr2 = [2, -1, 2, 3, -9]
    const arr3 = [-1, 2, 3, -9, 11]
    const arr4 = [-2, -1, 1, 2]
    const arr5 = [100, -9, 2, -3, 5]
    const arr6 = [1, 2, 3]
    const arr7 = [-1, -2, -3]
    const j = -1 + -2
    const getMaxSubSum = arr => {
      const arrLength = arr.length + 1
      let maxNumber = Math.min(...arr)
      arr.forEach((itemA, index) => {
        for (let a = index; a !== arrLength; a++) {
          const Arr = arr.slice(index, a + 1)
          let sum = 0
          Arr.forEach(itemB => {
            sum = sum + itemB
          })
          if (sum > maxNumber) {
            maxNumber = sum
          }
        }
      })
      return maxNumber
    }
    console.info('info', { res: getMaxSubSum(arr0) })
    console.info('info', { res: getMaxSubSum(arr2) })
    console.info('info', { res: getMaxSubSum(arr3) })
    console.info('info', { res: getMaxSubSum(arr4) })
    console.info('info', { res: getMaxSubSum(arr5) })
    console.info('info', { res: getMaxSubSum(arr6) })
    console.info('info', { res: getMaxSubSum(arr7) })
    //console.info('info', { res: j })
  })
})
