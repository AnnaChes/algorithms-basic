describe('getQueryParamsString.test', () => {
    it('test getQueryParamsString.test', () => {
        const obj1 = {name:"hello", showSize:7, gender:"W"}//name=hello&showSize=7&gender=W

        const getQueryParamsString = (obj) => {
           let res = '?'
           for (let name in obj) {
            res = res + name + '=' + obj[name] + '&'
           }
           return res.slice(0, -1)
        }
        

        const output = getQueryParamsString(obj1)
        const expected = '?name=hello&showSize=7&gender=W'
        expect(output).toEqual(expected)
    })
  })
  
