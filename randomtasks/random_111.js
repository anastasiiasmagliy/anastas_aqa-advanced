/* 

🔵 Завдання 4. Фільтрація тест-кейсів
А тепер щось ближче до твоєї роботи QA.

Є масив результатів тестування:
const testResults = [
    'passed',
    'failed',
    'passed',
    'blocked',
    'failed',
    'passed'
];

За допомогою for...of порахуй, скільки тестів мають статус failed.

Очікуваний результат:
Failed tests: 2

Підказка: створи лічильник, який збільшуватиметься на 1 щоразу, коли зустрінеш 'failed'.
🔴 Завдання 5. Масив об'єктів
Це вже максимально наближено до реальних задач у JavaScript.

Є масив тест-кейсів:
const testCases = [
    { id: 1, name: 'Login', status: 'passed' },
    { id: 2, name: 'Registration', status: 'failed' },
    { id: 3, name: 'Deposit', status: 'passed' },
    { id: 4, name: 'Withdrawal', status: 'failed' },
    { id: 5, name: 'Logout', status: 'blocked' }
];

За допомогою for...of знайди всі тест-кейси зі статусом 'failed' і виведи їхні назви.

Очікуваний результат:
Registration
Withdrawal

Підказка: кожен елемент масиву — це об'єкт. Тому можна звертатися до його властивостей через крапку:
testCase.status
testCase.name

Як працюємо далі: надсилай розв'язок першого завдання, я перевірю. Потім друге, третє і так до п'ятого.
*/

const testResults = [
    'passed',
    'failed',
    'passed',
    'blocked',
    'failed',
    'passed'
];

function checkResults(testResults) {
    let amountFailed = 0;

    for (const num of testResults) {
        if (num === 'failed') {
            amountFailed++;
        }
    }

    return amountFailed;
}

console.log(`Failed tests: ${checkResults(testResults)}`);
/*

const prices = [150, 320, 90, 780, 450];

function findBiggest (prices) {

let maxPrice = prices[0]
for (const num of prices)
    if (num > maxPrice)
{ maxPrice = num;
}
{return maxPrice}
}

console.log(findBiggest(prices))


const prices = [120, 250, 80, 150, 400];
let total = 0;
function getSum (prices) {
for (const current of prices) {
total = total + current;

}}

getSum (prices)
console.log(total); 
 
const numbers = [3, 8, 12, 7, 15, 20, 9, 4]; 

function numCheck (numbers){
for (const num of numbers) 
    if (num % 2 === 0)
{console.log (num)}}

numCheck(numbers)
*/
