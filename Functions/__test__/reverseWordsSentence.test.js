describe('reverseWordsSentence.test', () => {
  it('test reverseWordsSentence.test', () => {



    
    const str0 = 'How would you reverse words in a sentence'
    const strRev = 'sentence a in words reverse you would How'

    
    const reverseWordsSentence = (str) => { return str.split(" ").reverse().join(' ') }
    
      
     
    
  
    console.info('info', { res: reverseWordsSentence (str0) })
    console.info('info', { res: strRev })

  })
})