// Arrays
let selectedColors = ['red', 'blue'];
console.log(selectedColors);
// Adding Element
selectedColors[2] = 'brown';
console.log(selectedColors);

//print the first element
console.log(selectedColors[0]);

console.log(typeof selectedColors);

// this gives the total number of elements in an array
console.log(selectedColors.length);

//  array with mixed data types
let mixedArr = ['work','sleep',1,true];
// Add element to the end
mixedArr.push('dream');
console.log(mixedArr);

//add an element at the start
mixedArr.unshift('run');
console.log(mixedArr);

// sorting elements in the alphabetical order
mixedArr.sort();
console.log(mixedArr);



