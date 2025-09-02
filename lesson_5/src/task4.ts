     if (confirm('Почати тестування?')) {

     //Ігровий автомат. Випадково вибираємо зображення у 3 позиціях. 
     // Вибір у кожній позиції вибирається як одне з чотирьох зображень.
     // Вивести ці зображення і повідомити виграш користувача (три перших зображення 100 грн,
                                                             //  три других – 200,
                                                             //  три третіх – 500,
                                                             //  три четвертих зображення – 1000грн).
     //  Використати цикли і switch (для вибору зображення за номером).


const randImgNum = 1 + Math.floor(Math.random() * 4);
let imgSrc

switch (randImgNum ) {
     case 1:imgSrc = '../images/lemon.jpg';
          
          break;

          case 2:imgSrc = '../images/orange.jpg';
          
          break;
          case 3:imgSrc = '../images/grapes.jpg';
          
          break;
          case 4:imgSrc = '../images/watermelon.jpg';
          
          break;
    
}
document.write(`<img src=${imgSrc}><img src=${imgSrc}><img src=${imgSrc}>` )





}
