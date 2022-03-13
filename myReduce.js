// REDUCE //
// #4 //
Array.prototype.myReduce = function (callbackFn, value) {
    for (let x = 0; x < this.length; x++) {
        value = callbackFn(value, this[x], x, this);
    }
    callbackFn (value);
};

//let myArray = [1, 2, 3, 4, 5];

//console.log(myArray.myReduce((value, element) => value + element));
//console.log(myArray.reduce((value, element) => value + element));