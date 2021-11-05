describe('getTwoIndexesSum.test', () => {
  it('test getTwoIndexesSum.test', () => {
    const nums1 = [2, 7, 11, 15]
    const target1 = 9 //[0, 1]
    const nums2 = [3, 2, 4]
    const target2 = 6 //[1, 2]
    const nums3 = [3, 3]
    const target3 = 6 //[0, 1]

    const getTwoIndexesSum = (arr, target) => {
      let res = []
      if (2 <= arr.length <= 103 && -109 <= target <= 109) {
        const arrFilter = arr.filter(item => {
          return -109 <= item <= 109
        })
        if (arrFilter.length === arr.length) {
          const arrLength = arr.length + 1
          let indexArr = []
          let Break = 0
          arr.forEach((itemA, indexA) => {
            for (let a = indexA; a !== arrLength; a++) {
              const Arr = arr.slice(a, a + 2)
              const sum = Arr[0] + Arr[1]
              if (sum === target && Break === 0) {
                res = [...res, a, a + 1]
                Break = Break + 1
                break
              }
            }
          })
        } else {
          res = 0
        }
      }

      return res
    }

    const getTwoIndexesSum = (arr, target) => {
      let res = []
      if (2 <= arr.length <= 103 && -109 <= target <= 109) {
        const arrFilter = arr.filter(item => {
          return -109 <= item <= 109
        })
        if (arrFilter.length === arr.length) {
          const arrLength = arr.length + 1
          let indexArr = []
          let def = 0
          arr.forEach((itemA, indexA) => {
            for (let a = indexA; a !== arrLength; a++) {
              const Arr = arr.slice(a, a + 2)
              const sum = Arr[0] + Arr[1]
              if (sum === target && def === 0) {
                res = [...res, a, a + 1]
                def = def + 1
                break
              }
            }
          })
        } else {
          res = 0
        }
      }

      return res
    }

    console.info('info', { res: getTwoIndexesSum(nums1, target1) })
    console.info('info', { res: getTwoIndexesSum(nums2, target2) })
    console.info('info', { res: getTwoIndexesSum(nums3, target3) })
  })
})
