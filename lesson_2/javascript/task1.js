"use strict";
//Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці
//Крок 1. Введення необхідних даних
const number1 = parseFloat(prompt('Перше число', '0'));
const number2 = parseFloat(prompt('Друге число', '0'));
//Крок 2. Обчислення результатів
const sum = number1 + number2;
const product = number1 * number2;
const division = number1 / number2;
//Крок 3. Виведення
// document.write(`Сума двох чисел=${sum}`)
// document.write(`Добуток двох чисел=${product}`)
// document.write(`Частка двох чисел=${division}`)
document.write(`
  <table class='tabl'>
    <thead>
      <tr>
        <th>Операція</th>
        <th>Перше число</th>
        <th>Друге число</th>
        <th>Результат</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Сума (a + b)</td>
        <td>${number1}</td>
        <td>${number2}</td>
        <td>${sum}</td>
      </tr>
      <tr>
        <td>Добуток (a × b)</td>
        <td>${number1}</td>
        <td>${number2}</td>
        <td>${product}</td>
      </tr>
      <tr>
        <td>Частка (a ÷ b)</td>
        <td>${number1}</td>
        <td>${number2}</td>
        <td>${division}</td>
      </tr>
    </tbody>
  </table>
`);
