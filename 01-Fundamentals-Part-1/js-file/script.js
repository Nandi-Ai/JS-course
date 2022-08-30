// Comment Google v8 JS
// let name = 'Baba';
// Cannot be reserved keyword
// Should be meaningful
// Cannot start with a number
// Cannot contain space or hyphen
// Camel Notation case-sensitive
let name = "Baba"; //String Literal
let age = 12; // Numebr Literal
let x = 10;
let y = 12;
let isDone = true; //Boolean
let yoyo= undefined; //undefined
let selectedColor = null; // clear value
let firstName = 'Shapi', lastName = 'Bulele';
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'brown';
selectedColors[4] = 1;
selectedColors[9] = 'white';
name = "Kukia"
typeof name;
let person = {
name: 'Babu',
age: 27
}; //object literal


function greet(name, lastName) {
    console.log('Hello '+ name + ' ' + lastName);
}

function square(number) {
    return number * number 
}
greet('Baruch', 'Levi');
age = square(21);
// dot notaion
person.name = "Odem";
// Bracket Notation
person['name'] = "Mary-Ann";
console.log(age);
console.log(selectedColors[1])
console.log(person);
console.log("Having fun with JS");
