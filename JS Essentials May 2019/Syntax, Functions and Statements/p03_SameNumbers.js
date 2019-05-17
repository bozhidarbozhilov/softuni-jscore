function sameNumbers(num){
    let numArr = num.toString().split('');
    let areEqual = true;
    let sum = +numArr[0];
    for(let i = 1; i < numArr.length;i++){
        if(numArr[i-1] !== numArr[i]){
            areEqual = false;
        }
        sum += +numArr[i];
    }

    console.log(areEqual);
    console.log(sum)
}

sameNumbers(3323);