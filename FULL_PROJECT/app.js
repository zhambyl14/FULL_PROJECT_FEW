
function decreaseQuantity() {
    if (quantity1 > 1) {
      quantity1--;
      document.getElementById("quantity1").textContent = quantity1;
      updateTotalPrice();
    }
  }
  
  function increaseQuantity() {
    if (quantity1 < 20) {
      quantity1++;
      document.getElementById("quantity1").textContent = quantity1;
      updateTotalPrice();
    }
  }
  
  function updateTotalPrice() {
    const a = quantity1 * price1 * 2;
    document.getElementById("order1").textContent = `${a}$`;
  }
  
  document.getElementById("decrease-quantity").addEventListener("click", decreaseQuantity);
  document.getElementById("increase-quantity").addEventListener("click", increaseQuantity);
  
  // Initialize the values
  let price1 = parseFloat(document.getElementById("burger-price").textContent);
  let quantity1 = parseInt(document.getElementById("quantity1").textContent);
  
  // Calculate and display the initial total price
  updateTotalPrice();
  



// // Изначальное количество
// let quantity2 = 1;
// // Цена одного продукта
// const pricePerItem2 = 6;
//     function func2Minus() {
//         if (quantity2 > 1) {
//             quantity2--;
//             updatePrice2();
//             document.getElementById("quantity2").textContent = quantity2;
//         }
//     }
    
//     // Функция увеличения количества
//     function func2Plus() {
//         if (quantity2 < 20) {
//             quantity2++;
//             updatePrice2();
//             document.getElementById("quantity2").textContent = quantity2;
//         }
//     }
    



// // Отображаем текущую сумму в корзине


// // Функция обновления цены
// function updatePrice2() {
//     const totalPrice2 = quantity2 * pricePerItem2;
//     document.querySelector(".card-price2").textContent = `Price: ${totalPrice2}$`;
// }

// // Функция уменьшения количества
// // Функция для добавления в корзину
// function func2Cart() {
    
    
//     const cartResult2 = quantity2 * pricePerItem2;
//     let b = `Ваш заказ: ${cartResult2}$`;
//     // Обновляем сумму в корзине
//     return b;
// }






