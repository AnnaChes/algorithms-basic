describe('reverseWordsPlace.test', () => {
  it('test reverseWordsPlace.test', () => {


    const str1 = 'I am the good boy'
    const strNew = 'I ma eht doog yob'
    
    const reverseWordsPlace = (str) => { return str.split(" ").map((item) => {
       const res = item.split("").reverse().join('')
      return  res}).join(' ') }
    
    console.info('info', { res: reverseWordsPlace (str1)})
    console.info('info', { res: strNew})
  })
})