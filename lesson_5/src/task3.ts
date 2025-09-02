     // if (confirm('Почати тестування?')) {

//Вивести на екран N абзаців (N вводиться користувачем) за зразком:

// document.write('<table class="tabl">')




     
     let numberParagraf:number=parseInt(prompt('Введіть кількість абзаців','1')||0
     // let numberHeading:number=parseInt()
     // let numberSection:number=parseInt()
     
     for (let num1 = 1; num1 <= numberParagraf; num1++) {
          // document.write(`<h1>Заголовок ${num1}</h1><br><p>Розділ ${num1}, параграф ${num1}</p>`);
       document.write(`<div class="books"><h1>Заголовок ${num1}</h1></div>`);
          for (let num2 = 1; num2 <=num1; num2++) {
                document.write(`<div class="books"><p>Розділ ${num1}, параграф ${num2}</p></div>`);
         
     }
     
     
     
     



// }
