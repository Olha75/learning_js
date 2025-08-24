"use strict";
//Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості)
//Крок 1. Введення необхідних даних
const onePiece = parseFloat(prompt('Введіть вартість за одиницю товару в грн', '0'));
const numberPiece = parseInt(prompt('Введіть кількість штук', '0'));
const taxFivePercent = 0.05;
//Крок 2. Обчислення результатів
const totalCost = onePiece * numberPiece;
const taxTotalCost = totalCost * taxFivePercent;
//Крок 3. Виведення
document.write(`Загальна вартість за товар = ${totalCost.toFixed(2)} грн<br>`);
document.write(`ПДВ 5% = ${taxTotalCost.toFixed(2)} грн`);
