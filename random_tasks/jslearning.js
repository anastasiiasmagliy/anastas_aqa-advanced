/* Клас TestCase
Уявімо, що ти створюєш систему для зберігання результатів QA-тестів.

Створи клас TestCase, який приймає в конструкторі три параметри:
- id — номер тесту.
- name — назва тесту.
- status — статус (passed, failed, blocked).
Клас повинен мати два методи:

isFailed() — повертає true, якщо статус тесту failed, інакше false.

getInfo() — повертає рядок у форматі:
Test #2: Registration — failed



Приклад використання
Тобі потрібно написати клас так, щоб цей код працював:
const test1 = new TestCase(1, "Login", "passed");
const test2 = new TestCase(2, "Registration", "failed");

console.log(test1.isFailed()); // false
console.log(test2.isFailed()); // true

console.log(test1.getInfo());
// Test #1: Login — passed

console.log(test2.getInfo());
// Test #2: Registration — failed


Невеликі підказки
Каркас класу:
class TestCase {
    constructor(id, name, status) {
        // Збережи три властивості
    }

    isFailed() {
        // Перевір статус
    }

    getInfo() {
        // Поверни рядок
    }
}


Пригадай, що this.status звертається до властивості конкретного екземпляра класу, а для формування рядка зручно використовувати шаблонні літерали з ${...}.

Умови: використовуй return в обох методах, не виводь результат через console.log() усередині класу та не використовуй готових сторонніх функцій.

Спробуй написати весь клас самостійно. Якщо щось не виходитиме, надсилай навіть незавершений код — будемо розбирати саме той момент, де ти застрягла.*/

class TestCase {
    constructor (id, name, status) {
    this.id = id;
    this.name = name;
    this.status = status;
}
    

getInfo() {
    return `Test #${this.id}: ${this.name} — ${this.status}`};

isFailed() {
    if (this.status === "failed") {
        return true;}
return false;}

    }

const test1 = new TestCase(1, "Login", "passed");
const test2 = new TestCase(2, "Registration", "failed");

console.log(test1.isFailed()); // false
console.log(test2.isFailed()); // true

console.log(test1.getInfo()); // false
console.log(test2.getInfo()); // true
/* 
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
