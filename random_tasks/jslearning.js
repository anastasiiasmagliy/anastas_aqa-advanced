/* Напиши функцію findLargestEven(numbers), яка знаходить найбільше парне число в масиві.

Приклади:
console.log(findLargestEven([3, 8, 12, 5, 7, 10])); // 12
console.log(findLargestEven([2, 4, 18, 6]));        // 18
console.log(findLargestEven([1, 3, 5, 7]));         // null
console.log(findLargestEven([]));                   // null
console.log(findLargestEven([-8, -4, -2]));        // -2


Умови:
- Використай for або for...of.
- Не використовуй Math.max(), sort(), filter().
- Якщо парних чисел немає, поверни null.
- Функція має працювати також із від'ємними числами. */


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
