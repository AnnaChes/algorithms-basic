describe('getQueryParamValue.test', () => {
    it('test getQueryParamValue.test', () => {
        const str1 = "?madam=nex&hello=7&man=9"
        const key1 = "hello"//"7"

        const getQueryParamValue = (str, key) => {
           let arr = str.split('') 
           let objName 
           let objValue
           let startI = 1
           let obj = new Object()
           arr.forEach((item, index) => {
            if (item === '='){
              objName = arr.slice(startI, index).join('')
              startI = index + 1
            }
            if (item === '&' || index === arr.length - 1){
                objValue = arr.slice(startI, index).join('')
                obj[objName] = objValue
                startI = index + 1
            }
            if (index === arr.length - 1){
                objValue = arr.slice(startI - 1).join('')
                obj[objName] = objValue
            }
          })
           return obj[key]
        }
        
        const output = getQueryParamValue(str1, key1)
        const expected = "7"
        expect(output).toEqual(expected)
    })
  })
  
