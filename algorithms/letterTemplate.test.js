describe('Algoritms', () => {
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

    const output = letterTemplateObj.writeNewYear(inp)
    const expected = 'Happy New Year Mary'
    expect(output).toEqual(expected)
  })
})
