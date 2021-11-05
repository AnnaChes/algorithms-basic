describe('twoSum.test', () => {
  it('test twoSum.test', () => {
    const nums1 = [2, 7, 11, 15]
    const target1 = 9 //[0, 1]
    const nums2 = [3, 2, 4]
    const target2 = 6 //[1, 2]
    const nums3 = [3, 3]
    const target3 = 6 //[0, 1]

    const twoSum = (nums, target) => {
      let res = []
      nums.forEach((itemA, indexA) => {
        nums.forEach((itemB, indexB) => {
          if (itemA + itemB === target && indexA !== indexB) {
            if (res.includes(indexA, indexB) !== true) {
              res = [...res, indexA, indexB]
            }
          }
        })
      })
      return res
    }

    console.info('info', { res: twoSum(nums1, target1) })
    console.info('info', { res: twoSum(nums2, target2) })
    console.info('info', { res: twoSum(nums3, target3) })
  })
})
