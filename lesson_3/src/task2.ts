     //З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.

    //Крок 1. Введення необхідних даних
        const productPrice:number=parseFloat(prompt('Введіть ціну товара', '0')|| '0')
        const amountOfMoney:number=parseFloat(prompt('Введіть кількість грошей', '0')|| '0')
        const remainder:number=amountOfMoney-productPrice
        const lotteryPrice:number=4
    
    //Крок 2. Обчислення результатів та виведення.
        if (amountOfMoney<productPrice)
            document.write(`Вибачте, відмова. Не вистачає коштів.`)
        else 
            if (remainder>=lotteryPrice)
                document.write(`Дякуємо за покупку! Та пропонуємо придбати виграшну лотерею, всього за 4 грн!`)  
            
                else 
                document.write(`Дякуємо за покупку! Приходьте ще!`)  
    
