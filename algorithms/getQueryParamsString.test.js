describe('getQueryParamsString.test', () => {
  it('test getQueryParamsString.test', () => {
 
    


    const getQueryParamsString = (obj) => {
        return 'name' + '=' + obj.name + '&' + 'showSize' +  '=' + obj.showSize + '&'+  'gender'+ '='  + obj.gender
    }
  
  


    let obj1 = {name:"hello", showSize:7, gender:"W"}//name=hello&shoeSize=7&gender=W
    let output = getQueryParamsString(obj1)
    const expected = 'name=hello&shoeSize=7&gender=W'
    expect(output).toEqual(expected)
    




  })
})
