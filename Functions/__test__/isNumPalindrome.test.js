describe('isNumPalindrome.test', () => {
  it('test isNumPalindrome.test', () => {
    // An integer is a palindrome when it reads the same backward as forward.For example,
    // 121 is palindrome while 123 is not, -121 is not, but 1001 is.

    const isNumPalindrome = x => {
      const newX = String(x)
      const interm = newX.split('').join('')
      const reverse = newX.split('').reverse().join('')

      return interm === reverse
    }

    const isNumPalindromeAV = x => {
      const interm = x.split('').join('')
      const reverse = x.split('').reverse().join('')

      return interm, reverse
    }

    console.info('info', { res: isNumPalindrome(121) })
    console.info('info', { res: isNumPalindrome(1001) })

    console.info('info', { res: isNumPalindromeAV(121) })
    console.info('info', { res: isNumPalindromeAV(1001) })
  })
})
