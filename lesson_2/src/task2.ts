     //Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.

    //Крок 1. Введення необхідних даних
        const yearBirth:number=parseInt(prompt('Введіть рік народження', '0000')as string)
        const yearCurrent:number=parseInt(prompt('Поточний рік', '2025')as string)
    
    //Крок 2. Обчислення результатів
        const numberYears=yearCurrent-yearBirth
    
    //Крок 3. Виведення
        document.write(`Кількість повних років = ${numberYears}`)
