// INDEXOF //

Array.prototype.myIndexOf = function (target, fromIndex)
{
    if (fromIndex === undefined)
    {
        fromIndex = 0;
    }
    for (let x = fromIndex; x < this.length; x++)
    {
        if (this[x] === target)
        {
            return x;
        }
    }
    return -1;
}

// TEST
// const myArray = [1, 2, 3, 4, 5];
// const myOtherArray = [8, 1, 5, 3, 4, 7, 5];

// console.log(myArray.myIndexOf(2));
// // expected output: 1
// console.log(myArray.indexOf(2));
// // expected output: 1
// console.log(myArray.myIndexOf(8));
// // expected output: -1
// console.log(myArray.indexOf(8));
// // expected output: -1
// console.log(myArray.myIndexOf(2, 2));
// // expected output: -1
// console.log(myArray.indexOf(2, 2));
// // expected output: -1
// console.log(myArray.myIndexOf(2, 1));
// // expected output: 1
// console.log(myArray.indexOf(2, 1));
// // expected output: 1
// console.log(myOtherArray.myIndexOf(5, 1));
// // expected output: 2
// console.log(myOtherArray.indexOf(5, 1));
// // expected output: 2
// console.log(myOtherArray.myIndexOf(5, 4));
// // expected output: 6
// console.log(myOtherArray.indexOf(5, 4));
// // expected output: 6