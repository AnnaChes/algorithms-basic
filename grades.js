





/*
  Return unique array by two properties
  price 400 rub
*/
(() => {
  const data = [
    { class: "second", fare: "a", number: "120" },
    { class: "second", fare: "b", number: "120" },
    { class: "first", fare: "a", number: "110" },
    { class: "first", fare: "a", number: "120" },
    { class: "second", fare: "a", number: "110" },
    { class: "first", fare: "c", number: "130" },
  ];

  const getCalculation = () => { 

  }

  const result =  getCalculation()
  console.info('result', { result })
  
  // Expected
  const expected = [
    { class: "second", fare: "a", number: "120" },
    { class: "second", fare: "b", number: "120" },
    { class: "first", fare: "a", number: "120" },
    { class: "first", fare: "c", number: "130" },
  ];
})()




const data = [
  { class: "second", fare: "a", number: "120" },
  { class: "second", fare: "b", number: "120" },
  { class: "first", fare: "a", number: "110" },
  { class: "first", fare: "a", number: "120" },
  { class: "second", fare: "a", number: "110" },
  { class: "first", fare: "c", number: "130" },
];

// Expected
const result = [
  { class: "second", fare: "a", number: "120" },
  { class: "second", fare: "b", number: "120" },
  { class: "first", fare: "a", number: "120" },
  { class: "first", fare: "c", number: "130" },
];

const getUniqArrBy = (props = [], arrInp = [{}]) => {
  const objKey = {};
  return arrInp.reduce((res, item) => {
    const valStr = props.reduce((res, prop) => `${res}${item[prop]}`, "");
    if (objKey[valStr]) return res;
    objKey[valStr] = item;
    return [...res, item];
  }, []);
};

const uniq = getUniqArrBy(["class", "fare"], data);

console.info({ uniq, keyValStr })(
  /*
  Regrouping array
  https://stackoverflow.com/questions/62688206
  price 700 rub
*/
() => {
  const data = [
    {
      name: "John",
      transaction: "10/10/2010",
      item: "Bag",
    },
    {
      name: "Steven",
      transaction: "31/10/2020",
      item: "Shoe",
    },
    {
      name: "John",
      transaction: "18/06/2019",
      item: "Sock",
    },
  ];

  const getCalculation = () => { 

  }

  const result =  getCalculation()
  console.info('result', { result })
    
  // Expected
  const expected = [
    {
      name: "John",
      transactions: [
        {
          date: "10/10/2010",
          item: "Bag",
        },
        {
          date: "18/06/2019",
          item: "Sock",
        },
      ],
    },
    {
      name: "Steven",
      transactions: [
        {
          date: "31/10/2020",
          item: "Shoe",
        },
      ],
    },
  ];

})()
  
  () => {
    const data = [
      {
        name: "John",
        transaction: "10/10/2010",
        item: "Bag",
      },
      {
        name: "Steven",
        transaction: "31/10/2020",
        item: "Shoe",
      },
      {
        name: "John",
        transaction: "18/06/2019",
        item: "Sock",
      },
    ];

    // Expected
    const result = [
      {
        name: "John",
        transactions: [
          {
            date: "10/10/2010",
            item: "Bag",
          },
          {
            date: "18/06/2019",
            item: "Sock",
          },
        ],
      },
      {
        name: "Steven",
        transactions: [
          {
            date: "31/10/2020",
            item: "Shoe",
          },
        ],
      },
    ];

    const group = (arr) => {
      let output = [];
      const hash = {};
      arr.forEach((item) => {
        if (hash[item.name] !== true) {
          hash[item.name] = true;
          const { name, ...itemTmp } = item;
          const objTmp = {
            name: item.name,
            transactions: [itemTmp],
          };

          output = [...output, objTmp];
        } else {
          const { name, ...itemTmp } = item;
          let yes = output.filter((itemFilter) => itemFilter.name === name)[0];
          const noArr = output.filter((itemFilter) => itemFilter.name !== name);
          let { transactions } = yes;

          transactions = [...transactions, itemTmp];
          yes = { ...yes, transactions };

          output = [...noArr, yes];
        }
      });

      return output;
    };

    const res = group(data);
    console.info("info", { res });
  }
)()

  
/*Функция для определения палинром ли это  150 руб.

Лёша на полке клопа нашёл (авторство спорно)
А роза упала на лапу Азора. (Афанасий Фет)
Аргентина манит негра (авторство спорно[8])
Я иду съ мечемъ судия (Гавриил Державин)
Я — арка края (Валерий Брюсов[9])
О, лета тело! (Валерий Брюсов[9])

madam

.toLowerCase()
.split  <->  .join
.sort
.filter

и др.
*/

  () => {
    function function_number_one(str) {
      return str
        .split(" ")
        .map((item) => {
          return Number(item);
        })
        .filter((item) => item != 0);
    }

    let strr = " 5   5 5 5 5 5 5 5  ";
    console.info("info", { res: function_number_one(strr) });
  }
)()(
  /**
   * @description Task to create tables for several students with their grades
   * @description Headers: Имя и период. Columns: №, Предмет, Оценки, Средняя
   * @description Use data DOM methods document.getElementById, document.createTextNode,
   *    document.createElement, appendChild
   * @description Use data javascript methods forEach, filter, map
   * @link https://learn.javascript.ru/array-iteration
   * @price 400
   *
   * 1. Создать функцию по преобразованию строки типа '5 5 5 5	' в массив [5, 5, 5, 5] (метод .split)
   * 2. Как сделать строку в таблице из объекта { name: 'Англ. яз.', grades: '5 5 5 5	'}
   *       Таблица успеваемости Предмет Англ. яз. 5 5 5 5
   *       5 5 5 5 - с помощью итерации (forEach, map) .documentCreateTextNode -> appendChild
   */

  // Anna's solution + My structuring improvements
  () => {
    const data = [
      {
        name: "Anna",
        period: "4-я четверть",
        subjects: [
          { name: "Англ. яз.", grades: "5 5 5 5	" },
          { name: "Биология", grades: "5 5 5	" },
          { name: "В мире любимых книг", grades: " 4 " },
          { name: "География", grades: "5 5 5 5" },
          { name: "ИЗО", grades: "5 5 5	    	5" },
          { name: "Информатика", grades: "5 5 5 4" },
          { name: "История", grades: "5 5 5	" },
          { name: "Литерат.", grades: "5 5 5 5 5 5" },
          { name: "Матем.", grades: "5 4 5 5 4 5 5" },
          { name: "Музыка", grades: "5" },
          { name: "наглядная геметрия", grades: "5" },
          { name: "Обществознание", grades: "5" },
          { name: "Рус. язык", grades: "5 5 5 5 5 5 5 5 5 5" },
          { name: "Технол.", grades: "5    5" },
          { name: "Физкульт.", grades: "5 4 4 5 5 5 5 5 5" },
          { name: "Экология Урала", grades: "5 5" },
        ],
      },
      {
        name: "Alena",
        period: "4-я четверть",
        subjects: [
          { name: "Алгебра", grades: "5 4 4 4 5 5" },
          { name: "Англ. яз.", grades: "5 5 5 5 5 5 5" },
          { name: "Биология", grades: "4 4 5 5" },
          { name: "География", grades: "4 5 3 3 4 4" },
          { name: "Геометрия", grades: "4 5 5 5    5 5 5" },
          { name: "Информатика", grades: "5 5 5 5 5" },
          { name: "Информатика*", grades: "3 5 5 5" },
          { name: "История", grades: "5 4 4 4  4" },
          { name: "Литерат.", grades: "5 5 5 5 5 5 5 5" },
          { name: "Матем *", grades: "5 5 5 5" },
          { name: "Немецкий язык", grades: "5 5 5" },
          { name: "ОБЖ", grades: "5 5" },
          { name: "Обществознание", grades: "3 5   " },
          { name: "Практ. риторика", grades: " " },
          { name: "Рус. язык", grades: "5 5 5 5 5 5 5 5" },
          { name: "Физика", grades: "4 5 4 5 4" },
          { name: "Физкульт.", grades: "5 5 5 5 5" },
          { name: "Химия", grades: "4 4 4 5 5" },
        ],
      },
    ];

    // 1. Переименовать function_number_onee в getArrFromString
    // 2. Выделить код, который из массива делает таблицу, в функцию createTableFromArr
    // с аргументами
    // 3. Создать функцию, которая делает из данных две таблицы для Ани и Алены
    // 4. Записаться к ортодонту
    //    Tatiana	Vladimirovna Kiseleva	Taki-Dent	Orthodontist Dentist
    //    67 Furmanova st., Yekaterinburg, Russia	+7 343 251 1966
    //    Получить расчет на бумаге

    function getArrFromString(str) {
      let arr_str = str.split(" ");
      let arr = [];

      arr_str.forEach((item) => {
        let num = Number(item);
        arr.push(num);
      });
      return arr.filter((item) => item != 0);
    }

    function Table(rootTbl, personObj) {
      const titleTxt = document.createTextNode(
        personObj.name + " " + personObj.period
      );
      const titleEl = document.createElement("h2");
      titleEl.appendChild(titleTxt);
      rootTbl.appendChild(titleEl);

      const tbl = document.createElement("table");

      var more = 0;
      var h1;

      for (
        var schechik1 = 0;
        schechik1 < personObj.subjects.length;
        schechik1++
      ) {
        var d = getArrFromString(personObj.subjects[schechik1].grades);
        var d1 = d.length;
        if (d1 > more) {
          more = d1;
          h1 = schechik1;
        }
      }

      for (
        var schechik2 = 0;
        schechik2 < personObj.subjects.length;
        schechik2++
      ) {
        var pyct_elem1 = getArrFromString(personObj.subjects[h1].grades);
        var pyct_elem2 = pyct_elem1.length;
        const row = document.createElement("tr");
        tbl.appendChild(row);

        const txt1 = document.createTextNode(
          personObj.subjects[schechik2].name
        );

        const elem1 = document.createElement("td");
        elem1.appendChild(txt1);
        row.appendChild(elem1);

        var arr_function = getArrFromString(
          personObj.subjects[schechik2].grades
        );

        for (var schechik3 = 0; schechik3 < arr_function.length; schechik3++) {
          const txt = document.createTextNode(arr_function[schechik3]);

          const elem = document.createElement("td");
          elem.appendChild(txt);
          row.appendChild(elem);
        }
        for (
          var schechik4 = 0;
          schechik4 < pyct_elem2 - arr_function.length;
          schechik4++
        ) {
          const txt0 = document.createTextNode(" ");

          const elem0 = document.createElement("td");
          elem0.appendChild(txt0);
          row.appendChild(elem0);
        }

        rootTbl.appendChild(tbl);
      }

      tbl.setAttribute("border", "2");
      tbl.setAttribute("cellSpacing", "0");
    }

    const root = document.getElementById("logo");
    root.style.backgroundColor = "white";
    root.style.paddingLeft = "10%";

    data.forEach((item) => {
      const divContainer = document.createElement("div");
      root.appendChild(divContainer);
      Table(divContainer, item);
    });

    // console.info('info', { res: Table(data[0]) })
  }
)()(
  //Previous probably Anna's version
  () => {
    const root = document.getElementById("logo");
    root.style.backgroundColor = "white";
    root.innerHTML = "Таблица успеваемости";

    const data = [
      {
        name: "Anna",
        period: "4-я четверть",
        subjects: [
          { name: "Англ. яз.", grades: "5 5 5 5	" },
          { name: "Биология", grades: "5 5 5	" },
          { name: "В мире любимых книг", grades: "" },
          { name: "География", grades: "5 5 5 5" },
          { name: "ИЗО", grades: "5 5 5	0	0	0	5" },
          { name: "Информатика", grades: "5 5 5 4" },
          { name: "История", grades: "5 5 5	" },
          { name: "Литерат.", grades: "5 5 5 5 5 5" },
          { name: "Матем.", grades: "5 4 5 5 4 5 5" },
          { name: "Музыка", grades: "5" },
          { name: "наглядная геметрия", grades: "5" },
          { name: "Обществознание", grades: "5" },
          { name: "Рус. язык", grades: "5 5 5 5 5 5 5 5 5 5" },
          { name: "Технол.", grades: "5 НЗ 5" },
          { name: "Физкульт.", grades: "5 4 4 5 5 5 5 5 5" },
          { name: "Экология Урала", grades: "5 5" },
        ],
      },
      {
        name: "Alena",
        period: "4-я четверть",
        subjects: [
          { name: "Алгебра", grades: "5 4 4 4 5 5" },
          { name: "Англ. яз.", grades: "5 5 5 5 5 5 5" },
          { name: "Биология", grades: "4 4 5 5" },
          { name: "География", grades: "4 5 3 3 4 4" },
          { name: "Геометрия", grades: "4 5 5 5 НЗ 5 5 5" },
          { name: "Информатика", grades: "5 5 5 5 5" },
          { name: "Информатика*", grades: "3 5 5 5" },
          { name: "История", grades: "5 4 4 4 НЗ 4" },
          { name: "Литерат.", grades: "5 5 5 5 5 5 5 5" },
          { name: "Матем *", grades: "5 5 5 5" },
          { name: "Немецкий язык", grades: "5 5 5" },
          { name: "ОБЖ", grades: "5 5" },
          { name: "Обществознание", grades: "3 5 НЗ" },
          { name: "Практ. риторика", grades: "0	0	0" },
          { name: "Рус. язык", grades: "5 5 5 5 5 5 5 5" },
          { name: "Физика", grades: "4 5 4 5 4" },
          { name: "Физкульт.", grades: "5 5 5 5 5" },
          { name: "Химия", grades: "4 4 4 5 5" },
        ],
      },
    ];
  }
)()(
  /**
   * @description Task 1. For array 1, filter graders more than 2 and less 5 and calculate average
   * @description Task 2. For array 2, multiply every memeber by 2 and if more than 5, make 5
   * @description Task 3. For array 3, subtract 1 from all odd numbers but more than 3
   * @description Use data javascript methods forEach, filter, map
   * @link https://learn.javascript.ru/array-iteration
   * @price 200
   */
  () => {
    const arr1 = [4, 5, 3, 3, 4, 4];
    const arr2 = [4, 2, 3, 2, 3, 3, 4];
    const arr3 = [5, 5, 4, 4, 4, 5, 5];
  }
)()(
  /**
   * @description Task. Develop a soring functions by columns and rows
   * @price 200 + 200
   */

  () => {
    const massiv1 = [
      [0, 1, 3], // Это строка
      [5, 0, 0],
      [0, 9, 0],
    ];
    const uniq = [2, 5, 10, 4, 6, 52];

    function sortColumn(massiv, column) {
      return massiv;
    }

    function sortRow(massiv, row) {
      return massiv;
    }
    let res = sortColumn(massiv1, 1);
    let resModel = [
      [0, 0, 3], // Это строка
      [5, 1, 0],
      [0, 9, 0],
    ];

    res = sortRow(massiv1, 1); // Отчяет начинается с 0
    resModel = [
      [0, 1, 3], // Это строка
      [0, 0, 5],
      [0, 9, 0],
    ];

    const arr = [
      ["x", "o", "x"],
      ["o", "x", "o"],
      ["x", "o", "x"],
    ];
    console.info("info", { arr, massiv1, res });
  }
)()(() => {
  const massiv12 = [
    [0, 1, 3], // Это строка
    [5, 0, 0],
    [0, 9, 0],
  ];

  function sortString(massiv, row1) {
    let massiv1 = [];

    let massiv_result = [[], [], []];

    massiv.forEach((item0, schechik0) => {
      if (schechik0 === row1) {
        item0.forEach((item1) => {
          massiv1.push(item1);
        });
      }
    });

    massiv1.sort();

    massiv.forEach((item00, schechik00) => {
      if (schechik00 != row1) {
        item00.forEach((item01, schechik01) => {
          massiv_result[schechik00].push(item01);
        });
      } else {
        massiv1.forEach((item02, schechik02) => {
          massiv_result[schechik00].push(item02);
        });
      }
    });

    return massiv_result;
  }

  console.info("info", { res: sortString(massiv12, 1) });
})()(
  /**
   * @description Task. Develop a function to find unique values of the array (hash algorithm)
   * @price 100
   */

  () => {
    const massiv1 = [2, 5, 10, 4, 4, 6, 52, 5];
    const uniq = [2, 5, 10, 4, 6, 52];

    function Task5(massiv) {
      const obj = {};
      massiv.forEach((item) => {
        obj[item] = true;
      });
      let massiv2 = Object.keys(obj);
      massiv2 = massiv2.map((item) => {
        return parseInt(item, 10);
      });
      return massiv2;
    }
    var f = Task5([2, 5, 10, 4, 4, 6, 52, 5, 4, 4, 4, 4, 4, 4]);
    console.info("info", { f });
  }
)()(
  /**
   * @description Task. Develop a function to find unique values of the array
   * @price 150
   */

  // Anna's solution 2020-05-31
  () => {
    function Task4(massiv) {
      let massiv2 = [];

      massiv.forEach((item, i) => {
        var opredelitor = 0;
        massiv2.forEach((elem1) => {
          if (elem1 === item) {
            opredelitor++;
          }
        });

        if (opredelitor === 0) {
          massiv2.push(item);
        }
      });

      return massiv2;
    }

    const array1 = [2, 5, 10, 4, 4, 6, 52, 5, 4, 4, 4, 4, 4, 4];
    const uniq = [2, 5, 10, 4, 6, 52];

    var result = Task4(array1);
    console.info("info", { result });
  }
)()(() => {
  const massiv = [2, 5, 10, 4, 4, 6, 52, 5];
  const uniq = [2, 5, 10, 4, 6, 52];

  const funcUniq = (massiv) => {};

  const uniqArr = funcUniq(massiv);
  console.info("info", { massiv, uniqArr });
})()(() => {
  const massiv = [2, 5, 10, 4, 4, 6, 52, 5];
  const uniq = [2, 5, 10, 4, 6, 52];

  const funcUniq = (massiv) => {
    let copy = massiv;
    let newArr = [];

    massiv.forEach((item, i) => {
      let count = 0;
      for (let k = 0; k < newArr.length; k += 1) {
        if (item === newArr[k] && count === 0) {
          // console.info('cycle2', { i, item, k, elem: newArr[k], count, newArr })
        } else {
          continue;
        }
      }

      // console.info('cycle1', { i, item })
    });
    console.info("cycle1", { massiv, newArr });
  };

  funcUniq(massiv);
})()(
  /**
   * @description Task to create an algorithm to detect if the second arr contains first one
   * @description Write the arrow function and use only forEach and filter methods
   * @link https://learn.javascript.ru/array-iteration
   * @price 200
   */

  () => {
    const grades = [5, 5, 3, 4, 4, 5, 4];
    const gradesPupkin = grades.filter((item) => item < 5);
    const gradesZaharov = grades.map((item) => {
      return item - 1;
    });
    let sum = 0;
    let num = 0;
    grades.forEach((item) => {
      sum = sum + item;
      num = num + 1;
    });
    const average = sum / num;
    console.info("info", { grades, average, gradesPupkin, gradesZaharov });
  }
)()(
  /**
   * @description Algorithm Verify a prime number
   * @example prime numbers: 1, 3, 5, 13, 53
   * @example NOT prime numbers 2, 14, 55
   * @link https://learn.javascript.ru/array-iteration
   * @price 100
   */

  () => {
    var num1 = 1.9;
    var num2 = 2;
    var result, delenie, result1;
    var schechik = 0;

    function function_number_one(num2) {
      var res = Math.floor(num2);
      if (num2 === res) {
        result1 = 1;
        return 1; // result ;
      } else {
        result1 = 0;
        return 0; // result;
      }
    }

    function function_number_two(num1) {
      for (var sch1 = 1; sch1 <= num1; sch1++) {
        delenie = num1 / sch1;
        if (function_number_one(delenie) === 1) {
          schechik++;
        }
      }
      if (schechik === 2) {
        result = "Простое число";
      } else {
        result = "Сложное число";
      }
      console.info("info", { result });
    }
    var function_result1 = function_number_two(59);
    var function_result2 = function_number_two(58);
    console.info("info", { function_result1, function_result2 });
  }
)()(
  /**
   * @description Algorithm Verify an interger
   * @example integers 1, 5, 8
   * @example NOT integers 1.2, 3.1, 34.5
   * @price 100
   */
  () => {
    var num1 = 1.9;
    var num2 = 2;
    var result;

    function f1(num) {
      var res = Math.floor(num);
      if (num === res) {
        result = "Целое число";
        console.info("info", { result });
      } else {
        result = "Вещественное число";
        console.info("info", { result });
      }
    }
  }
)()(
  /**
   * @description Task to create an algorithm to detect if the second arr contains first one
   * @author Anna Cheskidova
   */
  () => {
    var ar1 = [9, 0, 7, 6, 8];
    var ar2 = [1, 2, 9, 0, 7, 6, 8];
    var ar3 = [2, 3, 4, 5, 9, 8];
    var ar4 = [9, 0, 7, 6, 8, 1];
    var ar5 = [9, 0, 7, 6, 8, 1, 9];

    function myRegFunction(ar1, ar2) {
      var sch = 0;
      var result;

      for (var r = 0; r < ar2.length; r++) {
        for (var e = 0; e < ar1.length; e++) {
          if (ar2[r] === ar1[e]) {
            sch++;
          }
        }
      }

      if (sch === ar1.length) {
        result = "Второй массив содержит первый массив";
      } else {
        result = "Второй массив НЕ содержит первый массив";
      }

      // console.info('info', { result });
      return result;
    }

    const myArrFunction = (ar1, ar2) => {
      var sch = 0;
      var result;

      for (var r = 0; r < ar2.length; r++) {
        for (var e = 0; e < ar1.length; e++) {
          if (ar2[r] === ar1[e]) {
            sch++;
          }
        }
      }

      if (sch === ar1.length) {
        result = "Первый массив содержит второй массив";
      } else {
        result = "Первый массив НЕ содержит второй массив";
      }

      // console.info('info', { result });
      return result;
    };

    const res11 = myRegFunction(ar1, ar2);
    const res12 = myRegFunction(ar1, ar3);
    const res14 = myRegFunction(ar4, ar2);
    const res15 = myRegFunction(ar5, ar2);
    const res21 = myArrFunction(ar1, ar2);
    const res22 = myArrFunction(ar1, ar3);

    console.info("info", { res11, res12, res21, res22, res14, res15 });
  }
)()(
  /*
Задача - создать код, который вставляет на пустую страницу гуугл таблицу с оценками.

Матем. 5 4 5 5 4	
Физкультура 5 4 4

Начало кода:
(() => {
  const root = document.getElementById('logo')
  root.style.backgroundColor = 'white'
  root.innerHTML = 'test'

})()

  Использовать новые методы:
    document.getElementById
    createTextNode
    createElement
    appendChild

  Возможная структура данных:
    const data = [
      {subject: 'Математикаэ', grades: [5, 4, 5, 5, 4]},
      {subject: 'Физкультура', grades: [5, 4, 4]},
    ]

  Сделаешь полностью сама - 500 руб.
  Сделаешь с моей помощью - 300 руб.
  Выбирай
*/

  () => {
    const root = document.getElementById("logo");
    root.style.backgroundColor = "white";
    root.innerHTML = "Таблица успеваемости";

    const data = [
      { name: "Математика", grades: [5, 4, 5, 5, 4] },
      { name: "Физкультура", grades: [5, 4, 4] },
      { name: "Литература", grades: [5, 4, 4] },
    ];

    /*
   document.getElementById
    createTextNode
    createElement
    appendChild
*/

    const tbl = document.createElement("table");
    root.appendChild(tbl);

    for (var r = 0; r < data.length; r++) {
      const row = document.createElement("tr");
      tbl.appendChild(row);

      const sub = data[r];
      for (var e = 0; e < data[0].grades.length + 1; e++) {
        console.info("цикл е", { e, txt: sub.grades[e] });
        var sd;
        if (e === 0) {
          sd = sub.name;
        } else {
          sd = sub.grades[e - 1];
        }
        if (sd === undefined) {
          sd = "*";
        }
        const txt = document.createTextNode(sd);

        const elem = document.createElement("td");
        elem.appendChild(txt);
        row.appendChild(elem);
      }
    }

    tbl.setAttribute("border", "2");
    tbl.setAttribute("cellSpacing", "0");
  }
)()(() => {
  const root = document.getElementById("logo");
  root.style.backgroundColor = "white";

  const data = [
    { subject: "Математикаэ", grades: [5, 4, 5, 5, 4] },
    { subject: "Физкультура", grades: [5, 4, 4] },
  ];

  const tbl = document.createElement("table");
  tbl.style.borderCollapse = "collapse";

  for (var r = 0; r < data.length; r += 1) {
    const row = document.createElement("tr");
    tbl.appendChild(row);
    const subject = data[r].subject;
    const grades = data[r].grades;

    for (var e = 0; e < 5; e += 1) {
      var str;
      if (grades[e] !== undefined) {
        str = grades[e];
      } else {
        str = "";
      }
      const text = document.createTextNode(str);

      const elem = document.createElement("td");
      elem.appendChild(text);
      elem.style.border = "solid";
      elem.style.color = "black";
      elem.style.borderWidth = "1px";

      row.appendChild(elem);
    }
  }

  root.appendChild(tbl);
})();
