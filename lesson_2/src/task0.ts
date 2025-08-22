     //Обчислити значення виразів
//    
//     S1=a+12+b
//     S2=a+b2a
//     S3=3(a+b)c
//     S4=sin⁡(a-b)
//    
    //Крок 1. Введення необхідних даних
        const a:number=parseFloat(prompt('a=', '0')as string);
        const b:number=parseFloat(prompt('b=', '0')as string);
        const c:number=parseFloat(prompt('c=', '0')as string);
  
    
    //Крок 2. Обчислення результатів
        const s1=a+12+b;
        const s2=a+(b*2*a);
        const s3=(a+b)*3*c;
        const s4=Math.sin(a-b);
    
    //Крок 3. Виведення
        document.write(`S1=${s1}`);
        document.write(`S2=${s2}`);
        document.write(`S3=${s3}`);
        document.write(`S4=${s4}`);