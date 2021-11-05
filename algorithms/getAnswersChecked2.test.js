describe('Algoritms', () => {
  it('getAnswersChecked2 func', () => {
    const getAnswersChecked2 = questions => {
      let res = { total: questions.length, right: 0, wrong: 0 }
      questions.forEach(itemA => {
        let counter = 0
        itemA['options'].forEach(itemB => {
          if (itemB['status'] === itemB['answer']) {
            counter = counter + 1
          }
        })
        if (counter === itemA['options'].length) {
          res.right = res.right + 1
        } else {
          res.wrong = res.wrong + 1
        }
      })
      return res
    }

    const questionsArr = [
      [
        {
          designType: 'CheckBox',
          multi: true,
          capture: 'Сколько существует видов решения уравнений с модулями?',
          options: [
            { label: '1', status: false, answer: false },
            { label: '3', status: true, answer: true },
            { label: '2', status: true, answer: true },
            { label: '4', status: false, answer: false },
          ],
        },
        {
          designType: 'CheckBox',
          multi: true,
          capture:
            'В графическом способе решения уравнения с модулями сколько надо построить графиков?',
          options: [
            { label: '1', status: false, answer: false },
            { label: '2', status: true, answer: true },
            { label: '4', status: false, answer: false },
          ],
        },
      ],
      [
        {
          designType: 'CheckBox',
          multi: true,
          capture: 'Сколько существует видов решения уравнений с модулями?',
          options: [
            { label: '1', status: false, answer: false },
            { label: '3', status: true, answer: true },
            { label: '2', status: true, answer: true },
            { label: '4', status: false, answer: false },
          ],
        },
        {
          designType: 'CheckBox',
          multi: true,
          capture:
            'В графическом способе решения уравнения с модулями сколько надо построить графиков?',
          options: [
            { label: '1', status: false, answer: true },
            { label: '2', status: true, answer: true },
            { label: '4', status: false, answer: false },
          ],
        },
      ],
      [
        {
          designType: 'CheckBox',
          multi: true,
          capture: 'Сколько существует видов решения уравнений с модулями?',
          options: [
            { label: '1', status: false, answer: false },
            { label: '3', status: true, answer: false },
            { label: '2', status: true, answer: true },
            { label: '4', status: false, answer: false },
          ],
        },
        {
          designType: 'CheckBox',
          multi: true,
          capture:
            'В графическом способе решения уравнения с модулями сколько надо построить графиков?',
          options: [
            { label: '1', status: false, answer: true },
            { label: '2', status: true, answer: true },
            { label: '4', status: false, answer: false },
          ],
        },
      ],
    ]

    let output = questionsArr.map(questions => getAnswersChecked2(questions))
    // console.info('[]', { output })
    const expected = [
      { total: 2, right: 2, wrong: 0 },
      { total: 2, right: 1, wrong: 1 },
      { total: 2, right: 0, wrong: 2 },
    ]
    expect(output).toEqual(expected)
  })
})
