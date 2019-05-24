function validChecker(arr){
    let x1 = +arr[0];
    let y1 = +arr[1];
    let x2 = +arr[2];
    let y2 = +arr[3];

    console.log(outputString(x1,y1,0,0));
    console.log(outputString(x2,y2,0,0));
    console.log(outputString(x1,y1,x2,y2));

    function outputString (x1,y1,x2,y2){
        let distance = calcDistance(x1,y1,x2,y2);
        if(Number.isInteger(distance)){
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
        }else{
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
        }
    }
    function calcDistance(x1,y1,x2,y2){
        return Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));
    } 
}

validChecker([2, 1, 1, 1]);