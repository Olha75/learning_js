"use strict";
//Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.
//Крок 1. Введення необхідних даних
const seconds = parseFloat(prompt('Введіть кількість секунд що пройшла від початку доби', '0'));
const oneMinute = 60;
const oneHour = 3600;
//Крок 2. Обчислення результатів
const hours = seconds / oneHour;
const minutes = seconds / oneMinute;
//Крок 3. Виведення
document.write(`Якщо з початку доби пройшло ${seconds} секунд, то це прошло ${hours} годин  або ${minutes} хвилин`);
