function getGreatestCommonDivisor(num1, num2){

    while(num2){
        let remainder = num2;
        num2 = num1%num2;
        num1=remainder;
    }
    console.log(num1);
}

getGreatestCommonDivisor(2154, 458);