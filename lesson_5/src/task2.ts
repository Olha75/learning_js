     if (confirm('Почати тестування?')) {
//Вивести таблицю з 3 рядків і 7 стовпців


 document.write('<table class="tabl">')
for (let row = 1; row <=3 ; row++) {
     document.write('<tr>')
    
          for (let column = 1; column <=7; column++) {
      document.write(`<td>${row} ${column}</td>`)
          }
 document.write('</tr>')
   
}
 document.write('</table>')  
}
