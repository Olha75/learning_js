"use strict";
//З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься
//Крок 1. Введення необхідних даних
const numberMonth = parseInt(prompt('Введіть номер місяця від 1 до 12', '1'));
let season;
//Крок 2. Обчислення результатів
switch (numberMonth) {
    case 1: season = 'Зима';
    case 2: season = 'Зима';
    case 12:
        season = 'Зима';
        break;
    case 3: season = 'Весна';
    case 4: season = 'Весна';
    case 5:
        season = 'Весна';
        break;
    case 6: season = 'Літо';
    case 7: season = 'Літо';
    case 8:
        season = 'Літо';
        break;
    case 9: season = 'Осінь';
    case 10: season = 'Осінь';
    case 11:
        season = 'Осінь';
        break;
    default:
        season = 'Номер місяця введено невірно. Спробуйте ще.';
        break;
}
document.write(season);
//Крок 3. Виведення
