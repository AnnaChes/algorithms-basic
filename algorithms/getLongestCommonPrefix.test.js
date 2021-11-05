describe('Algoritms', () => {
  it('test getLongestCommonPrefix from Roman', () => {
    const getLongestCommonPrefix = arr => {
      let res = ''

      for (let i = 0; i < arr[0].length; i += 1) {
        const foundAll = arr.filter(
          item => item.slice(0, i) === arr[0].slice(0, i)
        )

        res = arr.length === foundAll.length ? arr[0].slice(0, i) : res
      }

      return res
    }

    const strsArr = [
      ['flower', 'flow', 'flight'],
      ['dog', 'racecar', 'car'],
      ['dogi', 'dog', 'doggertst', 'dogxxx'],
      ['dogi', 'do', 'doggertst', 'doxxx'],
      ['reflower', 'flow', 'flight'],
    ]

    let output = strsArr.map(item => getLongestCommonPrefix(item))

    const expected = ['fl', '', 'dog', 'do', '']
    expect(output).toEqual(expected)
  })

  it('test getLongestCommonPrefix from Anna', () => {
    const getLongestCommonPrefix2 = arr => {
      let res = ['']
      let interm
      let det = 0
      let i = 0
      const newArr = arr.map(item => item.split(''))
      while (det === 0) {
        interm = newArr[0][i]
        for (let n = 1; n < arr.length; n++) {
          if (interm !== newArr[n][i]) {
            det = 1
          }
        }
        if (det === 1) {
          break
        }
        res = [...res, interm]
        i++
      }
      return res.join('')
    }

    const strsArr = [
      ['flower', 'flow', 'flight'],
      ['dog', 'racecar', 'car'],
      ['dog', 'dogger', 'doggerist'],
      ['reflower', 'flow', 'flight'],
    ]
    let output = strsArr.map(item => getLongestCommonPrefix2(item))

    console.info('[]', { output })
    const expected = ['fl', '', 'dog', '']
    expect(output).toEqual(expected)
  })

  it('test getLongestCommonPrefix from Anna', () => {
    const getLongestCommonPrefix = arr => {
      let res = ['']
      const newArr = arr.map(item => item.split(''))
      for (let i = 0; i !== -1; i++) {
        if (newArr[0][i] === newArr[1][i] && newArr[1][i] === newArr[2][i]) {
          res = [...res, newArr[0][i]]
        } else {
          break
        }
      }
      return res.join('')
    }

    const strsArr = [
      ['flower', 'flow', 'flight'],
      ['dog', 'racecar', 'car'],
      ['dog', 'dogger', 'doggerist'],
      ['reflower', 'flow', 'flight'],
    ]
    let output = strsArr.map(item => getLongestCommonPrefix(item))

    // console.info('[]', { output })
    const expected = ['fl', '', 'dog', '']
    expect(output).toEqual(expected)
  })
})
