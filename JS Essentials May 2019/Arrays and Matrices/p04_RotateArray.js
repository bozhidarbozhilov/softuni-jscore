function rotateArray(arr){
    let rotateTimes = arr.pop();
    let result = [];

    for(let i = 0; i < rotateTimes; i++){
        // for(let j = 0; j<arr.length;j++){
        //     result[(j+1) % arr.length] = arr[j];
        // }
        // arr = result;
        // result = [];
        arr.unshift(arr.pop());
    }

    console.log(arr.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']
);