"use strict";
//З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).
//Крок 1. Введення необхідних даних
const agePerson = parseInt(prompt('Введіть вік людини від 1 до 100 років', '1') || '0');
// const childKindergarten:number=agePerson>=1 && agePerson<=5
// const schoolboy:number=agePerson>=6 && agePerson<=16
// const student:number=agePerson>=17 && agePerson<=25
// const employee:number=agePerson>=26 && agePerson<=60
// const pensioner:number=agePerson>=60 
// const notAccounted:number=agePerson<1 && agePerson>100
let result;
//Крок 2. Обчислення результатів
if (agePerson >= 1 && agePerson <= 5) {
    result = `Людина вік якої ${agePerson} це дитина у садочку`;
}
else if (agePerson >= 6 && agePerson <= 16) {
    result = `Людина вік якої ${agePerson} це школяр/ка`;
}
else if (agePerson >= 17 && agePerson <= 25) {
    result = `Людина вік якої ${agePerson} це студент/ка`;
}
else if (agePerson >= 26 && agePerson <= 59) {
    result = `Людина вік якої ${agePerson} це працююча людина`;
}
else if (agePerson >= 60 && agePerson <= 100) {
    result = `Людина вік якої ${agePerson} це пенсіонер`;
}
else {
    result = `Вибачте, введено не вірне значення. Спробуйте ще.`;
}
document.write(result);
