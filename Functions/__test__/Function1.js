describe('Function1.test', () => {
  it('test Function1.test', () => {



    
  
    const arr = [
      { class: 'second', fare: 'a', weight: 4 },
      { class: 'second', fare: 'b', weight: 2 },
      { class: 'first', fare: 'a', weight: 1 },
      { class: 'first', fare: 'a', weight: 10 },
      { class: 'second', fare: 'a', weight: 8 },
      { class: 'first', fare: 'c', weight: 5 },
      { class: 'first', fare: 'c', weight: 6 },
      { class: 'first', fare: 'a', weight: 10 },
    ]
    function Function1.test(paramert,arr) {
      const obj = {}
      const result = []
      arr.forEach((item0,index) => {
        const plus = ''
        paramert.forEach((item1) => {
          plus = plus + item0[item1]
        })
        obj[plus] = index
      })
     const keys = Object.keys(obj)
     keys.forEach((item2) => {
      result = [...result,arr[obj[item2]]]
    })
      return result
    }
    
      
     
    
  
    console.info('info', { res: Function1.test(['class', 'fare'],arr) })


  })
})