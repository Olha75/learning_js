     //З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.


    //Крок 1. Введення необхідних даних
        const nameChild1:string=prompt(`Введіть ім'я першої дитини`, `Олександр/Олександра`)||'Дитина 1'
        const nameChild2:string=prompt(`Введіть ім'я другої дитини`, `Олександр/Олександра`)||'Дитина 2'
        const numberCandiesChild1:number=parseInt(prompt(`кількість цукерок у ${nameChild1}`)||'0')
        const numberCandiesChild2:number=parseInt(prompt(`кількість цукерок у ${nameChild2}`)||'0')

    
    //Крок 2. Обчислення  та виведення результатів
        if(numberCandiesChild1>numberCandiesChild2)
          document.write(`${nameChild1} має більше цукерок`)
        else
           if(numberCandiesChild1===numberCandiesChild2)
            document.write(`${nameChild1} та ${nameChild2} мають однакову кількість цукерок`)
           else document.write(`${nameChild2} має більше цукерок`)
         
    
    
