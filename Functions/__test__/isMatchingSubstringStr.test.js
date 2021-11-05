describe('isMatchingSubstringStr.test', () => {
  it('test isMatchingSubstringStr.test', () => {

    const isMatchingSubstringStr = (str, subStr) => {
        return str.includes(subStr);
      }    
  
    console.info('info', { res: isMatchingSubstringStr('шалаш', 'аш') }) // true
    console.info('info', { res:  isMatchingSubstringStr('шалаш', 'баш') }) // false
     
    
  
  })
})