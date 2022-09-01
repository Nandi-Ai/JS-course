const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const another = Object.assign({}, circle)
console.log(another);

const yetAnother = { ...circle};
console.log(yetAnother);

const cloneCircle = {};
for (let key in circle)
    cloneCircle[key] = circle['key'];