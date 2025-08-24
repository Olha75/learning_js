     //Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.

    //Крок 1. Введення необхідних даних
        const lengthCentimeters:number=parseFloat(prompt('Введіть довжину у сантиметрах', '0')as string)
  
    
    //Крок 2. Обчислення результатів
        const lengthMeters:number=lengthCentimeters/100 /*де 100 це кількість см у 1 м*/        
        const lengthKilometers:number=lengthCentimeters/100000 /*де 100000 це кількість см у 1 км*/  
        
    
    //Крок 3. Виведення
        document.write(`${lengthCentimeters} см це ${lengthMeters} м  або ${lengthKilometers} км`);
