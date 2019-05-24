function cookByNumbers(arr){
    let number = +arr[0];

    for(let i=1; i<arr.length;i++){
        number =  manipulateNumber(arr[i], number);
        console.log(number);
    }

    function manipulateNumber(operation, num){
        switch(operation){
            case 'chop':
            return num/2;
            case 'dice':
            return Math.sqrt(num);
            case 'spice':
            return num+1;
            case 'bake':
            return num*3;
            case 'fillet':
            return num*0.8;
            default:
            return -1;
        }
    }
}

cookByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);