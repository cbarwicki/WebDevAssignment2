// SOME //
Array.prototype.mySome = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (callbackFn(this[i], i, this)){
            return true;
        }
    }
    return false;
};

// TEST
// const array = [1, 2, 3, 5];

// // checks whether an element is even
// const even = (element) => element % 2 === 0;

// console.log("mySome:");
// console.log(array.mySome(even));

// console.log("some:");
// console.log(array.some(even));
// // expected output: true