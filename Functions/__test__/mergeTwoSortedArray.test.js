

describe('mergeTwoSortedArray.test.js', () => {
  it('test mergeTwoSortedArray.test.js', () => {

   function mergeTwoSortedArray(arrA, arrB){

    let res = []
    const arrAB = [...arrA,...arrB]
    res = arrAB.sort(function(a, b){return a - b})
    return res
    
    
  }
  console.info('info', { res: mergeTwoSortedArray(  [2,3,4,11,17] ,  [1,4,4,15,17,19]
    )})
})
})