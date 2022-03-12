// VALUES //
Object.myValues = function(obj) {
    const arr = [];
    for (const property in obj) {
        arr.push(obj[property]);
    }
    return arr;
};

// TEST
// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false,
//     d: 'data'
// };

// // VALUES:
// console.log(Object.values(object1));
// // expected output: Array ["somestring", 42, false]

// // MYVALUES:
// console.log(Object.myValues(object1));
  