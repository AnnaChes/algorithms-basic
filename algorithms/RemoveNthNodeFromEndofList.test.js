describe('RemoveNthNodeFromEndofList.test', () => {
  it('test RemoveNthNodeFromEndofList.test', () => {
   
    const head1 = [1,2,3,4,5]
    const n1 = 2// [1,2,3,5]

    const head2 = [1]
    const n2 = 1// []

    const head3 = [1,2]
    const n3 = 1//[1]

    const RemoveNthNodeFromEndofList = (head, n) => {
      const arr = head.filter((item) => {
        return item !== head[head.length - n]
      })
      return arr

    }
 
    console.info('', { res: RemoveNthNodeFromEndofList(head1, n1) })
    console.info('', { res: RemoveNthNodeFromEndofList(head2, n2) })
    console.info('', { res: RemoveNthNodeFromEndofList(head3, n3) })


    const heads = [
      { head: [1,2,3,4,5] , n: 2 },
      { head: [1], n: 1 },
      { head: [1,2] , n: 1 },
    ]

    let output = heads.map(item => isMatchingSubstringStr(item.head, item.n))
    const expected = [[1,2,3,5], [], [1]]
    expect(output).toEqual(expected)




  })
})
