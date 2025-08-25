"use strict";
//Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).
//Крок 1. Введення необхідних даних
// const randomMonthNumber:number=parseInt(prompt('Введіть номер місяця від 1 до 12', '1')as string)
// const randomDayNumber:number=parseInt(prompt('Введіть номер дня від 0 до 6', '0')as string)
const randomMonthNumber = 1 + Math.floor(Math.random() * 12);
const randomDayNumber = Math.floor(Math.random() * 7);
//Крок 2. Обчислення результатів
const sumRandomNumbers = randomMonthNumber + randomDayNumber;
//Крок 3. Виведення
document.write(` Номер місяця  <b class='item'>${randomMonthNumber} </b>+  номер дня <b class='item'>${randomDayNumber}</b> = <b class='item'>${sumRandomNumbers}</b>`);
