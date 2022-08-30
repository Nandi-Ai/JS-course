'use strict'; // Strict Mode introduce the bugs into our code (create visible errors).

//function ***************************************************

/*
function logger() {
    console.log('My name is Reuven');
}

//calling / running

logger();
logger();
logger();
*/






/*
function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = 'Juice with ' + apples + 
    ' apple and ' + oranges + ' oranges';
    return juice;
}

//fruitProcessor(5, 0);
console.log(fruitProcessor(5, 0));
console.log(fruitProcessor(2, 4));
console.log(fruitProcessor(3, 1));
console.log(fruitProcessor(2, 2));
*/



/* 3# 
function ThisNumber(num1, num2, num3){
    console.log(num1, num2, num3);
    const result = num1 * num2 *num3;
    return result;
}
console.log(ThisNumber(2, 2, 2));
*/





/* #3 A
function ThisNumber(num1, num2, num3){

    console.log(num1, num2, num3);

    if(num1 > num2 && num1 > num3){
        return num1;
    }
    if(num2 > num1 &&  num2 >num3){
        return num2;
            }
     else{
          return num3;
                    }                                        
}
console.log(ThisNumber(3, 18, 2));
*/






/*
// Arrays*********************************************************

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

console.log(friend1, friend2, friend3);

const friends = ['Michael', 'Steven', 'Peter'];

console.log(friends);

//console.log(friends[0]);
//console.log(friends.length);
*/



/*
 const friends = ['Michael', 'Steven', 'Peter'];

 console.log(friends);

 // Add element
friends.push('Nissan');
console.log(friends);

friends.unshift('Boaz');
console.log(friends);
*/





/* 

// Remove element

const friends = ['Michael', 'Steven', 'Peter'];
friends.pop(); // Last
console.log(friends);

friends.shift(); // first
console.log(friends);
*/





// Objects****************

/*
const ReuvenArray = [
    'Reuven',
    'Paz',
    2022-1994,
    ['Shlomi', 'Meni', 'Or']
];
 console.log(ReuvenArray);

const ReuvenObj = {

firstName: 'Reuven',
lastName: 'Paz',
age: 2022 - 1994,
friends: ['Shlomi', 'Meni', 'Or']
};
console.log(ReuvenObj);
*/


/*
console.log(ReuvenObj.firstName + ' has '+ ReuvenObj.friends.length +
 ' friends, and his best friend called '+ ReuvenObj.friends[0]);

 //"Reuven has 3 friends, and his best friend called Shlomi"


//console.log(ReuvenObj);
//console.log(ReuvenObj.lastName)

//console.log(ReuvenObj['age'])
//console.log(ReuvenObj['friends'])
*/









// Loop for

/*
for(var i = 0; i< 3; i++){
    alert('Hello World');
};
*/




/*
    console.log('Lifting weights repetition 1')
    console.log('Lifting weights repetition 2')
    console.log('Lifting weights repetition 3')
    console.log('Lifting weights repetition 4')
    console.log('Lifting weights repetition 5')
    console.log('Lifting weights repetition 6')
    console.log('Lifting weights repetition 7')
    console.log('Lifting weights repetition 8')
    console.log('Lifting weights repetition 9')
    console.log('Lifting weights repetition 10')

   // for loop keeps running while condition is TRUE
   for (let rep = 1; rep <= 10; rep++){
    console. log('Lifting weights repetition'+ rep);
   }
*/

/*
const ReuvenArray = [
    'Reuven', 
    'Paz', 
    2022-1994,
     'teacher',
     ['Shlomi', 'Meni', 'Or'],
     'Car',
     1906,
     'Nandi'

];

   for(var i = 0; i < ReuvenArray.length; i++){
    console.log(ReuvenArray[i]);
   }

    */ 
