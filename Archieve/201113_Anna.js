() => {
    /**
    Дано: массив var a1=["Аня","Алена","Бося","Мама","Папа"]
    Задача:
	Из массива a1
	1. Узнать индекс Мама (число x1)
	2. Добавить Бабушку Дедушку (массив x2)
	2.1. Отсортировать массив по алфавиту (массив x3)
	3. Исключить Кота (массив x4)
	4. Создать строку ... - моя семья (строка x5)
	5. Вычислить длину строки (число x6)
	6. Выводит все в консоль, как ты это делала

    console.info('info', { x1, x2, x3, x4, x5, x6 })
 */

    var a1 = ["Аня","Алена","Бося","Мама","Папа"]
    var x1 = a1.indexOf("Мама")
    var x2 = a1.slice( 0, a1.length+1 )
    x2.splice(5, 0, "Бабушка","Дедушка")
    var x3 = x2.slice( 0, x2.length+1 )
    x3.sort()
    var x4 = x3.slice( 0, x3.length+1 ) 
    x4.splice( 3, 1 )
    var x5 = x4.slice( 0, x4.length+1 ) 
    x5.splice(x5.length+1,0,"- моя семья.")
    x5 = x5.join(", ")
    var x6 = x5.length

  console.info('info', { x1, x2, x3, x4, x5, x6 })


})()

/*
  Добавить бабушку и дедуку через .push()
  Исключить кота через .filter(item => {})
*/