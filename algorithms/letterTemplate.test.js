describe('Test for letterTemplate', () => {
  it('test letterTemplate', () => {
    function letterTemplate() {
      // this.name = name
      this.writeHello = function (name) {
        return 'Hello ' + name
      }
      this.writeBirthday = function (name) {
        return 'Happy Birthday ' + name
      }
      this.writeNewYear = function (name) {
        return 'Happy New Year ' + name
      }
    }

    const inp = 'Mary' // Ann
    const letterTemplateObj = new letterTemplate()

    const res = letterTemplateObj.writeNewYear(inp)
    console.info('info greatestCommonDivisorTwoNumbers', res)
  })
})
