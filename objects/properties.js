// Factory Functions

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
        
    };
}

const circle = createCircle(8);

// Constructor Function

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const anotherCircle = new Circle(10);

