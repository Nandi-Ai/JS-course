const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};


for (let key in circle)
    console.log(key, circle[key]);

for (let entry of Object.entries(circle))
    console.log(entry);


if ('radius' in circle)
    console.log('yes');