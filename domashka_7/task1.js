// Завдання 1 Створіть функцію handleNum яка буде приймати 3 параметри.
// число
// Колбек функцію яку треба викликати якщо передане число парне
// Колбек функцію яку треба викликати якщо передане число непарне
// Створіть ще дві функції які ви будете передавати у якості колбеків, наприклад handleEven та handleOdd. Кожна з них має виводити просте повідомлення в консоль.
// Наприклад handleEven буде виводити текст “number is even”, a handleOdd буде виводити текст “number is odd”
// Викличте функцію handleNum і передайте в якості аргументів довільне число і дві функції які ви створили раніше

/* function handleNum (randomNumber, ifTest) {

    ifTest (randomNumber); 
}

const ifTest = (randomNumber) => {
if (randomNumber % 2 === 0) {
    console.log (handleNum);
}
return (handleNum);
}

handleNum (3, ifTest, ifTest)

*/

function handleNum (randomNumber, handleEven, handleOdd) {
    if (randomNumber % 2 === 0) {
        handleEven();
    } else {
        handleOdd();
    }
}

function handleEven() { 
    console.log("number is even");
}

function handleOdd() {
    console.log("number is odd");
}

handleNum(10, handleEven, handleOdd);
