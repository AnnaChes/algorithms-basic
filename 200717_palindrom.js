(() => {
  var start_arr1 = "мадам ";
  var f = ["м", "а", "o", "а", "o"];

  function f1(massiv_start) {
    var f01 = massiv_start.split("");
    return f01;
  }

  function f2(modifind_array1) {
    let new_array1 = [];

    modifind_array1.forEach((item1) => {
      if (item1 != " ") {
        new_array1.push(item1);
      }
    });
    return new_array1;
  }

  function f3(modifind_array2) {
    let length = modifind_array2.length;
    let new_array2 = [];
    for (
      var schechik1 = length - 1;
      schechik1 <= length - 1 && schechik1 >= 0;
      schechik1 = schechik1 - 1
    ) {
      new_array2.push(modifind_array2[schechik1]);
    }
    return new_array2;
  }

  function f4(new_array1, new_array2) {
    var result;
    var opredelitor = 0;
    new_array1.forEach((item1, schechik1) => {
      if (item1 === new_array2[schechik1]) {
        opredelitor++;
      }
    });
    if (opredelitor === new_array1.length) {
      result = 1;
    } else {
      result = 0;
    }
    return result;
  }

  function f5(start_arr) {
    var fv1 = f1(start_arr);
    var fv2 = f2(fv1);
    var fv3 = f3(fv2);
    var fv4 = f4(fv2, fv3);

    return fv4;
  }

  console.info("info", { res: f5("aabb") });
})();
