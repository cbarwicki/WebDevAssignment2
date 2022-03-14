// MYKEYS //

Object.myKeys = function(obj)
{
    const newArray = [];
    for (const property in obj) {
        newArray.push(property);
    }
    return newArray;
};

// TEST
//const myArray = ['a', 'b', 'c'];
//const myOtherArray = { 100: 'd', 2: 'e', 7: 'f' };

// console.log(Object.myKeys(myArray));
// // expected output: [ '0', '1', '2' ]
// console.log(Object.keys(myArray));
// // expected output: [ '0', '1', '2' ]
// console.log(Object.myKeys(myOtherArray));
// // expected output: [ '2', '7', '100' ]
// console.log(Object.keys(myOtherArray));
// // expected output: [ '2', '7', '100' ]