"use strict";
    //Обчислити значення виразів
//    
//     S1=a+12+b
//     S2=a+b2a
//     S3=3(a+b)c
//     S4=sin⁡(a-b)

        const a=parseFloat(prompt('a=', '0'))
        const b=parseFloat(prompt('b=', '0'))
        const c=parseFloat(prompt('c=', '0'))
    
    //Крок 2. Обчислення результатів</h3>
        const s1=a+12+b
        const s2=(b*2*a)+a
        const s3=(a+b)*3*c
        const s4=Math.sin(a-b)
    
    //Крок 3. Виведення
        document.write(`S1=${s1}<br>`)
        document.write(`S2=${s2}<br>`)
        document.write(`S3=${s3}<br>`)
        document.write(`S4=${s4}`)