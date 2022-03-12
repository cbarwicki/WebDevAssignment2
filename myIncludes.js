// INCLUDES //
Array.prototype.myIncludes = function(searchElement, fromIndex) {
    if (fromIndex === undefined){
        fromIndex = 0;
    }
    for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === searchElement){
            return true;
        }
    }
    return false;
};

// TEST
// const array1 = [1, 2, 3];

// // INCLUDES:
// console.log("includes:")

// console.log(array1.includes(2));
// // expected output: true

// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));
// // expected output: true

// console.log(pets.includes('at'));
// // expected output: false

// console.log(pets.includes('cat', 1));
// // expected output: false

// // MYINCLUDES:
// console.log("myIncludes:")

// console.log(array1.myIncludes(2));
// // expected output: true

// console.log(pets.myIncludes('cat'));
// // expected output: true

// console.log(pets.myIncludes('at'));
// // expected output: false

// console.log(pets.includes('cat', 1));
// // expected output: false

  