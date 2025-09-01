"use strict";
if (confirm('Почати тестування?')) {
    //Створити 10 елементів для введення цін продуктів
    let priseProduct = parseFloat('0');
    for (let numberProduct = 1; numberProduct <= 10; numberProduct++) {
        document.write(`<div class="body_product">
                    <div class='num_product'><h3>Product #${numberProduct}</h3></div>
                    <input  
                    class="product_list" 
                    required 
                    name="product-list" 
                    type='number' 
                    placeholder="Введіть ціну продукту цифрами" ${priseProduct.toFixed(2)}></div>`);
    }
}
