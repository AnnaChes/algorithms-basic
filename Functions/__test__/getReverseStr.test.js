

describe('getReverseStr.test.js', () => {
  it('test getReverseStr.test.js', () => {

   function getReverseStr( str ){

    let ReverseArr = []
    const arr = str.split("")
    for ( let p = (arr.length)-1 ; p !== -1; p = p - 1 ){
      ReverseArr = [...ReverseArr,arr[p]]
    }
    const res = ReverseArr.join("")
    return res

  }
  console.info('info', { res:getReverseStr( 'string' )})
})
})