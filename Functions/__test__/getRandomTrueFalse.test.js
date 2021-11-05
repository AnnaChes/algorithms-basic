describe('getRandomTrueFalse.test', () => {
  it('test getRandomTrueFalse.test', () => {
    const getRandomTrueFalse = () => {
      return Math.random().toFixed() === '0'
    }

    console.info('info', { res: getRandomTrueFalse() })
  })
})
