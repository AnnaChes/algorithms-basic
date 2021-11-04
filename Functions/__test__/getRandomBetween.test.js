describe('getRandomBetween.test', () => {
  it('test getRandomBetween.test', () => {

    const getRandomIntegerBetween = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }  

    const getRandomBetween = (min, max) => {
      return (Math.random() * (max - min + 1) ) + min;
    }  

  
    console.info('info', { res: getRandomBetween (5,7) })


  })
})