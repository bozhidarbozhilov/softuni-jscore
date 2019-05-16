function calcFruitPrice(fruit,weight,pricePerKg) {
    const weightInKgs = weight/1000;
    const totalPrice = weightInKgs * pricePerKg;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKgs.toFixed(2)} kilograms ${fruit}.`);
}

calcFruitPrice('orange', 2500, 1.80);