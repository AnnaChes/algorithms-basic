describe('getRotatedArray.test', () => {
  it('test getRotatedArray.test', () => {
    const arr0 = [3, 8, 9, 7, 6]
    const times0 = 8 // [9,7,6,3,8]

    const getRotatedArray = (arr, times) => {
      let times2 = times
      if (times > arr.length) {
        if (times % arr.length === 0) {
          times2 = arr.length
        } else {
          times2 = times % arr.length
        }
      }

      const arr1 = arr.slice(0, times2)
      const arr2 = arr.slice(times2)
      const arrRes = [...arr2, ...arr1]
      return arrRes
    }
    console.info('info', { res: getRotatedArray(arr0, times0) })
    console.info('info', { res: arr0 })
  })
})
