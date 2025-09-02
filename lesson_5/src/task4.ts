     if (confirm('Почати тестування?')) {

     //Ігровий автомат. Випадково вибираємо зображення у 3 позиціях. 
     // Вибір у кожній позиції вибирається як одне з чотирьох зображень.
     // Вивести ці зображення і повідомити виграш користувача (три перших зображення 100 грн,
                                                             //  три других – 200,
                                                             //  три третіх – 500,
                                                             //  три четвертих зображення – 1000грн).
     //  Використати цикли і switch (для вибору зображення за номером).



let totalPrice =0;
let img1, img2, img3;


for (let num = 1; num <=3; num++) {
const randImgNum = 1 + Math.floor(Math.random() * 4);
let imgSrc
let imgName
let priseWin=0


switch (randImgNum ) {
     case 1:imgSrc = './images/lemon.jpg';
          imgName='lemon';
          priseWin=100;
          break;

          case 2:imgSrc = './images/orange.jpg';
          imgName='orange';
          priseWin=200;
          break;

          case 3:imgSrc = './images/grapes.jpg';
          imgName='grapes';
          priseWin=500;
          break;

          case 4:imgSrc = './images/watermelon.jpg';
          imgName='watermelon';
          priseWin=1000;
          break;

}
document.write(`<img src=${imgSrc}>` )
totalPrice += priseWin;
if (num===1) img1=imgName;
if (num===2) img2=imgName;
if (num===3) img3=imgName;
}
if (img1===img2 && img2===img3) {
     document.write(`<h2 class="win">Вітаємо! Ви виграли ${totalPrice} грн</h2>`)
}
else
document.write('<h2 class="loser">Вибачте, але сьогодні виграло КАЗИНО. Не грайте більше!</h2>')
}
