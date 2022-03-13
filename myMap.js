// MAP //

Array.prototype.myMap = function(callbackFn)
{
    const newArray = [];
    for (let x = 0; x < this.length; x++)
    {
        if (this[x] === undefined)
        {
            continue;
        }
        newArray[x] = callbackFn(this[x], x);
    }
    return newArray;
};

// TEST
// const myArray = [1, 2, 3, 4, 5];

// console.log(myArray.myMap((element) => ++element));
// // expected output: [ 2, 3, 4, 5, 6 ]
// console.log(myArray.map((element) => ++element));
// // expected output: [ 2, 3, 4, 5, 6 ]
// console.log(myArray.myMap((element) => element === 1));
// // expected output: [ true, false, false, false, false ]
// console.log(myArray.map((element) => element === 1));
// // expected output: [ true, false, false, false, false ]