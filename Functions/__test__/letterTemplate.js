

describe('letterTemplate.test.js', () => {
  it('test letterTemplate.test.js', () => {

   function letterTemplate(){

     this.HappyBirthdayToYou = function (name){
      return "Hey," + name + "," + "Happy Birthday to you!" + "Yours, Anna."
     }
     this.HappyNewYear = function (name){
      return "Hey," + name + "," + "Happy New Year!" + "Yours, Anna."
     }
     this.MyCongratulationsWithMarriage = function (name){
      return "Hey," + name + "," + "My congratulations with marriage!" + "Yours, Anna."
     }
     
    } 

    const name = "Алекс"
    const letterTemplateObj = new letterTemplate()
    const letterTemplate1 = letterTemplateObj.HappyBirthdayToYou(name)
    const letterTemplate2 = letterTemplateObj.HappyNewYear(name)
    const letterTemplate3 = letterTemplateObj.MyCongratulationsWithMarriage(name)

    console.info('info', { res: letterTemplate1 })
    console.info('info', { res: letterTemplate2 })
    console.info('info', { res: letterTemplate3 })
  })
})