     //Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості)

    //Крок 1. Введення необхідних даних
        const onePiece:number=parseFloat(prompt('Введіть вартість за одиницю товару в грн', '0')as string)
        const numberPiece:number=parseInt(prompt('Введіть кількість штук', '0')as string)
        const taxFivePercent:number=0.05
    
    //Крок 2. Обчислення результатів
        const totalCost:number=onePiece*numberPiece        
        const taxTotalCost:number=totalCost*taxFivePercent
        
    
    //Крок 3. Виведення
        document.write(`Загальна вартість за товар = ${totalCost.toFixed(2)} грн<br>`)
        document.write(`ПДВ 5% = ${taxTotalCost.toFixed(2)} грн`)
        

        