function solve() {
   let addButtons = document.querySelectorAll('.add-product');
   let textAreaElements = document.getElementsByTagName('textarea')[0];
   let checkoutButtonElement = document.querySelector('.checkout');
   let allProductNames = [];
   let totalSum = 0;
   Array.from(addButtons).forEach(btn=>{
      btn.addEventListener('click', ()=>{
         let product = {};
         let productElement = btn.parentNode.parentNode;

         let productName = productElement.querySelector('.product-title').textContent;
         let productPrice = productElement.querySelector('.product-line-price').textContent;
         product.name = productName;
         product.price= productPrice;
         if(!allProductNames.includes(productName)){
            allProductNames.push(productName);
         }
         totalSum += Number(productPrice);
         textAreaElements.textContent += `Added ${productName} for ${productPrice} to the cart.\n`; 
      });
   });

   checkoutButtonElement.addEventListener('click', ()=>{
      Array.from(addButtons).forEach(btn=>btn.disabled = 'true');
      checkoutButtonElement.disabled = 'true';
      textAreaElements.textContent += `You bought ${allProductNames.join(', ')} for ${totalSum.toFixed(2)}.`;
   })
}