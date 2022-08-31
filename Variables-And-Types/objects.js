// Objects

let name = 'Mike';
let age = 30;


let person = {
    name: 'Mike',
    age: 27
}; //object literal

console.log(person);


//Change attribute with dot notation
person.age = 32;

// Bracket Notation (array-like notation)
person['name']='John';

console.log(person.name);

// Adding a new property to an object
person.balance = '652';
console.log(person);

// Delete property
delete person.age;
console.log(person);

//Checking if a property exists
console.log('ssn' in person);
console.log('balance' in person);



