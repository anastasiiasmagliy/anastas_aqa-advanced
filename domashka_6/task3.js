// Завдання 3
// Створіть функцію checkOrder яка перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона приймає два параметри, значення яких будуть задаватися
//  під час її виклику.
// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Якщо товарів в наявності менше ніж замовлено — повернути рядок з повідомленням - “Your order is too large, we don’t have enough goods.”
// Якщо ordered дорівнює нулю — повернути рядок з повідомленням - “Your order is empty”
// У разі якщо товарів на складі вистачає — повернути рядок з повідомленням - “Your order is accepted”

let itemsAvailable = 6;
let itemsOrdered = 12;

   

function checkOrder (itemsAvailable, itemsOrdered) {

     if (itemsAvailable < 0 || itemsOrdered < 0 ) {
    return "impossible";
    }

    if (itemsOrdered === 0) {
        return "Your order is empty";
    }

    if (itemsAvailable < itemsOrdered) {
        return "Your order is too large, we dont have enough goods";
    }

    if (itemsAvailable >= itemsOrdered) {

        return "Your order is accepted";
    }
         
}

console.log (checkOrder (itemsAvailable, itemsOrdered));