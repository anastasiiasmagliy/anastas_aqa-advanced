/* 

.
Завдання 2. Сума покупок
Є масив цін:
const prices = [120, 250, 80, 150, 400];

За допомогою for...of порахуй загальну суму всіх покупок.

Очікуваний результат:
1000

Підказка: створи змінну let total = 0 перед циклом. Усередині циклу додавай до неї кожну ціну.

*/

const prices = [120, 250, 80, 150, 400];
let total = 0;
function getSum (prices) {
for (const current of prices) {
total = total + current;

}}

getSum (prices)
console.log(total); 


/* 
const numbers = [3, 8, 12, 7, 15, 20, 9, 4]; 

function numCheck (numbers){
for (const num of numbers) 
    if (num % 2 === 0)
{console.log (num)}}

numCheck(numbers)
*/
