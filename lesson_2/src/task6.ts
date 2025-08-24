     //З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.

    //Крок 1. Введення необхідних даних
        const priceProduct1:number=parseFloat(prompt('Введіть вартість Товару 1', '0')as string)
        const quantityProduct1:number=parseInt(prompt('Введіть кількість одиниць Товару 1', '0')as string)
        const priceProduct2:number=parseFloat(prompt('Введіть вартість Товару 2', '0')as string)
        const quantityProduct2:number=parseInt(prompt('Введіть кількість одиниць Товару 2', '0')as string)
        const priceProduct3:number=parseFloat(prompt('Введіть вартість Товару 3', '0')as string)
        const quantityProduct3:number=parseInt(prompt('Введіть кількість одиниць Товару 3', '0')as string)
    
    //Крок 2. Обчислення результатів
        // const totalPriceProduct1: number = Number(priceProduct1.toFixed(2))*quantityProduct1
        // const totalPriceProduct2: number = Number(priceProduct2.toFixed(2))*quantityProduct2
        // const totalPriceProduct3: number = Number(priceProduct3.toFixed(2))*quantityProduct3
        const totalPriceProduct1: number = priceProduct1*quantityProduct1
        const totalPriceProduct2: number =priceProduct2*quantityProduct2
        const totalPriceProduct3: number = priceProduct3*quantityProduct3
        const totalPriceProducts:number=totalPriceProduct1+totalPriceProduct2+totalPriceProduct3

    
    //Крок 3. Виведення
        document.write(`
            <div class='chekkk'>
                <div class='logo'>
                    <img src='/images/fl.png' alt='Логотип магазину' class='fl_logo'>
                </div>
                <p>Каса №2 Романенко О.В.</p><br>
                <b><i>Товар 1</i></b><br> <div class='det'><span class='details'>${quantityProduct1} X ${priceProduct1.toFixed(2)}</span> <span class='sum'> ${totalPriceProduct1.toFixed(2)} A</span></div><br>
                <b><i>Товар 2</i></b><br> <div class='det'><span class='details'>${quantityProduct2} X ${priceProduct2.toFixed(2)}</span> <span class='sum'> ${totalPriceProduct2.toFixed(2)} A</span></div><br>
                <b><i>Товар 3</i></b><br> <div class='det'><span class='details'>${quantityProduct3} X ${priceProduct3.toFixed(2)}</span> <span class='sum'> ${totalPriceProduct3.toFixed(2)} A</span></div><br>
                <div class='totalsum'><h4>Сума ${totalPriceProducts.toFixed(2)} грн</h4></div>
                <p>Живи! А працюй у вільний час<br>
                Дякуємо за покупку!</p>
            </div>`)
