     //Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.


    //Крок 1. Введення необхідних даних
        const seconds:number=parseFloat(prompt('Введіть кількість секунд що пройшла від початку доби', '0')as string);
        const oneMinute:number=60
        const oneHour:number=3600
    
    //Крок 2. Обчислення результатів
        const hours:number=seconds/oneHour      
        const minutes:number=seconds/oneMinute
    
    //Крок 3. Виведення
        document.write(`Якщо з початку доби пройшло ${seconds} секунд, то це прошло ${hours} годин  або ${minutes} хвилин`);
