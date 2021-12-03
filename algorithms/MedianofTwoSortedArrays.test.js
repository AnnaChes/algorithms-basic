describe('MedianofTwoSortedArrays.test', () => {
  it('test MedianofTwoSortedArrays.test', () => {
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
})
