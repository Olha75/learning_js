"use strict";
if (confirm('Почати тестування?')) {
    //Вивести на екран N абзаців (N вводиться користувачем) за зразком:
    let numberParagraf = parseInt(prompt('Введіть кількість абзаців', '1') || '0');
    for (let num1 = 1; num1 <= numberParagraf; num1++) {
        document.write(`<div class="books"><h1>Заголовок ${num1}</h1></div>`);
        for (let num2 = 1; num2 <= num1; num2++) {
            document.write(`<div class="books"><p>Розділ ${num1}, параграф ${num2}</p></div>`);
        }
    }
}
