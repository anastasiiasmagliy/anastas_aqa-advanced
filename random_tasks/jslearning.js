/* Тепер перевіримо, наскільки впевнено ти працюєш із масивом об'єктів.

Уявімо, що в тебе є результати автоматизованих QA-тестів:


Напиши функцію getFailedTests(testCases), яка повертає масив назв усіх тестів зі статусом failed.

Очікуваний результат:
console.log(getFailedTests(testCases));
// ['Registration', 'Withdrawal']


Умови: використай for...of, не використовуй filter() і map(),
повертай масив через return, а 
якщо тестів зі статусом failed немає — повертай порожній масив [].

Підказка: пригадай метод push(). І зверни увагу, що потрібно повертати не весь об'єкт, а лише його властивість name.

Це завдання особливо цікаве, бо раніше ми вже працювали з подібним масивом,
але тоді ти виводила назви тестів через console.log(). Тепер перевіримо, чи зможеш зібрати їх у новий масив і повернути з функції.*/

const testCases = [
  { id: 1, name: "Login", status: "passed" },
  { id: 2, name: "Registration", status: "failed" },
  { id: 3, name: "Deposit", status: "passed" },
  { id: 4, name: "Withdrawal", status: "failed" },
  { id: 5, name: "Logout", status: "blocked" },
];

function getFailedTests(testCases) {
  let result = [];
  for (const num of testCases) {
    if (num.status === "failed") {
      result.push(num.name);
    }
  }

  {
    return result;
  }
}
console.log(getFailedTests(testCases));

/* 
function findLargestEven(numbers) {
  let result = null;
  for (const num of numbers) {
    if (num % 2 === 0 && (result === null || result < num)) {
      result = num;
    }
  }
  return result;
}

console.log(findLargestEven([3, 8, 12, 5, 7, 10])); // 12
console.log(findLargestEven([2, 4, 18, 6])); // 18
console.log(findLargestEven([1, 3, 5, 7])); // null
console.log(findLargestEven([])); // null
console.log(findLargestEven([-8, -4, -2])); // -2
const numbers = [3, 8, 12, 5, 7, 10];
function sumEvenNumbers(numbers) {
  let sum = 0;

  for (const num of numbers) {
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
}

console.log(sumEvenNumbers(numbers));*/
