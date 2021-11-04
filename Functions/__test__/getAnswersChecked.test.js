describe('getAnswersChecked.test', () => {
  it('test getAnswersChecked.test', () => {
    const arrModel0 = [
      {
        designType: 'CheckBox',
        multi: true,
        capture: 'Сколько существует видов решения уравнений с модулями?',
        options: [
          { label: '1', status: false },
          { label: '3', status: true },
          { label: '2', status: false },
          { label: '4', status: false },
        ],
      },
      {
        designType: 'CheckBox',
        multi: true,
        capture:
          'В графическом способе решения уравнения с модулями сколько надо построить графиков?',
        options: [
          { label: '1', status: false },
          { label: '2', status: true },
          { label: '4', status: false },
        ],
      },
    ]

    const arrAnwers0 = [
      {
        options: [
          { label: '1', status: false },
          { label: '3', status: true },
          { label: '2', status: false },
          { label: '4', status: false },
        ],
      },
      {
        options: [
          { label: '1', status: false },
          { label: '2', status: true },
          { label: '4', status: false },
        ],
      },
    ]

    //const res1 = getAnswersChecked(arrModel0, arrAnwers0) // { total: 2, right: 2, wrong: 0 }

    const arrAnwers1 = [
      {
        options: [
          { label: '1', status: false },
          { label: '3', status: true },
          { label: '2', status: false },
          { label: '4', status: false },
        ],
      },
      {
        options: [
          { label: '1', status: true },
          { label: '2', status: false },
          { label: '4', status: false },
        ],
      },
    ]

    //const res2 = getAnswersChecked(arrModel0, arrAnwers0) // {  total: 2, right: 1, wrong: 1 }

    const arrAnwers2 = [
      {
        options: [
          { label: '1', status: false },
          { label: '3', status: true },
          { label: '2', status: true },
          { label: '4', status: false },
        ],
      },
      {
        options: [
          { label: '1', status: true },
          { label: '2', status: false },
          { label: '4', status: false },
        ],
      },
    ]

    const questions = [
      {
        designType: 'CheckBox',
        multi: true,
        capture: 'Сколько существует видов решения уравнений с модулями?',
        options: [
          { label: '1', status: false },
          { label: '3', status: true },
          { label: '2', status: true },
          { label: '4', status: false },
        ],
      },
      {
        designType: 'CheckBox',
        multi: true,
        capture:
          'В графическом способе решения уравнения с модулями сколько надо построить графиков?',
        options: [
          { label: '1', status: false },
          { label: '2', status: true },
          { label: '4', status: false },
        ],
      },
    ]

    const answers = [
      {
        designType: 'CheckBox',
        multi: true,
        capture: 'Сколько существует видов решения уравнений с модулями?',
        options: [
          { label: '1', status: false },
          { label: '3', status: true },
          { label: '2', status: true },
          { label: '4', status: false },
        ],
      },
      {
        designType: 'CheckBox',
        multi: true,
        capture:
          'В графическом способе решения уравнения с модулями сколько надо построить графиков?',
        options: [
          { label: '1', status: false },
          { label: '2', status: true },
          { label: '4', status: false },
        ],
      },
    ]

    const questions3 = [
      {
        designType: 'CheckBox',
        multi: true,
        capture: 'Сколько существует видов решения уравнений с модулями?',
        options: [
          { label: '1', status: false },
          { label: '3', status: true },
          { label: '2', status: true },
          { label: '4', status: false },
        ],
      },
      {
        designType: 'CheckBox',
        multi: true,
        capture:
          'В графическом способе решения уравнения с модулями сколько надо построить графиков?',
        options: [
          { label: '1', status: false },
          { label: '2', status: true },
          { label: '4', status: false },
        ],
      },
    ]
    const answers3 = [
      {
        designType: 'CheckBox',
        multi: true,
        capture: 'Сколько существует видов решения уравнений с модулями?',
        options: [
          { label: '1', status: false },
          { label: '3', status: false },
          { label: '2', status: true },
          { label: '4', status: false },
        ],
      },
      {
        designType: 'CheckBox',
        multi: true,
        capture:
          'В графическом способе решения уравнения с модулями сколько надо построить графиков?',
        options: [
          { label: '1', status: true },
          { label: '2', status: true },
          { label: '4', status: false },
        ],
      },
    ]

    const questions2 = [
      {
        designType: 'CheckBox',
        multi: true,
        capture: 'Сколько существует видов решения уравнений с модулями?',
        options: [
          { label: '1', status: false },
          { label: '3', status: true },
          { label: '2', status: true },
          { label: '4', status: false },
        ],
      },
      {
        designType: 'CheckBox',
        multi: true,
        capture:
          'В графическом способе решения уравнения с модулями сколько надо построить графиков?',
        options: [
          { label: '1', status: false },
          { label: '2', status: true },
          { label: '4', status: false },
        ],
      },
    ]
    const answers2 = [
      {
        designType: 'CheckBox',
        multi: true,
        capture: 'Сколько существует видов решения уравнений с модулями?',
        options: [
          { label: '1', status: false },
          { label: '3', status: true },
          { label: '2', status: true },
          { label: '4', status: false },
        ],
      },
      {
        designType: 'CheckBox',
        multi: true,
        capture:
          'В графическом способе решения уравнения с модулями сколько надо построить графиков?',
        options: [
          { label: '1', status: true },
          { label: '2', status: true },
          { label: '4', status: false },
        ],
      },
    ]

    const getAnswersChecked2 = (questions, answers) => {
      let res = { total: questions.length, right: 0, wrong: 0 }
      questions.forEach((itemA, indexA) => {
        let counter = 0
        itemA['options'].forEach((itemB, indexB) => {
          if (
            itemB['status'] === answers[indexA]['options'][indexB]['status']
          ) {
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

    const getAnswersChecked = (arrModel, arrAnwers) => {
      let res = { total: arrModel.length, right: 0, wrong: 0 }
      arrModel.forEach((itemA, indexA) => {
        let counter = 0
        itemA['options'].forEach((itemB, indexB) => {
          if (
            itemB['status'] === arrAnwers[indexA]['options'][indexB]['status']
          ) {
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

    const questions10 = [
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
    ]

    // {  total: 2, right: 2, wrong: 0 }

    const questions20 = [
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
    ]

    // {  total: 2, right: 1, wrong: 1 }

    const questions30 = [
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
    ]

    // {  total: 2, right: 0, wrong: 2 }

    const getAnswersChecked20 = questions => {
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

    console.info('info', { res: getAnswersChecked20(questions10) })
    console.info('info', { res: getAnswersChecked20(questions20) })
    console.info('info', { res: getAnswersChecked20(questions30) })
  })
})
