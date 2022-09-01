// program to display the sum of n natural numbers
let sum = 0;
const n = 100;

// looping from i = n to 1
// in each iteration, i is decreased by 1
for(let i = n; i >= 1; i-- ) {
    // adding i to sum in each iteration
    sum += i; // sum = sum + i
}

console.log('sum:',sum);

// While loop

// program to display numbers from 1 to 5
// initialize the variable
let x = 1, y = 5;

// while loop from x = 1 to 5
while (x <= y) {
    console.log(x);
    x += 1;
}



//Finding Odd numbers
console.log('Odd numbers')

for (let i = 0; i<=9; i++) {
    if (i % 2 != 0 ) console.log(i);
}


