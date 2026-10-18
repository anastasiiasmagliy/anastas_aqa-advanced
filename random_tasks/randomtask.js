/* 

А тепер додамо ще одну маленьку сходинку: filter() уже вміємо, тож спробуємо відфільтрувати об'єкти й отримати з них лише потрібну інформацію.

Маємо замовлення:

const orders = [
    { id: 101, status: 'completed', amount: 250 },
    { id: 102, status: 'failed', amount: 400 },
    { id: 103, status: 'completed', amount: 150 },
    { id: 104, status: 'pending', amount: 300 },
    { id: 105, status: 'completed', amount: 500 }
];

Твоє завдання:

Напиши функцію isCompleted(order), яка повертає true, якщо статус замовлення — 'completed'.

Через filter() створи масив лише із завершеними замовленнями.

Виведи в консоль лише суми цих замовлень: 250, 150, 500.

Порахуй загальну кількість завершених замовлень через .length.

*/

const orders = [
    { id: 101, status: 'completed', amount: 250 },
    { id: 102, status: 'failed', amount: 400 },
    { id: 103, status: 'completed', amount: 150 },
    { id: 104, status: 'pending', amount: 300 },
    { id: 105, status: 'completed', amount: 500 }
];


function isCompleted(order) {
    if (order.status === 'completed') {
        return true;
    } else {
        return false;
    }
}

const newOrders = orders.filter(isCompleted);

console.log(newOrders.map(function(order) {
    return order.amount;
}));
console.log (newOrders.length)



/* 
const testTimes = [5, 12, 8, 20];

const newResults = testTimes.map
(function (result)
{return (result) + ' сек.'});

console.log(newResults);

const testCases = [
    'Успішна реєстрація',
    'Порожній email',
    'Слабкий пароль',
    'Email уже зареєстрований'
];

testCases.splice(2, 1, 'Пароль із пробілами');
console.log (testCases)

/* const testCases = [
    'Успішна реєстрація',
    'Порожній email',
    'Слабкий пароль',
    'Email уже зареєстрований'
];

console.log (testCases [1])


const results = ['passed', 'failed', 'passed', 'passed'];

function countPassed(results) {

    return results === 'passed'
}

const newArray = results.filter (countPassed);

console.log(newArray.length); // 3
// 

*/ 

