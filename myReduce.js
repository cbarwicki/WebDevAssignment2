// REDUCE //

Array.prototype.myReduce = function reduce(callback, accumulator)
{
    for (let x = 0; x < this.length; x++)
    {
      if (accumulator === undefined)
      {
        return accumulator = this[x];
      }
      else
      {
        accumulator = callback(accumulator, this[x]);
      }   
    }
    return accumulator;
}

// TEST
// const myArray = [1, 2, 3, 4, 5];

// console.log(myArray.myReduce((accumulator, element) => accumulator + element, 0));
// // expected output: 15
// console.log(myArray.reduce((accumulator, element) => accumulator + element, 0));
// // expected output: 15
// console.log(myArray.myReduce((accumulator, element) => accumulator + element, 47));
// // expected output: 62
// console.log(myArray.reduce((accumulator, element) => accumulator + element, 47));
// // expected output: 62