

function greet(name, lastName) { // name and lastName are parameters of the function
    console.log('Hello '+ name + ' ' + lastName + '!');
}

function square(number) {
    return number * number 
}

greet('Baruch', 'Levi'); // 'Baruch' and 'Levi' are arguments for the function
greet('Mary', 'Jane'); // 'Baruch' and 'Levi' are arguments for the function

let answer = square(21);
console.log(answer);
