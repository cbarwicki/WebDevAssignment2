// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement, fromIndex) {
    if (fromIndex === undefined){
        fromIndex = this.length - 1;
    }
    for (let i = fromIndex; i > 0; i--) {
        if (this[i] === searchElement){
            return i;
        }
    }
    return -1;
};

// TEST
// const animals = ['Dodo', 'Tiger', 'Tiger', 'Penguin', 'Dodo'];

// // LASTINDEXOF:
// console.log("lastIndexOf:");
// console.log(animals.lastIndexOf('Dodo'));
// // expected output: 4

// console.log(animals.lastIndexOf('Tiger'));
// // expected output: 2

// // MYLASTINDEXOF:
// console.log("myLastIndexOf:");
// console.log(animals.myLastIndexOf('Dodo'));
// // expected output: 4

// console.log(animals.myLastIndexOf('Tiger'));
// // expected output: 2
