const { isTemplateMiddleOrTemplateTail } = require('typescript')

describe('getElemUnpaired.test', () => {
  it('test getElemUnpaired.test', () => {
    const arr1 = [2, 3, 4, 5, 4, 3, 2]
    const arr2 = [2, 3, 5, 5, 4, 3, 2]
    const arr3 = [0, 3, 4, 2, 4, 3, 2]
    //getElemUnpaired(arr1)  5
    //getElemUnpaired(arr2)  4
    //getElemUnpaired(arr3)  0

    const getElemUnpaired = arr => {
      return arr.filter((itemA, indexA) => {
        let indicator = true
        arr.forEach((itemB, indexB) => {
          if (itemA === itemB && indexA !== indexB) {
            indicator = false
          }
        })
        return indicator
      })
    }

    res11 = arr1[1] === arr2[1]
    console.info('info', { res: getElemUnpaired(arr1) })
    console.info('info', { res: getElemUnpaired(arr2) })
    console.info('info', { res: getElemUnpaired(arr3) })
  })
})
