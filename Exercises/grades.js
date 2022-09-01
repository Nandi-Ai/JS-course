const marks = [77,88,89,65]
console.log(calculateGrade(marks))

function calculateGrade(marks) {
    let sum = 0;
    for (let mark of marks)
        sum += mark;
    let average = sum / marks.length;
    console.log(average)
}