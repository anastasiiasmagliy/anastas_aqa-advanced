/* Завдання 5
Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
Зробіть деструктуризацію в циклі

/*/

const users = [
    {name: "Oleh",
        email: "random@gmail.com",
        age: 13
    }];

for (element of users ) {
    const { name, email, age } = element; 
console.log (name, email, age);}