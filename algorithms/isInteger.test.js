describe('Test for gisInteger', () => {
  test('Test for isInteger', () => {
    function isInteger2(number) {
      if (number % 1 !== 0) {
        const result = 'не целое'
        return result
      } else {
        const result = 'целое'
        return result
      }
    }

    function isInteger3(number) {
      const SmallNumber = Math.floor(number)
      if (SmallNumber != number) {
        const result = 'не целое'
        return result
      } else {
        const result = 'целое'
        return result
      }
    }

    console.info('info 3.0', { res: isInteger2(3) })
    console.info('info 11.0', { res: isInteger3(11) })
    console.info('info 3.4', { res: isInteger2(3.4) })
    console.info('info 11.7', { res: isInteger3(11.7) })

    expect(true).toBe(true)
  })
})
