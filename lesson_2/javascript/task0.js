"use strict";
//Обчислити значення виразів
//Крок 1. Введення необхідних даних
const a = parseFloat(prompt('a=', '0'));
const b = parseFloat(prompt('b=', '0'));
const c = parseFloat(prompt('c=', '0'));
//Крок 2. Обчислення результатів
const s1 = a + 12 + b;
const s2 = Math.sqrt((a + b) / (2 * a));
const s3 = Math.cbrt((a + b) * c);
const s4 = Math.sin(a / (-b));
//Крок 3. Виведення
document.write(`S1=${s1}<br>`);
document.write(`S2=${s2}<br>`);
document.write(`S3=${s3}<br>`);
document.write(`S4=${s4}`);
