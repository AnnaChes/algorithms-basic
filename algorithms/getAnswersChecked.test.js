const arrModel = [
  {
    designType: 'CheckBox',
    multi: true,
    capture: 'Сколько существует видов решения уравнений с модулями?',
    options: [
      { optionID: 'o1', label: '1', status: false },
      { optionID: 'o2', label: '3', status: true },
      { optionID: 'o3', label: '2', status: true },
      { optionID: 'o4', label: '4', status: false },
    ],
  },
  {
    designType: 'CheckBox',
    multi: true,
    capture:
      'В графическом способе решения уравнения с модулями сколько надо построить графиков?',
    options: [
      { optionID: 'o5', label: '1', status: false },
      { optionID: 'o6', label: '2', status: true },
      { optionID: 'o7', label: '4', status: false },
    ],
  },
]

const arrAnwers6_202 = [
  {
    options: [
      { optionID: 'o1', label: '1', status: true },
      { optionID: 'o2', label: '3', status: false },
      { optionID: 'o3', label: '2', status: false },
      { optionID: 'o4', label: '4', status: true },
    ],
  },
  {
    options: [
      { optionID: 'o5', label: '1', status: true },
      { optionID: 'o6', label: '2', status: false },
      { optionID: 'o7', label: '4', status: false },
    ],
  },
]

const arrAnwers5_202 = [
  {
    options: [
      { optionID: 'o1', label: '1', status: false },
      { optionID: 'o2', label: '3', status: true },
      { optionID: 'o3', label: '2', status: false },
      { optionID: 'o4', label: '4', status: true },
    ],
  },
  {
    options: [
      { optionID: 'o5', label: '1', status: true },
      { optionID: 'o6', label: '2', status: false },
      { optionID: 'o7', label: '4', status: false },
    ],
  },
]

const arrAnwers4_202 = [
  {
    options: [
      { optionID: 'o1', label: '1', status: false },
      { optionID: 'o2', label: '3', status: false },
      { optionID: 'o3', label: '2', status: false },
      { optionID: 'o4', label: '4', status: false },
    ],
  },
  {
    options: [
      { optionID: 'o5', label: '1', status: true },
      { optionID: 'o6', label: '2', status: false },
      { optionID: 'o7', label: '4', status: false },
    ],
  },
]

const arrAnwers3_202 = [
  {
    options: [
      { optionID: 'o1', label: '1', status: true },
      { optionID: 'o2', label: '3', status: true },
      { optionID: 'o3', label: '2', status: true },
      { optionID: 'o4', label: '4', status: true },
    ],
  },
  {
    options: [
      { optionID: 'o5', label: '1', status: true },
      { optionID: 'o6', label: '2', status: false },
      { optionID: 'o7', label: '4', status: false },
    ],
  },
]

const arrAnwers2_211 = [
  {
    options: [
      { optionID: 'o1', label: '1', status: false },
      { optionID: 'o2', label: '3', status: true },
      { optionID: 'o3', label: '2', status: true },
      { optionID: 'o4', label: '4', status: false },
    ],
  },
  {
    options: [
      { optionID: 'o5', label: '1', status: true },
      { optionID: 'o6', label: '2', status: false },
      { optionID: 'o7', label: '4', status: false },
    ],
  },
]

const arrAnwers_220 = [
  {
    options: [
      { optionID: 'o1', label: '1', status: false },
      { optionID: 'o2', label: '3', status: true },
      { optionID: 'o3', label: '2', status: true },
      { optionID: 'o4', label: '4', status: false },
    ],
  },
  {
    options: [
      { optionID: 'o5', label: '1', status: false },
      { optionID: 'o6', label: '2', status: true },
      { optionID: 'o7', label: '4', status: false },
    ],
  },
]

describe('Algoritms', () => {
  it('test getAnswersChecked with renaming', () => {
    const getAnswersChecked = (answersModel, answers) => {
      let res = { total: answersModel.length, right: 0, wrong: 0 }
      answersModel.forEach((answerModel, answerModelIndex) => {
        let counter = 0
        answerModel.options.forEach((optionModel, optionIndex) => {
          if (
            optionModel.status ===
            answers[answerModelIndex].options[optionIndex].status
          ) {
            counter = counter + 1
          }
        })
        if (counter === answerModel.options.length) {
          res.right = res.right + 1
        } else {
          res.wrong = res.wrong + 1
        }
      })
      return res
    }

    let expected
    let output6_202 = getAnswersChecked(arrModel, arrAnwers6_202)
    expected = { total: 2, right: 0, wrong: 2 }
    expect(output6_202).toEqual(expected)
    let output5_202 = getAnswersChecked(arrModel, arrAnwers5_202)
    expected = { total: 2, right: 0, wrong: 2 }
    expect(output5_202).toEqual(expected)
    let output4_202 = getAnswersChecked(arrModel, arrAnwers4_202)
    expected = { total: 2, right: 0, wrong: 2 }
    expect(output4_202).toEqual(expected)
    let output3_202 = getAnswersChecked(arrModel, arrAnwers3_202)
    expected = { total: 2, right: 0, wrong: 2 }
    expect(output3_202).toEqual(expected)
    let output2_211 = getAnswersChecked(arrModel, arrAnwers2_211)
    expected = { total: 2, right: 1, wrong: 1 }
    expect(output2_211).toEqual(expected)
    let output_220 = getAnswersChecked(arrModel, arrAnwers_220)
    expected = { total: 2, right: 2, wrong: 0 }
    expect(output_220).toEqual(expected)
    // console.info('[move Rename]', {
    //   output6_202,
    //   output5_202,
    //   output4_202,
    //   output3_202,
    //   output2_211,
    //   output_220,
    // })
  })

  it('test getAnswersChecked, имена от автора', () => {
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

    let expected
    let output6_202 = getAnswersChecked(arrModel, arrAnwers6_202)
    expected = { total: 2, right: 0, wrong: 2 }
    expect(output6_202).toEqual(expected)
    let output5_202 = getAnswersChecked(arrModel, arrAnwers5_202)
    expected = { total: 2, right: 0, wrong: 2 }
    expect(output5_202).toEqual(expected)
    let output4_202 = getAnswersChecked(arrModel, arrAnwers4_202)
    expected = { total: 2, right: 0, wrong: 2 }
    expect(output4_202).toEqual(expected)
    let output3_202 = getAnswersChecked(arrModel, arrAnwers3_202)
    expected = { total: 2, right: 0, wrong: 2 }
    expect(output3_202).toEqual(expected)
    let output2_211 = getAnswersChecked(arrModel, arrAnwers2_211)
    expected = { total: 2, right: 1, wrong: 1 }
    expect(output2_211).toEqual(expected)
    let output_220 = getAnswersChecked(arrModel, arrAnwers_220)
    expected = { total: 2, right: 2, wrong: 0 }
    expect(output_220).toEqual(expected)
  })
})
