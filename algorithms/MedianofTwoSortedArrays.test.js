describe('MedianofTwoSortedArrays.test', () => {
  it('test MedianofTwoSortedArrays.test solution from ChAR', () => {
    const nums10 = [1, 3]
    const nums20 = [2] // 2.00000

    const nums11 = [1, 2]
    const nums21 = [3, 4] //2.50000

    const nums12 = [0, 0]
    const nums22 = [0, 0] //0.00000

    const nums13 = []
    const nums23 = [1] //1.00000

    const nums14 = [2]
    const nums24 = [] //2.00000

    const MedianofTwoSortedArrays = (nums1, nums2) => {
      let res
      const arr = [...nums1, ...nums2]
      const arrSort = arr.sort(function (a, b) {
        return a - b
      })
      if (arrSort.length % 2 !== 0) {
        res = arrSort[Math.ceil(arrSort.length / 2) - 1]
      } else {
        res =
          (arrSort[arrSort.length / 2 - 1] + arrSort[arrSort.length / 2]) / 2
      }

      return res.toFixed(5)
    }
    console.info('', { res: MedianofTwoSortedArrays(nums10, nums20) })
    console.info('', { res: MedianofTwoSortedArrays(nums11, nums21) })
    console.info('', { res: MedianofTwoSortedArrays(nums12, nums22) })
    console.info('', { res: MedianofTwoSortedArrays(nums13, nums23) })
    console.info('', { res: MedianofTwoSortedArrays(nums14, nums24) })
  })

  it('test MedianofTwoSortedArrays.test Solution from ChRP', () => {
    const nums10 = [1, 3]
    const nums20 = [2] // 2.00000

    const nums11 = [1, 2]
    const nums21 = [3, 4] //2.50000

    const nums12 = [0, 0]
    const nums22 = [0, 0] //0.00000

    const nums13 = []
    const nums23 = [1] //1.00000

    const nums14 = [2]
    const nums24 = [] //2.00000

    const MedianofTwoSortedArrays = (nums1, nums2) => {
      const isInteger = variable => Math.round(variable) === variable
      const isEven = variable => isInteger(variable / 2)

      const numNext = [...nums1, ...nums2].sort((a, b) => a - b)

      const len = numNext.length

      let output = 0

      if (len === 0) {
        output = 0
      } else if (len === 1) {
        output = numNext[0]
      } else if (isEven(len)) {
        const index1 = len / 2 - 1
        const index2 = len / 2
        output = (numNext[index1] + numNext[index2]) / 2
      } else {
        const index = (len + 1) / 2 - 1
        output = numNext[index]
      }

      return output
    }
    console.info('', { res: MedianofTwoSortedArrays(nums10, nums20) })
    console.info('', { res: MedianofTwoSortedArrays(nums11, nums21) })
    console.info('', { res: MedianofTwoSortedArrays(nums12, nums22) })
    console.info('', { res: MedianofTwoSortedArrays(nums13, nums23) })
    console.info('', { res: MedianofTwoSortedArrays(nums14, nums24) })
  })
})
