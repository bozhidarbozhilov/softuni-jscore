function coffeeMachine(arr){
    let totalPrice = 0;
    let income = 0;
    for(let i = 0; i<arr.length;i++){
        let orderDetails = arr[i].split(", ");
        let insertCoins = orderDetails[0];
        let mainProduct = orderDetails[1];
        if(mainProduct==='coffee'){
            if(orderDetails[2]==='caffeine'){
                totalPrice = 0.8;
            }else if(orderDetails[2]==='decaf'){
                totalPrice = 0.9;
            }

            if(orderDetails[3]==='milk'){
                totalPrice = +(totalPrice+totalPrice*0.1).toFixed(1);
            }
        }else if(mainProduct === 'tea'){
            totalPrice = 0.8
            if(orderDetails[2]==='milk'){
                totalPrice = +(totalPrice+totalPrice*0.1).toFixed(1);
            }
        }
        if(orderDetails[orderDetails.length-1] !== '0'){
            totalPrice += 0.1;
        }

        
        if(insertCoins>=totalPrice){
            console.log(`You ordered ${mainProduct}. Price: ${totalPrice.toFixed(2)} Change: ${(insertCoins-totalPrice).toFixed(2)}`);
            income += totalPrice;
        }else{
            console.log(`Not enough money for ${mainProduct}. Need ${(totalPrice - insertCoins).toFixed(2)} more`)
        }
    }
    console.log(`Income Report: ${income.toFixed(2)}`)
}

coffeeMachine(['8.00, coffee, decaf, 4', '1.00, tea, 2']);