"use strict";
//З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься
//Крок 1. Введення необхідних даних
const numberMonth = parseInt(prompt('Введіть номер місяця від 1 до 12', '1'));
let season;
//Крок 2. Обчислення результатів
switch (numberMonth) {
    case 1:
    case 2:
    case 12:
        season = 'Зима';
        break;
    case 3:
    case 4:
    case 5:
        season = 'Весна';
        break;
    case 6:
    case 7:
    case 8:
        season = 'Літо';
        break;
    case 9:
    case 10:
    case 11:
        season = 'Осінь';
        break;
    default:
        season = 'Номер місяця введено невірно. Спробуйте ще.';
        break;
}
document.write(season);
//Крок 3. Виведення
