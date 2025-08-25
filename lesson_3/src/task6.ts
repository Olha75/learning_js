     //З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.


    //Крок 1. Введення необхідних даних
        const  numberDayWeek:number=parseInt(prompt(`Введіть номер дня тижня від 1 до 7`, '0')as string)
        let nameDay:string

    //Крок 2. Обчислення результатів
    switch(numberDayWeek){
        case 1:nameDay='Понеділок';
        break;
        case 2:nameDay='Вівторок';
        break;
        case 3:nameDay='Середа';
        break;
        case 4:nameDay='Четвер';
        break;
        case 5:nameDay='П1ятниця';
        break;
        case 6:nameDay='Субота';
        break;
        case 7:nameDay='Неділя';
        break;
        default:nameDay='Номер дня тижня введено невірно. Спробуйте ще. ';
        break;
    }
    document.write(nameDay)
       
    
    //Крок 3. Виведення
        