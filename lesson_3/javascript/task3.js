"use strict";
//Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.
//Крок 1. Введення необхідних даних
const randomNumber = 1 + Math.floor(Math.random() * 5);
const numberUserAttempt1 = parseInt(prompt('Пограємо? Вгадайте число від 1 до 5. У Вас 2 спроби. Погнали!', '1') || '0');
let resultPlay;
//Крок 2. Обчислення результатів
if (numberUserAttempt1 === randomNumber) {
    resultPlay = 'Вітаю, Ви виграли!';
}
else {
    const numberUserAttempt2 = parseInt(prompt('Шкода, але перша спроба невдала. Давай пробуй ще!', '1') || '0');
    if (numberUserAttempt2 === randomNumber) {
        resultPlay = 'Супер! Ви виграли з другої спроби! Вітаю!';
    }
    else {
        resultPlay = 'Нажаль і друга спроба була невдала. Ви програли.';
    }
}
document.write(resultPlay);
