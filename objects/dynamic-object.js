const circle = {
    radius: 10
};

circle.color = 'yellow';
circle.draw = function () {};

console.log(circle);

delete circle.draw;
console.log(circle);

// circle = {};
