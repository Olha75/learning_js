"use strict";
//З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.
//Крок 1. Введення необхідних даних
const nameDriverCategory = prompt('Введіть назву категорії водія: A, B чи C', 'А');
let resultCategory;
//Крок 2. Обчислення результатів та виведення
switch (nameDriverCategory.toUpperCase()) {
    case 'A':
        resultCategory = 'Мотоцикл';
        break;
    case 'B':
        resultCategory = 'Легковий автомобіль';
        break;
    case 'C':
        resultCategory = 'Вантажний автомобіль';
        break;
    default:
        resultCategory = 'Введена неправильна назва категорії водія. Спробуйте ще.';
        break;
}
document.write(resultCategory);
