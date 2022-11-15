//var subject= [['maths'],['physics'],['chemistry']]
//var average = 0
var marksEnter = 'enter the marks:';
var a = prompt(marksEnter);
console.log("====Assignment on function# GradeCalculator=====");
//var a = prompt(m,p,c);
function marks(m, p, c) {
    var average = (m + p + c) / 3;
    if (average <= 70) {
        return "marks:Average is ".concat(average, " and Your Grade is 'C'");
    }
    if (average >= 70 && average <= 90) {
        return "marks:Average is ".concat(average, " and Your Grade is 'B'");
    }
    else {
        return "marks:Average is ".concat(average, " and Your Grade is 'A'");
    }
}
// console.log(`marks of maths:40 physics:40 and chemistry:40 are`);
// marks(40,40,40);
console.log("*****************************************************************************");
console.log("Marks: Maths=35,Physics=40,Chemistry=40......");
console.log(marks(35, 40, 40));
console.log("*****************************************************************************");
console.log("Marks: Maths=72,Physics=80,Chemistry=75......");
console.log(marks(72, 80, 75));
console.log("*****************************************************************************");
console.log("Marks: Maths=95,Physics=90,Chemistry=95......");
console.log(marks(95, 90, 95));
console.log("*****************************************************************************");
