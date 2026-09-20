// Завдання 1
// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

//1. 

let width = 15;
let height = 18;

function countSize(width, height) {

    let result = width * height; {

if (width <= 0 || height <= 0)  { 

    return "you shall not pass";
}
else {
    return result;}
}}
    console.log (countSize (width, height));

// 2.

let width1 = 15;
let height1 = -18;

let countSize1 = function (width1, height1) { {

    if (width1 <= 0 || height1 <= 0)  { 

    return "you shall not pass";
}

else {
    return width1 * height1;}
}}

console.log (countSize1 (width1, height1));

//3.

let width2 = -15;
let height2 = 18;

let countSize2 = (width2, height2) => {{

    if (width2 <= 0 || height2 <= 0)  { 

    return "you shall not pass";
}

else { 
    return width2 * height2;}
}}

console.log (countSize2 (width2, height2));