function createCircle(radius) {
    return {
        //radius: radius,
        radius,
        // location: {
        //     x:1,
        //     y:1
        // },
        draw() {
            console.log('draw');
        }
        
    };
}

const circle1 = createCircle(1);
console.log(circle1)
