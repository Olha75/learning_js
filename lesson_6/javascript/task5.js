"use strict";
if (confirm('Почати тестування?')) {
    //Каса. Користувачу повідомляють суму, яку йому треба сплатити. Користувач поступово вводить суму грошей до тих пір, поки суми не буде достатньо для оплати товарів (кожного разу користувачу повідомляють, яку ще суму потрібно ввести). 
    let randomAmountToPay = 1 + Math.floor(Math.random() * 500);
    let userMoney = 0;
    let howMuchMoneyDeposited = 0;
    do {
        userMoney = parseInt(prompt(`Сума до сплати ${randomAmountToPay} грн. Введіть суму для успішної оплати`, '0') || '0');
        howMuchMoneyDeposited += userMoney;
        if (howMuchMoneyDeposited < randomAmountToPay) {
            alert(`Сума до сплати ${randomAmountToPay} грн. Сплачено ${howMuchMoneyDeposited} грн. Залишок ${randomAmountToPay - howMuchMoneyDeposited} грн.`);
        }
    } while (howMuchMoneyDeposited < randomAmountToPay);
    if (howMuchMoneyDeposited > randomAmountToPay) {
        alert(`Дякуємо, оплата пройшла успішно. Заберіть решту ${howMuchMoneyDeposited - randomAmountToPay} грн.`);
    }
    else
        alert(`Дякуємо, оплата пройшла успішно. Приходьте ще!`);
}
