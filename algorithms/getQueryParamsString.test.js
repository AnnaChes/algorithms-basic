describe('getQueryParamsString.test', () => {
  it('test getQueryParamsString.test', () => {
 
    const obj1 = {name:"hello", showSize:7, gender:"W"}//name=hello&shoeSize=7&gender=W


    const getQueryParamsString = (obj) => {
        return 'name' + '=' + obj.name + '&' + 'showSize' +  '=' + obj.showSize + '&'+  'gender'+ '='  + obj.gender
    }
  
  


    console.info('', { res: getQueryParamsString(obj1) })
    




  })
})
