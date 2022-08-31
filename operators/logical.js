let highIncome = false;
let goodCredit = true;
let eligibleForLoan = highIncome && goodCredit;
console.log('Eligible', eligibleForLoan);

// Logical OR (||)
console.log('Fit one condition', highIncome || goodCredit);
// Not (!)
let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);

//Falsy (false)
// * undefined
// * null
// * 0
// * NaN
// * ''
// * false

console.log(false || 'test');

// Short-circuting
console.log(false || 1 || 2)


let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);