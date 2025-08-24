"use strict";
//Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.
//Крок 1. Введення необхідних даних
const lengthCentimeters = parseFloat(prompt('Введіть довжину у сантиметрах', '0'));
//Крок 2. Обчислення результатів
const lengthMeters = lengthCentimeters / 100; /*де 100 це кількість см у 1 м*/
const lengthKilometers = lengthCentimeters / 100000; /*де 100000 це кількість см у 1 км*/
//Крок 3. Виведення
document.write(`${lengthCentimeters} см це ${lengthMeters} м  або ${lengthKilometers} км`);
