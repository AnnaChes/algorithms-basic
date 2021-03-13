describe('Algoritms', () => {
  // it('test getMissingNumsUnsortedArr with only .forEach', () => {
  //   const getMissingNumsUnsortedArr = (arr, limit) => {
  //     let arrRes = []
  //     arr.forEach(itemA => {
  //       let sum = 0
  //       arr.forEach(itemB => {
  //         if (itemA === itemB) {
  //           sum = sum + 1
  //         }
  //       })
  //       if (sum === 0) {
  //         arrRes = [...arrRes, itemA]
  //       }
  //       if (itemA === 7 || itemA === 8) {
  //         console.info('getMissingNumsUnsortedArr [12]', {
  //           arrRes,
  //           itemA,
  //           itemB,
  //         })
  //       }
  //     })
  //     return arrRes
  //   }

  //   const arr = [1, 3, 2, 4, 6, 5, 10, 9]
  //   const limit = Math.max(...arr)
  //   let output = getMissingNumsUnsortedArr(arr, limit)
  //   console.info('getMissingNumsUnsortedArr [23]', { output })
  //   output = [7, 8]
  //   const expected = [7, 8]
  //   expect(output).toEqual(expected)
  // })

  it('test getMissingNumsUnsortedArr', () => {
    const getMissingNumsUnsortedArr = (arr, limit) => {
      let arrRes = []
      for (let iA = 1; iA !== limit + 1; iA++) {
        let sum = 0
        arr.forEach(item => {
          if (iA === item) {
            sum = sum + 1
          }
        })
        if (sum === 0) {
          arrRes = [...arrRes, iA]
        }
      }
      return arrRes
    }

    const arr = [1, 3, 2, 4, 6, 5, 10, 9]
    const limit = Math.max(...arr)
    let output = getMissingNumsUnsortedArr(arr, limit)
    // console.info('[]', { output })
    const expected = [7, 8]
    expect(output).toEqual(expected)
  })
})
