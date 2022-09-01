const person = {
    name: 'Yossi',
    age: 30
}

//Dot Notation
person.name

//Bracket notation
person['name']

for (let key in person)
    console.log(key, person[key])


const colors = ['red', 'green', 'blue'];

for (let index in colors)
    console.log(index, colors[index])