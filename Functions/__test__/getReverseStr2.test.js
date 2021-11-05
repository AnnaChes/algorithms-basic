

describe('getReverseStr2.test.js', () => {
  it('test getReverseStr2.test.js', () => {

   function getReverseStr2( str ){

    
    const arr = str.split("")
    const reverse = arr.reverse()
    const res = reverse.join("")
    return res

  }
  console.info('info', { res:getReverseStr2( 'string' )})
})
})