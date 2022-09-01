let number = max (3,3);
console.log (number);


function max (a,b) {
    if (a>b) return a;
    return b;
    
// Better option
    return (a>b) ? a: b;


}